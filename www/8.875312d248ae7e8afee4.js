(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    'jH+s': function(l, n, e) {
      'use strict';
      e.r(n);
      var u = e('CcnG'),
        t = (function() {
          return function() {};
        })(),
        o = e('pMnS'),
        i = e('gIcY'),
        a = e('U+Mh'),
        d = e('Ip0R'),
        r = e('R/X1'),
        c = e('3/HP'),
        m = e('FO+L'),
        s = e('nhM1'),
        p = e('BARL'),
        v = e('Y0Co'),
        f = e('8iEZ'),
        g = e('A7o+'),
        C = e('ey9i'),
        h = e('H+bZ'),
        b = new C.a('ListeComponent'),
        D = (function() {
          function l(l, n, e, u) {
            (this.apiService = l),
              (this.formBuilder = n),
              (this.fgd = e),
              (this.translate = u),
              (this.devices = []),
              (this.rows = []),
              (this.editing = {}),
              (this.temp = []);
          }
          return (
            (l.prototype.ngOnInit = function() {
              var l = this;
              this.apiService.getZDeviceName().subscribe(function(n) {
                (l.json = n),
                  Object.entries(n).forEach(function(n) {
                    var e = n[1];
                    (e.key = n[0]), (e.MacCapa = parseInt(e.MacCapa, 16).toString(10)), l.devices.push(e);
                  }),
                  (l.rows = l.devices),
                  (l.temp = l.rows.slice());
              });
            }),
            (l.prototype.updateValue = function(l, n, e) {
              b.debug('inline editing rowIndex', e),
                (this.editing[e + '-' + n] = !1),
                (this.rows[e][n] = l.target.value),
                (this.rows = this.rows.slice()),
                b.debug('UPDATED!', this.rows[e][n]);
            }),
            (l.prototype.updateDevices = function() {
              this.apiService.putZDeviceName(this.json).subscribe(function(l) {
                b.debug(l);
              });
            }),
            (l.prototype.updateFilter = function(l) {
              var n = l.target.value.toLowerCase(),
                e = this.temp.filter(function(l) {
                  var e = !1;
                  return (
                    l.Model && (e = -1 !== l.Model.toLowerCase().indexOf(n)),
                    !e && l.ZDeviceName && (e = -1 !== l.ZDeviceName.toLowerCase().indexOf(n)),
                    !e && l.key && (e = -1 !== l.key.toLowerCase().indexOf(n)),
                    !e && l.Status && (e = -1 !== l.Status.toLowerCase().indexOf(n)),
                    !e && l.PowerSource && (e = -1 !== l.PowerSource.toLowerCase().indexOf(n)),
                    !e && l.IEEE && (e = -1 !== l.IEEE.toLowerCase().indexOf(n)),
                    !e &&
                      l.WidgetNames &&
                      l.WidgetNames.forEach(function(l) {
                        !e && l && (e = -1 !== l.toLowerCase().indexOf(n));
                      }),
                    e || !n
                  );
                });
              (this.rows = e), (this.table.offset = 0);
            }),
            l
          );
        })(),
        T = u['\u0275crt']({ encapsulation: 0, styles: [['']], data: {} });
      function w(l) {
        return u['\u0275vid'](
          0,
          [(l()(), u['\u0275ted'](0, null, ['\n                ', '\n              ']))],
          null,
          function(l, n) {
            l(n, 0, 0, n.context.row.key);
          }
        );
      }
      function x(l) {
        return u['\u0275vid'](
          0,
          [(l()(), u['\u0275ted'](0, null, ['\n                ', '\n              ']))],
          null,
          function(l, n) {
            l(n, 0, 0, n.context.row.IEEE);
          }
        );
      }
      function S(l) {
        return u['\u0275vid'](
          0,
          [(l()(), u['\u0275ted'](0, null, ['\n                ', '\n              ']))],
          null,
          function(l, n) {
            l(n, 0, 0, n.context.row.Model);
          }
        );
      }
      function y(l) {
        return u['\u0275vid'](
          0,
          [
            (l()(), u['\u0275eld'](0, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (l()(), u['\u0275ted'](1, null, ['\n                  ', '\n                ']))
          ],
          null,
          function(l, n) {
            l(n, 1, 0, n.context.$implicit);
          }
        );
      }
      function N(l) {
        return u['\u0275vid'](
          0,
          [
            (l()(), u['\u0275ted'](-1, null, ['\n                '])),
            (l()(), u['\u0275and'](16777216, null, null, 1, null, y)),
            u['\u0275did'](
              2,
              278528,
              null,
              0,
              d.NgForOf,
              [u.ViewContainerRef, u.TemplateRef, u.IterableDiffers],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (l()(), u['\u0275ted'](-1, null, ['\n              ']))
          ],
          function(l, n) {
            l(n, 2, 0, n.context.row.WidgetNames);
          },
          null
        );
      }
      function R(l) {
        return u['\u0275vid'](
          0,
          [
            (l()(),
            u['\u0275eld'](
              0,
              0,
              null,
              null,
              1,
              'span',
              [['title', 'Double click to edit']],
              null,
              [[null, 'dblclick']],
              function(l, n, e) {
                var u = !0;
                return (
                  'dblclick' === n &&
                    (u = 0 != (l.component.editing[l.parent.context.rowIndex + '-ZDeviceName'] = !0) && u),
                  u
                );
              },
              null,
              null
            )),
            (l()(), u['\u0275ted'](1, null, ['\n                  ', '\n                ']))
          ],
          null,
          function(l, n) {
            l(n, 1, 0, n.parent.context.row.ZDeviceName);
          }
        );
      }
      function q(l) {
        return u['\u0275vid'](
          0,
          [
            (l()(),
            u['\u0275eld'](
              0,
              0,
              null,
              null,
              0,
              'input',
              [['autofocus', ''], ['type', 'text']],
              [[8, 'value', 0]],
              [[null, 'blur']],
              function(l, n, e) {
                var u = !0;
                return (
                  'blur' === n &&
                    (u = !1 !== l.component.updateValue(e, 'ZDeviceName', l.parent.context.rowIndex) && u),
                  u
                );
              },
              null,
              null
            ))
          ],
          null,
          function(l, n) {
            l(n, 0, 0, n.parent.context.row.ZDeviceName);
          }
        );
      }
      function E(l) {
        return u['\u0275vid'](
          0,
          [
            (l()(), u['\u0275ted'](-1, null, ['\n                '])),
            (l()(), u['\u0275and'](16777216, null, null, 1, null, R)),
            u['\u0275did'](2, 16384, null, 0, d.NgIf, [u.ViewContainerRef, u.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
            (l()(), u['\u0275ted'](-1, null, ['\n                '])),
            (l()(), u['\u0275and'](16777216, null, null, 1, null, q)),
            u['\u0275did'](5, 16384, null, 0, d.NgIf, [u.ViewContainerRef, u.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
            (l()(), u['\u0275ted'](-1, null, ['\n              ']))
          ],
          function(l, n) {
            var e = n.component;
            l(n, 2, 0, !e.editing[n.context.rowIndex + '-ZDeviceName']),
              l(n, 5, 0, !n.context.row.ZDeviceName || e.editing[n.context.rowIndex + '-ZDeviceName']);
          },
          null
        );
      }
      function I(l) {
        return u['\u0275vid'](
          0,
          [(l()(), u['\u0275ted'](0, null, ['\n                ', '\n              ']))],
          null,
          function(l, n) {
            l(n, 0, 0, n.context.row.MacCapa);
          }
        );
      }
      function M(l) {
        return u['\u0275vid'](
          0,
          [(l()(), u['\u0275ted'](0, null, ['\n                ', '\n              ']))],
          null,
          function(l, n) {
            l(n, 0, 0, n.context.row.PowerSource);
          }
        );
      }
      function k(l) {
        return u['\u0275vid'](
          0,
          [(l()(), u['\u0275ted'](0, null, ['\n                ', '\n              ']))],
          null,
          function(l, n) {
            l(n, 0, 0, n.context.row.Status);
          }
        );
      }
      function H(l) {
        return u['\u0275vid'](
          0,
          [
            u['\u0275qud'](402653184, 1, { table: 0 }),
            (l()(), u['\u0275eld'](1, 0, null, null, 119, 'div', [['class', 'row']], null, null, null, null, null)),
            (l()(), u['\u0275ted'](-1, null, ['\n  '])),
            (l()(),
            u['\u0275eld'](3, 0, null, null, 116, 'div', [['class', 'col-sm-10']], null, null, null, null, null)),
            (l()(), u['\u0275ted'](-1, null, ['\n    '])),
            (l()(), u['\u0275eld'](5, 0, null, null, 113, 'div', [['class', 'card']], null, null, null, null, null)),
            (l()(), u['\u0275ted'](-1, null, ['\n      '])),
            (l()(),
            u['\u0275eld'](7, 0, null, null, 1, 'div', [['class', 'card-header']], null, null, null, null, null)),
            (l()(), u['\u0275ted'](-1, null, ['\n        Liste des Devices\n      '])),
            (l()(), u['\u0275ted'](-1, null, ['\n      '])),
            (l()(),
            u['\u0275eld'](10, 0, null, null, 107, 'div', [['class', 'card-body']], null, null, null, null, null)),
            (l()(), u['\u0275ted'](-1, null, ['\n        '])),
            (l()(),
            u['\u0275eld'](12, 0, null, null, 1, 'h5', [['class', 'card-title']], null, null, null, null, null)),
            (l()(), u['\u0275ted'](-1, null, ['Sous Titre'])),
            (l()(), u['\u0275ted'](-1, null, ['\n        '])),
            (l()(),
            u['\u0275eld'](15, 0, null, null, 92, 'div', [['class', 'card-text']], null, null, null, null, null)),
            (l()(), u['\u0275ted'](-1, null, ['\n          '])),
            (l()(),
            u['\u0275eld'](
              17,
              0,
              null,
              null,
              0,
              'input',
              [['placeholder', 'Type to filter...'], ['type', 'text']],
              null,
              [[null, 'keyup']],
              function(l, n, e) {
                var u = !0;
                return 'keyup' === n && (u = !1 !== l.component.updateFilter(e) && u), u;
              },
              null,
              null
            )),
            (l()(), u['\u0275ted'](-1, null, ['\n          '])),
            (l()(),
            u['\u0275eld'](
              19,
              0,
              null,
              null,
              87,
              'ngx-datatable',
              [['class', 'bootstrap ngx-datatable']],
              [
                [2, 'fixed-header', null],
                [2, 'fixed-row', null],
                [2, 'scroll-vertical', null],
                [2, 'virtualized', null],
                [2, 'scroll-horz', null],
                [2, 'selectable', null],
                [2, 'checkbox-selection', null],
                [2, 'cell-selection', null],
                [2, 'single-selection', null],
                [2, 'multi-selection', null],
                [2, 'multi-click-selection', null]
              ],
              [['window', 'resize']],
              function(l, n, e) {
                var t = !0;
                return 'window:resize' === n && (t = !1 !== u['\u0275nov'](l, 20).onWindowResize() && t), t;
              },
              r.b,
              r.a
            )),
            u['\u0275did'](
              20,
              5750784,
              [[1, 4], ['table', 4]],
              4,
              c.DatatableComponent,
              [
                [1, m.ScrollbarHelper],
                [1, s.DimensionsHelper],
                u.ChangeDetectorRef,
                u.ElementRef,
                u.KeyValueDiffers,
                p.ColumnChangesService
              ],
              {
                rows: [0, 'rows'],
                rowHeight: [1, 'rowHeight'],
                columnMode: [2, 'columnMode'],
                headerHeight: [3, 'headerHeight'],
                footerHeight: [4, 'footerHeight'],
                limit: [5, 'limit'],
                summaryRow: [6, 'summaryRow'],
                summaryPosition: [7, 'summaryPosition']
              },
              null
            ),
            u['\u0275qud'](603979776, 2, { columnTemplates: 1 }),
            u['\u0275qud'](335544320, 3, { rowDetail: 0 }),
            u['\u0275qud'](335544320, 4, { groupHeader: 0 }),
            u['\u0275qud'](335544320, 5, { footer: 0 }),
            (l()(), u['\u0275ted'](-1, null, ['\n            '])),
            (l()(), u['\u0275ted'](-1, null, ['\n\n            '])),
            (l()(),
            u['\u0275eld'](
              27,
              0,
              null,
              null,
              8,
              'ngx-datatable-column',
              [['name', 'Short ID'], ['prop', 'key']],
              null,
              null,
              null,
              null,
              null
            )),
            u['\u0275did'](
              28,
              540672,
              [[2, 4]],
              3,
              v.DataTableColumnDirective,
              [p.ColumnChangesService],
              { name: [0, 'name'], prop: [1, 'prop'], maxWidth: [2, 'maxWidth'] },
              null
            ),
            u['\u0275qud'](335544320, 6, { cellTemplate: 0 }),
            u['\u0275qud'](335544320, 7, { headerTemplate: 0 }),
            u['\u0275qud'](335544320, 8, { treeToggleTemplate: 0 }),
            (l()(), u['\u0275ted'](-1, null, ['\n              '])),
            (l()(), u['\u0275and'](0, [[6, 2]], null, 1, null, w)),
            u['\u0275did'](34, 16384, null, 0, f.DataTableColumnCellDirective, [u.TemplateRef], null, null),
            (l()(), u['\u0275ted'](-1, null, ['\n            '])),
            (l()(), u['\u0275ted'](-1, null, ['\n            '])),
            (l()(),
            u['\u0275eld'](
              37,
              0,
              null,
              null,
              8,
              'ngx-datatable-column',
              [['name', 'IEEE'], ['prop', 'IEEE']],
              null,
              null,
              null,
              null,
              null
            )),
            u['\u0275did'](
              38,
              540672,
              [[2, 4]],
              3,
              v.DataTableColumnDirective,
              [p.ColumnChangesService],
              { name: [0, 'name'], prop: [1, 'prop'], maxWidth: [2, 'maxWidth'] },
              null
            ),
            u['\u0275qud'](335544320, 9, { cellTemplate: 0 }),
            u['\u0275qud'](335544320, 10, { headerTemplate: 0 }),
            u['\u0275qud'](335544320, 11, { treeToggleTemplate: 0 }),
            (l()(), u['\u0275ted'](-1, null, ['\n              '])),
            (l()(), u['\u0275and'](0, [[9, 2]], null, 1, null, x)),
            u['\u0275did'](44, 16384, null, 0, f.DataTableColumnCellDirective, [u.TemplateRef], null, null),
            (l()(), u['\u0275ted'](-1, null, ['\n            '])),
            (l()(), u['\u0275ted'](-1, null, ['\n            '])),
            (l()(),
            u['\u0275eld'](
              47,
              0,
              null,
              null,
              8,
              'ngx-datatable-column',
              [['name', 'Model'], ['prop', 'Model']],
              null,
              null,
              null,
              null,
              null
            )),
            u['\u0275did'](
              48,
              540672,
              [[2, 4]],
              3,
              v.DataTableColumnDirective,
              [p.ColumnChangesService],
              { name: [0, 'name'], prop: [1, 'prop'] },
              null
            ),
            u['\u0275qud'](335544320, 12, { cellTemplate: 0 }),
            u['\u0275qud'](335544320, 13, { headerTemplate: 0 }),
            u['\u0275qud'](335544320, 14, { treeToggleTemplate: 0 }),
            (l()(), u['\u0275ted'](-1, null, ['\n              '])),
            (l()(), u['\u0275and'](0, [[12, 2]], null, 1, null, S)),
            u['\u0275did'](54, 16384, null, 0, f.DataTableColumnCellDirective, [u.TemplateRef], null, null),
            (l()(), u['\u0275ted'](-1, null, ['\n            '])),
            (l()(), u['\u0275ted'](-1, null, ['\n            '])),
            (l()(),
            u['\u0275eld'](
              57,
              0,
              null,
              null,
              8,
              'ngx-datatable-column',
              [['name', 'Widget'], ['prop', 'WidgetNames']],
              null,
              null,
              null,
              null,
              null
            )),
            u['\u0275did'](
              58,
              540672,
              [[2, 4]],
              3,
              v.DataTableColumnDirective,
              [p.ColumnChangesService],
              { name: [0, 'name'], prop: [1, 'prop'] },
              null
            ),
            u['\u0275qud'](335544320, 15, { cellTemplate: 0 }),
            u['\u0275qud'](335544320, 16, { headerTemplate: 0 }),
            u['\u0275qud'](335544320, 17, { treeToggleTemplate: 0 }),
            (l()(), u['\u0275ted'](-1, null, ['\n              '])),
            (l()(), u['\u0275and'](0, [[15, 2]], null, 1, null, N)),
            u['\u0275did'](64, 16384, null, 0, f.DataTableColumnCellDirective, [u.TemplateRef], null, null),
            (l()(), u['\u0275ted'](-1, null, ['\n            '])),
            (l()(), u['\u0275ted'](-1, null, ['\n            '])),
            (l()(),
            u['\u0275eld'](
              67,
              0,
              null,
              null,
              8,
              'ngx-datatable-column',
              [['name', 'Name'], ['prop', 'ZDeviceName']],
              null,
              null,
              null,
              null,
              null
            )),
            u['\u0275did'](
              68,
              540672,
              [[2, 4]],
              3,
              v.DataTableColumnDirective,
              [p.ColumnChangesService],
              { name: [0, 'name'], prop: [1, 'prop'] },
              null
            ),
            u['\u0275qud'](335544320, 18, { cellTemplate: 0 }),
            u['\u0275qud'](335544320, 19, { headerTemplate: 0 }),
            u['\u0275qud'](335544320, 20, { treeToggleTemplate: 0 }),
            (l()(), u['\u0275ted'](-1, null, ['\n              '])),
            (l()(), u['\u0275and'](0, [[18, 2]], null, 1, null, E)),
            u['\u0275did'](74, 16384, null, 0, f.DataTableColumnCellDirective, [u.TemplateRef], null, null),
            (l()(), u['\u0275ted'](-1, null, ['\n            '])),
            (l()(), u['\u0275ted'](-1, null, ['\n            '])),
            (l()(),
            u['\u0275eld'](
              77,
              0,
              null,
              null,
              8,
              'ngx-datatable-column',
              [['name', 'Device Capabilities'], ['prop', 'MacCapa']],
              null,
              null,
              null,
              null,
              null
            )),
            u['\u0275did'](
              78,
              540672,
              [[2, 4]],
              3,
              v.DataTableColumnDirective,
              [p.ColumnChangesService],
              { name: [0, 'name'], prop: [1, 'prop'], maxWidth: [2, 'maxWidth'] },
              null
            ),
            u['\u0275qud'](335544320, 21, { cellTemplate: 0 }),
            u['\u0275qud'](335544320, 22, { headerTemplate: 0 }),
            u['\u0275qud'](335544320, 23, { treeToggleTemplate: 0 }),
            (l()(), u['\u0275ted'](-1, null, ['\n              '])),
            (l()(), u['\u0275and'](0, [[21, 2]], null, 1, null, I)),
            u['\u0275did'](84, 16384, null, 0, f.DataTableColumnCellDirective, [u.TemplateRef], null, null),
            (l()(), u['\u0275ted'](-1, null, ['\n            '])),
            (l()(), u['\u0275ted'](-1, null, ['\n            '])),
            (l()(),
            u['\u0275eld'](
              87,
              0,
              null,
              null,
              8,
              'ngx-datatable-column',
              [['name', 'Source'], ['prop', 'PowerSource']],
              null,
              null,
              null,
              null,
              null
            )),
            u['\u0275did'](
              88,
              540672,
              [[2, 4]],
              3,
              v.DataTableColumnDirective,
              [p.ColumnChangesService],
              { name: [0, 'name'], prop: [1, 'prop'], maxWidth: [2, 'maxWidth'] },
              null
            ),
            u['\u0275qud'](335544320, 24, { cellTemplate: 0 }),
            u['\u0275qud'](335544320, 25, { headerTemplate: 0 }),
            u['\u0275qud'](335544320, 26, { treeToggleTemplate: 0 }),
            (l()(), u['\u0275ted'](-1, null, ['\n              '])),
            (l()(), u['\u0275and'](0, [[24, 2]], null, 1, null, M)),
            u['\u0275did'](94, 16384, null, 0, f.DataTableColumnCellDirective, [u.TemplateRef], null, null),
            (l()(), u['\u0275ted'](-1, null, ['\n            '])),
            (l()(), u['\u0275ted'](-1, null, ['\n            '])),
            (l()(),
            u['\u0275eld'](
              97,
              0,
              null,
              null,
              8,
              'ngx-datatable-column',
              [['name', 'Status'], ['prop', 'Status']],
              null,
              null,
              null,
              null,
              null
            )),
            u['\u0275did'](
              98,
              540672,
              [[2, 4]],
              3,
              v.DataTableColumnDirective,
              [p.ColumnChangesService],
              { name: [0, 'name'], prop: [1, 'prop'], maxWidth: [2, 'maxWidth'] },
              null
            ),
            u['\u0275qud'](335544320, 27, { cellTemplate: 0 }),
            u['\u0275qud'](335544320, 28, { headerTemplate: 0 }),
            u['\u0275qud'](335544320, 29, { treeToggleTemplate: 0 }),
            (l()(), u['\u0275ted'](-1, null, ['\n              '])),
            (l()(), u['\u0275and'](0, [[27, 2]], null, 1, null, k)),
            u['\u0275did'](104, 16384, null, 0, f.DataTableColumnCellDirective, [u.TemplateRef], null, null),
            (l()(), u['\u0275ted'](-1, null, ['\n            '])),
            (l()(), u['\u0275ted'](-1, null, ['\n          '])),
            (l()(), u['\u0275ted'](-1, null, ['\n        '])),
            (l()(), u['\u0275ted'](-1, null, ['\n        '])),
            (l()(), u['\u0275eld'](109, 0, null, null, 1, 'div', [['class', 'row']], null, null, null, null, null)),
            (l()(), u['\u0275ted'](-1, null, ['\xa0'])),
            (l()(), u['\u0275ted'](-1, null, ['\n        '])),
            (l()(),
            u['\u0275eld'](112, 0, null, null, 4, 'div', [['class', 'card-text']], null, null, null, null, null)),
            (l()(), u['\u0275ted'](-1, null, ['\n          '])),
            (l()(),
            u['\u0275eld'](
              114,
              0,
              null,
              null,
              1,
              'button',
              [['class', 'btn btn-primary'], ['translate', 'validate']],
              null,
              [[null, 'click']],
              function(l, n, e) {
                var u = !0;
                return 'click' === n && (u = !1 !== l.component.updateDevices() && u), u;
              },
              null,
              null
            )),
            u['\u0275did'](
              115,
              8536064,
              null,
              0,
              g.e,
              [g.k, u.ElementRef, u.ChangeDetectorRef],
              { translate: [0, 'translate'] },
              null
            ),
            (l()(), u['\u0275ted'](-1, null, ['\n        '])),
            (l()(), u['\u0275ted'](-1, null, ['\n      '])),
            (l()(), u['\u0275ted'](-1, null, ['\n    '])),
            (l()(), u['\u0275ted'](-1, null, ['\n  '])),
            (l()(), u['\u0275ted'](-1, null, ['\n'])),
            (l()(), u['\u0275ted'](-1, null, ['\n']))
          ],
          function(l, n) {
            l(n, 20, 0, n.component.rows, 'auto', 'force', 40, 40, 10, !0, 'bottom'),
              l(n, 28, 0, 'Short ID', 'key', 100),
              l(n, 38, 0, 'IEEE', 'IEEE', 140),
              l(n, 48, 0, 'Model', 'Model'),
              l(n, 58, 0, 'Widget', 'WidgetNames'),
              l(n, 68, 0, 'Name', 'ZDeviceName'),
              l(n, 78, 0, 'Device Capabilities', 'MacCapa', 130),
              l(n, 88, 0, 'Source', 'PowerSource', 100),
              l(n, 98, 0, 'Status', 'Status', 100),
              l(n, 115, 0, 'validate');
          },
          function(l, n) {
            l(n, 19, 1, [
              u['\u0275nov'](n, 20).isFixedHeader,
              u['\u0275nov'](n, 20).isFixedRow,
              u['\u0275nov'](n, 20).isVertScroll,
              u['\u0275nov'](n, 20).isVirtualized,
              u['\u0275nov'](n, 20).isHorScroll,
              u['\u0275nov'](n, 20).isSelectable,
              u['\u0275nov'](n, 20).isCheckboxSelection,
              u['\u0275nov'](n, 20).isCellSelection,
              u['\u0275nov'](n, 20).isSingleSelection,
              u['\u0275nov'](n, 20).isMultiSelection,
              u['\u0275nov'](n, 20).isMultiClickSelection
            ]);
          }
        );
      }
      var W = (function() {
          function l(l, n, e) {
            (this.apiService = l), (this.formBuilder = n), (this.translate = e);
          }
          return (
            (l.prototype.ngOnInit = function() {
              this.form = this.formBuilder.group({
                devices: this.formBuilder.group({}),
                permit: this.formBuilder.group({})
              });
            }),
            l
          );
        })(),
        L = u['\u0275crt']({ encapsulation: 0, styles: [['']], data: {} });
      function O(l) {
        return u['\u0275vid'](
          0,
          [
            (l()(),
            u['\u0275eld'](0, 0, null, null, 13, 'div', [['class', 'container-fluid']], null, null, null, null, null)),
            (l()(), u['\u0275ted'](-1, null, ['\n  '])),
            (l()(),
            u['\u0275eld'](
              2,
              0,
              null,
              null,
              10,
              'form',
              [['novalidate', '']],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'submit'], [null, 'reset']],
              function(l, n, e) {
                var t = !0;
                return (
                  'submit' === n && (t = !1 !== u['\u0275nov'](l, 4).onSubmit(e) && t),
                  'reset' === n && (t = !1 !== u['\u0275nov'](l, 4).onReset() && t),
                  'submit' === n && (t = !1 !== u['\u0275nov'](l, 7).onSubmit() && t),
                  t
                );
              },
              null,
              null
            )),
            u['\u0275did'](3, 16384, null, 0, i.u, [], null, null),
            u['\u0275did'](4, 540672, null, 0, i.i, [[8, null], [8, null]], { form: [0, 'form'] }, null),
            u['\u0275prd'](2048, null, i.b, null, [i.i]),
            u['\u0275did'](6, 16384, null, 0, i.p, [[4, i.b]], null, null),
            u['\u0275did'](7, 16384, null, 0, a.d, [], { formGroup: [0, 'formGroup'] }, null),
            (l()(), u['\u0275ted'](-1, null, ['\n    '])),
            (l()(), u['\u0275eld'](9, 0, null, null, 2, 'app-device-by-name', [], null, null, null, H, T)),
            u['\u0275prd'](14336, null, i.b, null, [i.i]),
            u['\u0275did'](11, 114688, null, 0, D, [h.a, i.e, i.i, g.k], null, null),
            (l()(), u['\u0275ted'](-1, null, ['\n  '])),
            (l()(), u['\u0275ted'](-1, null, ['\n'])),
            (l()(), u['\u0275ted'](-1, null, ['\n']))
          ],
          function(l, n) {
            var e = n.component;
            l(n, 4, 0, e.form), l(n, 7, 0, e.form), l(n, 11, 0);
          },
          function(l, n) {
            l(
              n,
              2,
              0,
              u['\u0275nov'](n, 6).ngClassUntouched,
              u['\u0275nov'](n, 6).ngClassTouched,
              u['\u0275nov'](n, 6).ngClassPristine,
              u['\u0275nov'](n, 6).ngClassDirty,
              u['\u0275nov'](n, 6).ngClassValid,
              u['\u0275nov'](n, 6).ngClassInvalid,
              u['\u0275nov'](n, 6).ngClassPending
            );
          }
        );
      }
      function Z(l) {
        return u['\u0275vid'](
          0,
          [
            (l()(), u['\u0275eld'](0, 0, null, null, 1, 'app-device', [], null, null, null, O, L)),
            u['\u0275did'](1, 114688, null, 0, W, [h.a, i.e, g.k], null, null)
          ],
          function(l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var F = u['\u0275ccf']('app-device', W, Z, {}, {}, []),
        P = e('ZYjt'),
        V = e('ZYCi'),
        z = { title: Object(C.b)('device') },
        j = (function() {
          return function() {};
        })(),
        B = e('QpxQ'),
        _ = e('F8xH'),
        A = e('PCNd');
      e.d(n, 'DeviceModuleNgFactory', function() {
        return U;
      });
      var U = u['\u0275cmf'](t, [], function(l) {
        return u['\u0275mod']([
          u['\u0275mpd'](512, u.ComponentFactoryResolver, u['\u0275CodegenComponentFactoryResolver'], [
            [8, [o.a, F]],
            [3, u.ComponentFactoryResolver],
            u.NgModuleRef
          ]),
          u['\u0275mpd'](4608, d.NgLocalization, d.NgLocaleLocalization, [
            u.LOCALE_ID,
            [2, d['\u0275angular_packages_common_common_a']]
          ]),
          u['\u0275mpd'](4608, m.ScrollbarHelper, m.ScrollbarHelper, [P.DOCUMENT]),
          u['\u0275mpd'](4608, s.DimensionsHelper, s.DimensionsHelper, []),
          u['\u0275mpd'](4608, p.ColumnChangesService, p.ColumnChangesService, []),
          u['\u0275mpd'](4608, i.e, i.e, []),
          u['\u0275mpd'](4608, i.v, i.v, []),
          u['\u0275mpd'](1073742336, V.o, V.o, [[2, V.u], [2, V.l]]),
          u['\u0275mpd'](1073742336, j, j, []),
          u['\u0275mpd'](1073742336, d.CommonModule, d.CommonModule, []),
          u['\u0275mpd'](1073742336, a.f, a.f, []),
          u['\u0275mpd'](1073742336, B.c, B.c, []),
          u['\u0275mpd'](1073742336, g.i, g.i, []),
          u['\u0275mpd'](1073742336, _.NgxDatatableModule, _.NgxDatatableModule, []),
          u['\u0275mpd'](1073742336, i.t, i.t, []),
          u['\u0275mpd'](1073742336, i.r, i.r, []),
          u['\u0275mpd'](1073742336, A.a, A.a, []),
          u['\u0275mpd'](1073742336, t, t, []),
          u['\u0275mpd'](
            1024,
            V.j,
            function() {
              return [[{ path: '', component: W, data: z }]];
            },
            []
          ),
          u['\u0275mpd'](256, B.d, B.e, [])
        ]);
      });
    }
  }
]);
