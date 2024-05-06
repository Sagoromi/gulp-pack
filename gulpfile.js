var gulp = require('gulp'),
    clean = require('gulp-clean'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    sass = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    fileInclude = require('gulp-file-include'),
    beautifyCode = require('gulp-beautify-code'),

    // Source Folder Locations
    src = {
        'root': './src/',

        'rootHtml': './src/*.html',
        'rootPartials': './src/partials/',

        'fontsAll': './src/assets/fonts/**/*',

        'rootVendorCss': './src/assets/css/vendor/*.css',
        'rootPluginsCss': './src/assets/css/plugins/*.css',

        'styleScss': './src/assets/scss/*.scss',
        'rootScss': './src/assets/scss/*',
        'scssAll': './src/assets/scss/**/*',

        'rootVendorJs': './src/assets/js/vendor/*.js',
        'rootPluginsJs': './src/assets/js/plugins/*.js',

        'mainJs': './src/assets/js/main.js',

        'rootimage': './src/assets/images/**/*',

        'rootvideo': './src/assets/video/*',
    },

    // Destination Folder Locations
    dest = {
        'root': './dest/',
        'fonts': './dest/assets/fonts/',
        'assets': './dest/assets/',
        'scss': './dest/assets/scss/',

        'rootCss': './dest/assets/css',
        'rootVendorCss': './dest/assets/css/vendor/',
        'rootPluginsCss': './dest/assets/css/plugins/',

        'rootJs': './dest/assets/js',
        'rootVendorJs': './dest/assets/js/vendor/',
        'rootPluginsJs': './dest/assets/js/plugins/',

        'images': './dest/assets/images',

        'video': './dest/assets/video',
    },

    // Autoprefixer Options
    autoPreFixerOptions = [
        "last 4 version",
        "> 1%",
        "ie >= 9",
        "ie_mob >= 10",
        "ff >= 30",
        "chrome >= 34",
        "safari >= 7",
        "opera >= 23",
        "ios >= 7",
        "android >= 4",
        "bb >= 10"
    ];

/*-- Live Synchronise & Reload
--------------------------------------------------------------------*/

// Browser Synchronise
function liveBrowserSync(done) {
    browserSync.init({
        server: {
            baseDir: dest.root
        }
    });
    done();
}
// Reload
function reload(done) {
    browserSync.reload();
    done();
}

/*-- Gulp Custom Notifier
--------------------------------------------------------------------*/
function customPlumber(errTitle) {
    return plumber({
        errorHandler: notify.onError({
            title: errTitle || "Error running Gulp",
            message: "Error: <%= error.message %>",
            sound: "Glass"
        })
    });
}

/*-- Gulp Other Tasks
--------------------------------------------------------------------*/

/*-- Remove Destination Folder Before Starting Gulp --*/
function cleanProject(done) {
    gulp.src(dest.root)
        .pipe(customPlumber('Error On Clean App'))
        .pipe(clean());
    done();
}

/*-- All HTMl Files Compile With Partial & Copy Paste To Destination Folder
--------------------------------------------------------------------*/
function html(done) {
    gulp.src(src.rootHtml)
        .pipe(customPlumber('Error On Compile HTML'))
        .pipe(fileInclude({ basepath: src.rootPartials }))
        .pipe(beautifyCode())
        .pipe(gulp.dest(dest.root));
    done();
}

/*-- Copy Font Form Source to Destination Folder --*/
function bdFonts(done) {
    gulp.src(src.fontsAll)
        .pipe(customPlumber('Error On Copy Fonts'))
        .pipe(gulp.dest(dest.fonts));
    done();
}

/* =====================================================
    Image
===================================================== */

function bdImage(done) {
    gulp.src(src.rootimage)
        .pipe(customPlumber('Error On Compiling Images'))
        .pipe(gulp.dest(dest.images));
    done();
}

/* =====================================================
    Video
===================================================== */

function bdVideo(done) {
    gulp.src(src.rootvideo)
        .pipe(customPlumber('Error On Compiling Video'))
        .pipe(gulp.dest(dest.video));
    done();
}

/*-- CSS & SCSS Task
--------------------------------------------------------------------*/

/*-- Vendor CSS --*/
function vendorCss(done) {
    gulp.src(src.rootVendorCss)
        .pipe(customPlumber('Error On Copying Vendor CSS'))
        .pipe(autoprefixer(autoPreFixerOptions))
        .pipe(gulp.dest(dest.rootVendorCss));
    done();
}

/*-- All CSS Plugins --*/
function pluginsCss(done) {
    gulp.src(src.rootPluginsCss)
        .pipe(customPlumber('Error On Copying Plugins CSS'))
        .pipe(autoprefixer(autoPreFixerOptions))
        .pipe(gulp.dest(dest.rootPluginsCss));
    done();
}

/*-- Gulp Compile Scss to Css Task & Minify --*/
function styleCss(done) {
    gulp.src(src.styleScss)
        .pipe(sourcemaps.init())
        .pipe(autoprefixer(autoPreFixerOptions))
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest(dest.rootCss));
    done();
}

/*-- Gulp Compile Scss to Css Task & Minify --*/
function scss(done) {
    gulp.src(src.scssAll)
        .pipe(customPlumber('Error On Compiling Style Scss'))
        .pipe(gulp.dest(dest.scss));
    done();
}

/*-- JS Task
--------------------------------------------------------------------*/

/*-- Vendor JS --*/
function vendorJs(done) {
    gulp.src(src.rootVendorJs)
        .pipe(customPlumber('Error On Copying Vendor JS'))
        .pipe(gulp.dest(dest.rootVendorJs));
    done();
}

/*-- All JS Plugins --*/
function pluginsJs(done) {
    gulp.src(src.rootPluginsJs)
        .pipe(customPlumber('Error On Combining & Minifying Vendor JS'))
        .pipe(gulp.dest(dest.rootPluginsJs));
    done();
}

/*-- Gulp Main Js Task --*/
function mainJs(done) {
    gulp.src(src.mainJs)
        .pipe(customPlumber('Error On Copying Main Js File'))
        .pipe(gulp.dest(dest.rootJs));
    done();
}

/*-- All, Watch & Default Task
--------------------------------------------------------------------*/

/*-- All --*/
// gulp.task('clean', cleanProject);
gulp.task('allTask', gulp.series(bdFonts, bdImage, bdVideo, html, vendorCss, pluginsCss, styleCss, scss, vendorJs, pluginsJs, mainJs));

/*-- Watch --*/
function watchFiles() {
    gulp.watch(src.fontsAll, gulp.series(bdFonts, reload));
    gulp.watch(src.rootimage, gulp.series(bdImage, reload));
    gulp.watch(src.rootvideo, gulp.series(bdVideo, reload));
    gulp.watch(src.rootHtml, gulp.series(html, reload));
    gulp.watch(src.rootPartials, gulp.series(html, reload));

    gulp.watch(src.rootVendorCss, gulp.series(vendorCss, reload));
    gulp.watch(src.rootPluginsCss, gulp.series(pluginsCss, reload));
    gulp.watch(src.scssAll, gulp.series(styleCss, reload));
    gulp.watch(src.scssAll, gulp.series(scss, reload));

    gulp.watch(src.rootVendorJs, gulp.series(vendorJs, reload));
    gulp.watch(src.rootPluginsJs, gulp.series(pluginsJs, reload));
    gulp.watch(src.mainJs, gulp.series(mainJs, reload));
}

/*-- Default --*/
// gulp.task('default', gulp.series('allTask', gulp.parallel(liveBrowserSync, watchFiles)));
gulp.task('default', gulp.parallel(liveBrowserSync, watchFiles));

