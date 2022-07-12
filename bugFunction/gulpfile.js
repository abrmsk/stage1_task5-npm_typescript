const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify');
const sourcemaps = require('gulp-sourcemaps');
const buffer = require('vinyl-buffer');

const paths = {
    html: ['src/*.html'],
    css: ['src/*.css'],
    dist: {
        main: './dist',
        css: './dist/css',
        js: './dist/js',
        img: './dist/img',
    },
};

// copy-html
gulp.task('copy-html', () => gulp.src(paths.html).pipe(gulp.dest(paths.dist.main)));
// copy-css
gulp.task('copy-css', () => gulp.src(paths.css).pipe(gulp.dest(paths.dist.css)));

// javaScript - Babel = min-js + map + auto-compile
gulp.task('javaScript', () =>
  browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {},
  })
    .plugin(tsify)
    .transform('babelify', {
      presets: ['es2015'],
      extensions: ['.ts'],
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.dist.js))
);

gulp.task(
  'default',
  gulp.series(gulp.parallel('copy-html', 'copy-css'), 'javaScript')
);
