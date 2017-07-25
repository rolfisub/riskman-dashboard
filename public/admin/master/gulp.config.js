var path = require('path');
module.exports = config();

///////

function config() {

    // MAIN PATHS
    var paths = {
        app: '../app/',
        components: 'components/',
        markup: 'jade/',
        styles: 'less/',
        scripts: 'js/'
    }

    var config = {

        paths: paths,

        // SOURCES CONFIG
        source: {
            scripts: [
                paths.components + 'app.module.js',
                paths.components + '**/*.module.js',
                paths.components + '**/*.js'
            ],
            templates: {
                index: [paths.components + 'index.*'],
                views: [
                    paths.components + '**/*.jade',
                    paths.components + '**/*.html',
                    '!' + paths.components + 'index.*' // ignore index
                ]
            },
            styles: {
                app: [
                    paths.components + 'app.less',
                    paths.components + '**/*.less'
                ],
                watch: [paths.components + '**/*']
            },
            images: [
                'images/**/*'
            ]
        },

        // BUILD TARGET CONFIG
        build: {
            scripts: paths.app + 'js',
            styles: paths.app + 'css',
            templates: {
                index: '../',
                views: paths.app + 'views/',
                cache: paths.app + 'js/' + 'templates.js',
            },
            images: paths.app + 'img',
        },

        // PLUGINS OPTIONS

        prettifyOpts: {
            indent_char: ' ',
            indent_size: 3,
            unformatted: ['a', 'sub', 'sup', 'b', 'i', 'u', 'pre', 'code']
        },

        jadeOpts: {
            pretty: true
        },

        uglify: {
            preserveComments: 'some',
            mangle: {
                except: ['$super'] // rickshaw requires this
            }
        },

        minifyCss: {
            processImport: false,
            keepSpecialComments: 0
        },

        tplCacheOptions: {
            // root: 'app',
            filename: 'templates.js',
            //standalone: true,
            module: 'app.core',
            base: function(file) {
                return path.join('app', 'views', path.basename(file.path));
            }
        },

        injectOptions: {
            name: 'templates',
            transform: function(filepath) {
                return 'script(src=\'' +
                    filepath.substr(filepath.indexOf('app')) +
                    '\')';
            }
        }

    }

    return config;
} // config()