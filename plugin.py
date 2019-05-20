# Basic Python Listener Example
#
# Author: Dnpwwo, 2017
#
# Example creates and listens on an HTTP socket. During heartbeats the code then
# creates client connections to the listening sockets
# and sends either GET or POST requests to it
#
#
"""
<plugin key="HTTPListen" name="Listener Sample Plugin" author="dnpwwo" version="1.0.0">
    <params>
        <param field="Port" label="Port" width="30px" required="true" default="8008"/>
        <param field="Mode6" label="Debug" width="100px">
            <options>
                <option label="True" value="Debug"/>
                <option label="False" value="Normal"  default="true" />
                <option label="Logging" value="File"/>
            </options>
        </param>
    </params>
</plugin>
"""
import Domoticz
import os.path

import mimetypes

from urllib.parse import urlparse, urlsplit, urldefrag, parse_qs
from time import time, ctime, strftime, gmtime

import zlib
import gzip


ALLOW_GZIP = 1
ALLOW_DEFLATE = 1
ALLOW_CHUNK = 1
MAX_KB_TO_SEND = 8 * 1024
DEBUG_HTTP = True
DELAY = 0

class BasePlugin:
    enabled = False
    heartbeats = 0

    def __init__(self):
        
        self.httpServerConn = None
        self.httpServerConns = {}
        self.httpClientConn = None
        self.homedirectory = None

        return

    def onStart(self):
        if Parameters["Mode6"] != "Normal":
            Domoticz.Debugging(1)
        DumpConfigToLog()
        self.httpServerConn = Domoticz.Connection(Name="Server Connection", Transport="TCP/IP", Protocol="HTTPS", Port=Parameters["Port"])
        self.httpServerConn.Listen()
        Domoticz.Log("Leaving on start")
        self.homedirectory = Parameters['HomeFolder']

    def onConnect(self, Connection, Status, Description):

        if (Status == 0):
            Domoticz.Log("Connected successfully to: "+Connection.Address+":"+Connection.Port)
            if Connection.Name not in self.httpServerConns:
                self.httpServerConns[Connection.Name] = Connection
            else:
                Domoticz.Log("Connection already established .... %s" %Connection)
        else:
            Domoticz.Log("Failed to connect ("+str(Status)+") to: "+Connection.Address+":"+Connection.Port+" with error: "+Description)
        Domoticz.Log("Number of Connection : %s" %len(self.httpServerConns))


    def onMessage(self, Connection, Data):

            Domoticz.Log("WebServer onMessage")
            DumpHTTPResponseToLog(Data)

            headerCode = "200 OK"

            if (not 'Verb' in Data):
                Domoticz.Error("Invalid web request received, no Verb present")
                headerCode = "400 Bad Request"
            elif (Data['Verb'] not in ( 'GET', 'PUT', 'POST', 'DELETE')):
                Domoticz.Error("Invalid web request received, only GET requests allowed ("+Data['Verb']+")")
                headerCode = "405 Method Not Allowed"
            elif (not 'URL' in Data):
                Domoticz.Error("Invalid web request received, no URL present")
                headerCode = "400 Bad Request"

            parsed_url = urlparse(  Data['URL'] )
            Domoticz.Log("URL: %s , Path: %s" %( Data['URL'], parsed_url.path))

            if  Data['URL'][0] == '/': parsed_query = Data['URL'][1:].split('/')
            else: parsed_query = Data['URL'].split('/')

            if 'Data' not in Data: Data['Data'] = None

            if (headerCode != "200 OK"):
                self.sendResponse( Connection, {"Status": headerCode}, False  )
                return

            webFilename = self.homedirectory +'www'+ Data['URL']
            Domoticz.Debug("webFilename: %s" %webFilename)
            if not os.path.isfile( webFilename ):
                webFilename =  self.homedirectory + 'www' + "/index.html"
                Domoticz.Debug("Redirecting to /index.html")

            # We are ready to send the response
            _response = setupHeadersResponse()

            #webFilename = self.homedirectory +'www'+Data['URL']
            Domoticz.Debug("Opening: %s" %webFilename)
            _lastmodified = strftime("%a, %d %m %y %H:%M:%S GMT", gmtime(os.path.getmtime(webFilename)))

            _response["Headers"]["Last-Modified"] = _lastmodified
            with open(webFilename , mode ='rb') as webFile:
                _response["Data"] = webFile.read()

            _contentType, _contentEncoding = mimetypes.guess_type( Data['URL'] )
            if ( webFilename.find('.js') != -1): _contentType = 'text/javascript'
            Domoticz.Debug("MimeType: %s, Content-Encoding: %s " %(_contentType, _contentEncoding))

            if _contentType:
                _response["Headers"]["Content-Type"] = _contentType +"; charset=utf-8"
            if _contentEncoding:
                _response["Headers"]["Content-Encoding"] = _contentEncoding

            _response["Status"] = "200 OK"
            if 'Cookie' in Data['Headers']:
                _response['Headers']['Cookie'] = Data['Headers']['Cookie']

            flgcompress=False
            if Data['Headers']['Accept-Encoding'].find('gzip') != -1:
                flgcompress=True
            self.sendResponse( Connection, _response, flgcompress  )


    def sendResponse( self, Connection, Response, Compress ):

        if ('Data' not in Response) or (Response['Data'] == None):
            #DumpHTTPResponseToLog( Response )
            Connection.Send( Response , Delay=1)
            return

        Domoticz.Log("Sending Response to : %s" %Connection)
        Domoticz.Debug("sendResponse - Compress: %s, Chunk: %s" %(Compress, ALLOW_CHUNK))
        if ALLOW_GZIP and Compress and 'Data' in Response:
            if len(Response["Data"]) > MAX_KB_TO_SEND:

                orig_size = len(Response["Data"])
                if ALLOW_DEFLATE:
                    #zlib_compress = zlib.compressobj(
                    #        9,        # level: 0-9
                    #        zlib.DEFLATED,        # method: must be DEFLATED
                    #        16 + zlib.MAX_WBITS,  # window size in bits:
                    #                            #   -15..-8: negate, suppress header
                    #                            #   8..15: normal
                    #                            #   16..30: subtract 16, gzip header
                    #        zlib.DEF_MEM_LEVEL,   # mem level: 1..8/9
                    #        2                     # strategy:
                    #                            #   0 = Z_DEFAULT_STRATEGY
                    #                            #   1 = Z_FILTERED
                    #                            #   2 = Z_HUFFMAN_ONLY
                    #                            #   3 = Z_RLE
                    #                            #   4 = Z_FIXED
                    #         )

                    zlib_compress = zlib.compressobj( 9, zlib.DEFLATED, -zlib.MAX_WBITS, zlib.DEF_MEM_LEVEL, 2)
                    deflated = zlib_compress.compress(Response["Data"])
                    deflated += zlib_compress.flush()
                    Response["Headers"]['Content-Encoding'] = 'deflate'
                    Response["Data"] = deflated
                else:
                    Response["Data"] = gzip.compress( Response["Data"] )
                    Response["Headers"]['Content-Encoding'] = 'gzip'
                Domoticz.Log("Compression from %s to %s (%s %%)" %( orig_size, len(Response["Data"]), int((len(Response["Data"])/orig_size)*100)))

        if ALLOW_CHUNK and len(Response['Data']) > MAX_KB_TO_SEND:
            idx = 0
            HTTPchunk = {}
            HTTPchunk['Status'] = Response['Status']
            HTTPchunk['Chunk'] = True
            HTTPchunk['Headers'] = {}
            HTTPchunk['Headers'] = dict(Response['Headers'])
            HTTPchunk['Data'] = Response['Data'][0:MAX_KB_TO_SEND]
            Domoticz.Log("Sending: %s out of %s" %(idx, len((Response['Data']))))
            DumpHTTPResponseToLog( HTTPchunk )
            Connection.Send( HTTPchunk , Delay=1)

            idx = MAX_KB_TO_SEND
            while idx != -1:
                tosend={}
                tosend['Chunk'] = True
                if idx + MAX_KB_TO_SEND < len(Response['Data']):
                    # we have to send one chunk and then continue
                    tosend['Data'] = Response['Data'][idx:idx+MAX_KB_TO_SEND]
                    idx += MAX_KB_TO_SEND
                else:
                    # we have to send MAX_KB_TO_SEND or less and then exit
                    tosend['Data'] = Response['Data'][idx:]
                    idx = -1

                Domoticz.Log("Sending: %s out of %s" %(idx, len((Response['Data']))))
                #DumpHTTPResponseToLog( tosend )
                Connection.Send( tosend , Delay=1)

            Domoticz.Log("Last Send . Empty")
            tosend={}
            tosend['Chunk'] = True
            DumpHTTPResponseToLog( tosend )
            Connection.Send( tosend , Delay = 1)
        else:
                DumpHTTPResponseToLog( Response )
                Connection.Send( Response , Delay = 1)



    def onDisconnect(self, Connection):

        Domoticz.Log("onDisconnect %s" %(Connection))
        for x in self.httpServerConns:
            Domoticz.Log("--> "+str(x)+"'.")
        if Connection.Name in self.httpServerConns:
            del self.httpServerConns[Connection.Name]


    def onHeartbeat(self):

        self.heartbeats += 1
        Domoticz.Log("%s Connections established" %len(self.httpServerConns))
        for con in self.httpServerConns:
            Domoticz.Log("Connection established: %s" %self.httpServerConns[con].Name)
        return


global _plugin
_plugin = BasePlugin()

def onStart():
    global _plugin
    _plugin.onStart()

def onConnect(Connection, Status, Description):
    global _plugin
    _plugin.onConnect(Connection, Status, Description)

def onMessage(Connection, Data):
    global _plugin
    _plugin.onMessage(Connection, Data)

def onDisconnect(Connection):
    global _plugin
    _plugin.onDisconnect(Connection)

def onHeartbeat():
    global _plugin
    _plugin.onHeartbeat()

# Generic helper functions
def LogMessage(Message):
    if Parameters["Mode6"] != "Normal":
        Domoticz.Log(Message)
    elif Parameters["Mode6"] != "Debug":
        Domoticz.Debug(Message)
    else:
        f = open("http.html","w")
        f.write(Message)
        f.close()   

def DumpConfigToLog():
    for x in Parameters:
        if Parameters[x] != "":
            Domoticz.Debug( "'" + x + "':'" + str(Parameters[x]) + "'")
    Domoticz.Debug("Device count: " + str(len(Devices)))
    for x in Devices:
        Domoticz.Debug("Device:           " + str(x) + " - " + str(Devices[x]))
        Domoticz.Debug("Device ID:       '" + str(Devices[x].ID) + "'")
        Domoticz.Debug("Device Name:     '" + Devices[x].Name + "'")
        Domoticz.Debug("Device nValue:    " + str(Devices[x].nValue))
        Domoticz.Debug("Device sValue:   '" + Devices[x].sValue + "'")
        Domoticz.Debug("Device LastLevel: " + str(Devices[x].LastLevel))
    return


def DumpHTTPResponseToLog(httpDict):

    if not DEBUG_HTTP:
        return
    if isinstance(httpDict, dict):
        Domoticz.Log("HTTP Details ("+str(len(httpDict))+"):")
        for x in httpDict:
            if isinstance(httpDict[x], dict):
                Domoticz.Log("--->'"+x+" ("+str(len(httpDict[x]))+"):")
                for y in httpDict[x]:
                    Domoticz.Log("------->'" + y + "':'" + str(httpDict[x][y]) + "'")
            else:
                if x == 'Data':
                    Domoticz.Log("--->'%s':'%.40s'" %(x, str(httpDict[x])))
                else:
                    Domoticz.Log("--->'" + x + "':'" + str(httpDict[x]) + "'")

def setupHeadersResponse():

    _response = {}
    _response["Headers"] = {}
    _response["Headers"]["Connection"] = "Keep-alive"
    _response["Headers"]["User-Agent"] = "Plugin-Zigate/v1"
    _response["Headers"]["Server"] = "Domoticz"
    _response["Headers"]["Cache-Control"] = "private"
    #_response["Headers"]["Cache-Control"] = "no-cache, no-store, must-revalidate"
    #_response["Headers"]["Pragma"] = "no-cache"
    #_response["Headers"]["Expires"] = "0"
    _response["Headers"]["Accept"] = "*/*"
    return _response
