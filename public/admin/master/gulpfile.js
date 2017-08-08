var $           = require('gulp-load-plugins')(),
    gulp        = require('gulp'),
    fs          = require('fs'),
    path        = require('path'),
    args        = require('yargs').argv,
    del         = require('del'),
    globby      = require('globby'),
    gulpsync    = $.sync(gulp),
    PluginError = $.util.PluginError,
    browserSync = require('browser-sync').create(),
    config      = require('./gulp.config');

// production mode (see 'build' task)
var isProduction = false;

// Mode switches
// Example:
//    gulp --usescss --usesourcemaps --usecache

var useSourceMaps = args.usesourcemaps || args.usesourcemap;
var useScss = args.usescss;
var useCache = args.usecache;

// switch to scss
if (useScss) {

    log('Using SCSS stylesheets...');

    config.source.styles.app = [
        config.paths.components + 'app.scss',
        config.paths.components + '**/*.scss'
    ];

}

//---------------
// TASKS
//---------------


// JS

gulp.task('scripts', ['scripts:validate'], function() {
    return gulp.src(config.source.scripts)
        .pipe($.concat('app.js'))
        .pipe($.if(isProduction, $.uglify(config.uglify)))
        .pipe(gulp.dest(config.build.scripts))

});

gulp.task('scripts:validate', function() {
    return gulp.src(config.source.scripts)
        .pipe($.jsvalidate())
        .on('error', handleError);

});

// APP LESS
gulp.task('styles:app', function() {
    log('Building application styles..');
    return gulp.src(config.source.styles.app)
        .pipe($.if(useSourceMaps, $.sourcemaps.init()))
        .pipe(useScss ? $.sass() : $.less())
        .on('error', handleError)
        .pipe($.clipEmptyFiles())
        .pipe( $.sort() )
        .pipe($.concat('app.css'))
        .pipe($.if(isProduction, $.minifyCss()))
        .pipe($.if(useSourceMaps, $.sourcemaps.write()))
        .pipe(gulp.dest(config.build.styles))
        .pipe(browserSync.stream())

});

// APP RTL
gulp.task('styles:app:rtl', function() {
    log('Building application RTL styles..');
    return gulp.src(config.source.styles.app)
        .pipe($.if(useSourceMaps, $.sourcemaps.init()))
        .pipe(useScss ? $.sass() : $.less())
        .on('error', handleError)
        .pipe($.clipEmptyFiles())
        .pipe($.rtlcss()) /* RTL Magic ! */
        .pipe( $.sort() )
        .pipe($.concat('app-rtl.css'))
        .pipe($.if(isProduction, $.minifyCss()))
        .pipe($.if(useSourceMaps, $.sourcemaps.write()))
        .pipe(gulp.dest(config.build.styles))
        .pipe(browserSync.stream())

});

// INDEX
gulp.task('templates:index', ['templates:views'], function() {
    log('Building index..');

    var jadeFilter = $.filter('**/*.jade', {restore: true});
    var tplscript = gulp.src(config.build.templates.cache, {
        read: false
    });

    return gulp.src(config.source.templates.index)
        .pipe($.if(useCache, $.inject(tplscript, config.injectOptions))) // inject the templates.js into index
        .pipe(jadeFilter)
            .pipe($.data(function() {
                return {
                    scripts: globby.sync(config.source.scripts)
                };
            }))
            .pipe($.jade(config.jadeOpts))
            .on('error', handleError)
        .pipe(jadeFilter.restore)
        //.pipe($.htmlPrettify( config.prettifyOpts ))
        .pipe($.if(isProduction, $.usemin({
            js: [$.uglify(config.uglify), 'concat'],
            css: [$.minifyCss(config.minifyCss), 'concat'],
            vendor: [$.uglify(), 'concat'],
        })))
        .on('error', handleError)
        .pipe(gulp.dest(config.build.templates.index))

});

// VIEWS
gulp.task('templates:views', function() {
    log('Building views.. ' + (useCache ? 'using template cache' : ''));

    var jadeFilter = $.filter('**/*.jade', {restore: true});

    if (useCache) {

        return gulp.src(config.source.templates.views)
            .pipe(jadeFilter)
                .pipe($.jade(config.jadeOpts))
                .on('error', handleError)
            .pipe(jadeFilter.restore)
            .pipe($.angularTemplatecache(config.tplCacheOptions))
            .pipe($.if(isProduction, $.uglify()))
            .pipe(gulp.dest(config.build.scripts))


    } else {

        return gulp.src(config.source.templates.views)
            .pipe($.if(!isProduction, $.changed(config.build.templates.views, {
                extension: '.html',
                hasChanged: fileHasChanged
            })))
            .pipe(jadeFilter)
                .pipe($.jade(config.jadeOpts))
                .on('error', handleError)
            .pipe(jadeFilter.restore)
            .pipe($.flatten())
            .pipe(gulp.dest(config.build.templates.views))

    }
});

// Images
gulp.task('images', function() {
    log('Copying images..');
    return gulp.src(config.source.images)
        .pipe(gulp.dest(config.build.images));
});

//---------------
// WATCH
//---------------

// Rerun the task when a file changes
gulp.task('watch', function() {
    log('Starting Watch..');

    gulp.watch(config.source.scripts, gulpsync.sync(['scripts', 'reload']) );
    gulp.watch(config.source.styles.app, gulpsync.sync(['styles:app', 'styles:app:rtl' /*, 'reload'*/ ]) );
    gulp.watch(config.source.templates.views, gulpsync.sync(['templates:views', 'reload' ]) );
    gulp.watch(config.source.templates.index, gulpsync.sync(['templates:index', 'reload' ]) );

});

gulp.task('reload', function(done){
    browserSync.reload();
    done();
});

//---------------
// BROWSER SYNC
//---------------

// Rerun the task when a file changes
gulp.task('browsersync', function() {
    log('Starting BrowserSync..');

    browserSync.init({
        notify: false,
        server: {
            baseDir: '..'
        }
    });

});


//---------------
// LINT
//---------------

gulp.task('lint', function() {
    return gulp
        .src(config.source.scripts)
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe($.jshint.reporter('fail'));
});

//---------------
// CLEAN
//---------------

// Remove all files from the build paths
gulp.task('clean', function(done) {
    var delconfig = [].concat(
        config.build.styles,
        config.build.scripts,
        config.build.templates.index + 'index.html',
        config.build.templates.views
    );

    log('Cleaning: ' + $.util.colors.blue(delconfig));
    // force: clean files outside current directory
    del(delconfig, {
        force: true
    }, done);
});

//---------------
// MAIN TASKS
//---------------

// build for production (minify)
gulp.task('dist', ['prod', 'build']);

gulp.task('prod', function() {
    log('Starting production build...');
    isProduction = true;
});

// build for development (no minify)
gulp.task('default', gulpsync.sync([
    'build',
    'watch'
]), done);

// Server for development
gulp.task('serve', gulpsync.sync([
    'build',
    'watch',
    'browsersync'
]), done);

gulp.task('serve-prod', gulpsync.sync([
    'dist',
    'watch',
    'browsersync'
]), done);

// build tasks
gulp.task('build', gulpsync.sync([
    'scripts',
    'styles:app',
    'styles:app:rtl',
    'templates:index',
    'images'
]));


/////////////////////

// Error handler
function handleError(err) {
    log(err.toString());
    this.emit('end');
}

// log to console using
function log(msg) {
    $.util.log($.util.colors.blue(msg));
}

// a simple message
function done() {
    log('********');
    log('* Done * Watching files to recompile..');
    log('********');
}

// We are using a different folder structure in source and destiny.
// with this function we compare each file time to
// detect what have changed no matter their location
// (Compares one by one -> jade vs html)
function fileHasChanged(stream, cb, sourceFile, destPath) {
    var destPathTo = config.build.templates.views;
    var modDestPath = destPathTo + path.basename(destPath);

    fs.stat(modDestPath, function(err, targetStat) {
        if (err) {
            if (err.code !== 'ENOENT') {
                stream.emit('error', new gutil.PluginError('gulp-changed', err, {
                    fileName: sourceFile.path
                }));
            }
            stream.push(sourceFile);
        } else if (sourceFile.stat.mtime > targetStat.mtime) {
            stream.push(sourceFile);
        }
        cb();
    });
};
