(function() {
    'use strict';

    angular
        .module('app.router')
        .constant('APP_REQUIRES', {
            'modernizr': {
                files: ['vendor/modernizr/modernizr.custom.js']
            },
            'icons': {
                files: ['vendor/ionicons/css/ionicons.min.css']
            },
            'fontawesome': {
                files: ['vendor/font-awesome/css/font-awesome.min.css']
            },
            'screenfull': {
                files: ['vendor/screenfull/dist/screenfull.js']
            },
            'lodash': {
                files: ['vendor/lodash/dist/lodash.min.js']
            },
            'md-colors': {
                files: ['vendor/material-colors/dist/colors.css']
            },
            'sparkline': {
                files: ['vendor/sparkline/index.js']
            },
            'ng-mfb': {
                files: ['vendor/ng-mfb/mfb/dist/mfb.min.css',
                    'vendor/ng-mfb/src/mfb-directive.js'
                ]
            },
            'easypiechart': {
                files: ['vendor/jquery.easy-pie-chart/dist/angular.easypiechart.min.js']
            },
            'angular-flot': {
                'serie': true,
                files: ['vendor/flot/jquery.flot.js',
                    'vendor/flot/jquery.flot.categories.js',
                    'vendor/flot.tooltip/js/jquery.flot.tooltip.min.js',
                    'vendor/flot/jquery.flot.resize.js',
                    'vendor/flot/jquery.flot.pie.js',
                    'vendor/flot/jquery.flot.time.js',
                    'vendor/sidebysideimproved/jquery.flot.orderBars.js',
                    'vendor/flot-spline/js/jquery.flot.spline.min.js',
                    'vendor/angular-flot/angular-flot.js'
                ]
            },
            'ui.select': {
                files: ['vendor/angular-ui-select/dist/select.js',
                    'vendor/angular-ui-select/dist/select.css'
                ]
            },
            'uiGmapgoogle-maps': {
                files: [
                    'vendor/angular-simple-logger/dist/angular-simple-logger.min.js',
                    'vendor/angular-google-maps/dist/angular-google-maps.min.js'
                ]
            },
            'angular-rickshaw': {
                serie: true,
                files: ['vendor/d3/d3.min.js',
                    'vendor/rickshaw/rickshaw.js',
                    'vendor/rickshaw/rickshaw.min.css',
                    'vendor/angular-rickshaw/rickshaw.js'
                ]
            },
            'ui.knob': {
                files: ['vendor/angular-knob/src/angular-knob.js',
                    'vendor/jquery-knob/dist/jquery.knob.min.js'
                ]
            },
            'oitozero.ngSweetAlert': {
                files: ['vendor/sweetalert/dist/sweetalert.css',
                    'vendor/sweetalert/dist/sweetalert.min.js',
                    'vendor/angular-sweetalert/SweetAlert.js'
                ]
            },
            'the-cormoran.angular-loaders': {
                files: [
                    'vendor/loaders.css/loaders.css',
                    'vendor/angular-loaders/dist/angular-loaders.min.js'
                ]
            },
            'angularBootstrapNavTree': {
                files: ['vendor/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
                    'vendor/angular-bootstrap-nav-tree/dist/abn_tree.css'
                ]
            },
            'ng-nestable': {
                files: ['vendor/ng-nestable/src/angular-nestable.js',
                    'vendor/nestable/jquery.nestable.js'
                ]
            },
            'akoenig.deckgrid': {
                files: ['vendor/angular-deckgrid/angular-deckgrid.js']
            },
            'vr.directives.slider': {
                files: ['vendor/venturocket-angular-slider/build/angular-slider.min.js']
            },
            'xeditable': {
                files: ['vendor/angular-xeditable/dist/js/xeditable.js',
                    'vendor/angular-xeditable/dist/css/xeditable.css'
                ]
            },
            'colorpicker.module': {
                files: ['vendor/angular-bootstrap-colorpicker/css/colorpicker.css',
                    'vendor/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.js'
                ]
            },
            'summernote': {
                serie: true,
                insertBefore: '#appcss',
                files: [
                    'vendor/bootstrap/js/modal.js',
                    'vendor/bootstrap/js/dropdown.js',
                    'vendor/bootstrap/js/tooltip.js',
                    'vendor/summernote/dist/summernote.css',
                    'vendor/summernote/dist/summernote.js',
                    'vendor/angular-summernote/dist/angular-summernote.js'
                ]
            },
            'angularFileUpload': {
                files: ['vendor/angular-file-upload/dist/angular-file-upload.min.js']
            },
            'filestyle': {
                files: ['vendor/bootstrap-filestyle/src/bootstrap-filestyle.js']
            },
            'ngDropzone': {
                serie: true,
                insertBefore: '#appcss',
                files: [
                    'vendor/dropzone/dist/basic.css',
                    'vendor/dropzone/dist/dropzone.css',
                    'vendor/dropzone/dist/dropzone.js',
                    'vendor/angular-dropzone/lib/angular-dropzone.js'
                ]
            },
            'vector-map': {
                files: ['vendor/ika.jvectormap/jquery-jvectormap-1.2.2.min.js',
                    'vendor/ika.jvectormap/jquery-jvectormap-1.2.2.css'
                ]
            },
            'vector-map-maps': {
                files: ['vendor/ika.jvectormap/jquery-jvectormap-world-mill-en.js',
                    'vendor/ika.jvectormap/jquery-jvectormap-us-mill-en.js'
                ]
            },
            'datatables': {
                serie: true,
                files: ['vendor/datatables/media/css/jquery.dataTables.css',
                    'vendor/datatables/media/js/jquery.dataTables.js',
                    'vendor/angular-datatables/dist/angular-datatables.js',
                    // 'vendor/angular-datatables/dist/plugins/bootstrap/datatables.bootstrap.css',
                    'vendor/angular-datatables/dist/plugins/bootstrap/angular-datatables.bootstrap.js'
                ]
            },
            'ngTable': {
                files: ['vendor/ng-table/dist/ng-table.min.js',
                    'vendor/ng-table/dist/ng-table.min.css'
                ]
            },
            'ngTableExport': {
                files: ['vendor/ng-table-export/ng-table-export.js']
            },
            'blueimp-gallery': {
                files: ['vendor/blueimp-gallery/js/jquery.blueimp-gallery.min.js',
                    'vendor/blueimp-gallery/css/blueimp-gallery.min.css'
                ]
            },
            'datamaps': {
                files: ['vendor/d3/d3.min.js',
                    'vendor/topojson/topojson.min.js',
                    'vendor/datamaps/dist/datamaps.all.js',
                    'vendor/angular-datamaps/dist/angular-datamaps.min.js'
                ],
                serie: true
            }
        });

})();