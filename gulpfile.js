var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var cleanCSS    = require('gulp-clean-css');
var uglify      = require('gulp-uglify');
var pump        = require('pump');
var imagemin    = require('gulp-imagemin');
var deploy      = require("gulp-gh-pages");
var changed     = require('gulp-changed');
var imageResize = require('gulp-image-resize');
var swPrecache  = require('sw-precache');
var packageJson = require('./package.json');

var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src('_scss/main.scss')
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('css'));
});

/**
 * Minify javascript files (must be run separatly after gulp)
 */
gulp.task('compress', function(cb){
  pump([
        gulp.src('js/*.js'),
        uglify(),
        gulp.dest('_site/js')
    ],
    cb
  );
});

/**
 * Compress image files
 */
 gulp.task('images', function() {
     gulp.src('img/**/*.{jpg,png,gif}')
         .pipe(imageResize({
           width: 1800,
           upscale: false,
           quality: 0.8,
           samplingFactor: [2, 2],
           noProfile: true,
           interlace: true,
         }))
         .pipe(imagemin())
         .pipe(gulp.dest('_site/img'));
     gulp.src('img/**/*.{svg,ico}')
        .pipe(imagemin())
        .pipe(gulp.dest('_site/img'));
 });

 /**
  * Write Service Worker
  */
  function writeServiceWorkerFile(rootDir, handleFetch, callback) {
    var config = {
      cacheId: packageJson.name,
      /*
      dynamicUrlToDependencies: {
        'dynamic/page1': [
          path.join(rootDir, 'views', 'layout.jade'),
          path.join(rootDir, 'views', 'page1.jade')
        ],
        'dynamic/page2': [
          path.join(rootDir, 'views', 'layout.jade'),
          path.join(rootDir, 'views', 'page2.jade')
        ]
      },
      */
      // If handleFetch is false (i.e. because this is called from generate-service-worker-dev), then
      // the service worker will precache resources but won't actually serve them.
      // This allows you to test precaching behavior without worry about the cache preventing your
      // local changes from being picked up during the development cycle.
      handleFetch: handleFetch,
      runtimeCaching: [{
        urlPattern: /projects/,
        handler: 'networkFirst',
        options: {
            cache: {
              maxEntries: 10,
              name: 'projects-cache'
            }
        }
      }, {
        urlPattern: /words/,
        handler: 'networkFirst',
        options: {
            cache: {
              maxEntries: 10,
              name: 'words-cache'
            }
        }
      }],
      staticFileGlobs: [
        rootDir + '/css/**.css',
        rootDir + '/**.html',
        rootDir + '/img/**/**.*',
        rootDir + '/js/**.js'
      ],
      stripPrefix: rootDir + '/',
      // verbose defaults to false, but for the purposes of this demo, log more.
      verbose: true
    };

    swPrecache.write('sw.js', config, callback);
  }

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('_scss/**/*.scss', ['sass']);
    gulp.watch(['*.html', '_layouts/**/*.*', 'projects/**/*.*', 'about/**/*.*', 'words/**/*.*', 'contact/**/*.*', 'grid/*.html', 'typography/*.html'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['generate-service-worker','browser-sync', 'watch']);

/**
 * Runs minification and image compression
 */
gulp.task('min', ['compress', 'images']);

gulp.task('generate-service-worker', function(callback) {
  writeServiceWorkerFile('_site', true, callback);
});

gulp.task("deploy", function () {
    return gulp.src(["./_site/**/*.*","./_site/.*"])
        .pipe(deploy([
        ]));
});
