'use strict';

const gulp = require('gulp');
const webpack = require('webpack-stream');
const del = require('del');
const sass = require('gulp-sass');

const paths = {
  js: __dirname + '/app/**/*.js',
  html: __dirname + '/app/**/*.html',
  css: __dirname + '/app/**/*.css',
  fonts: __dirname + '/app/**/*.{eot,ttf,woff,svg}',
  docs: __dirname + '/app/docs/*',
  db: __dirname + '/db/*.json',
  img: __dirname + '/app/img/*'
};

gulp.task('clean', () => {
  return del('./build/**/*');
});

gulp.task('copy-html', ['clean'], () => {
  return gulp.src(paths.html)
    .pipe(gulp.dest('./build'));
});

gulp.task('copy-css', ['clean', 'sass'], () => {
  return gulp.src(paths.css)
    .pipe(gulp.dest('./build'));
});

gulp.task('copy-fonts', ['clean'], () => {
  return gulp.src(paths.fonts)
    .pipe(gulp.dest('./build'));
});

gulp.task('copy-docs', ['clean'], () => {
  return gulp.src(paths.docs)
    .pipe(gulp.dest('./build/docs'));
});

gulp.task('copy-images', ['clean'], () => {
  return gulp.src(paths.img)
    .pipe(gulp.dest('./build/img'));
});

gulp.task('copy-db', ['clean'], () => {
  return gulp.src(paths.db)
    .pipe(gulp.dest('./build/db'));
});

gulp.task('bundle', ['clean'], () => {
  return gulp.src(paths.js)
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('package', ['clean'], () => {
  return gulp.src(paths.js)
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('wipe-css', () => {
  return del('./app/css/style.css');
});

gulp.task('sass', ['wipe-css', 'clean'], () => {
  return gulp.src('./app/css/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css/'));
});

gulp.task('sass-watch', () => {
  gulp.watch('./app/css/**/*.scss', ['sass']);
});

gulp.task('bundle:test', () => {
  return gulp.src(__dirname + '/test/**/*_test.js')
    .pipe(webpack({
      output: {
        filename: 'test_bundle.js'
      }
    }))
    .pipe(gulp.dest(__dirname + '/test'));
});

gulp.task('watch', () => {
  gulp.watch('./app/**/*', ['build']);
});

gulp.task('build', ['clean', 'sass', 'copy-html', 'copy-css', 'copy-fonts', 'copy-docs', 'copy-images', 'copy-db', 'bundle']);

gulp.task('production', ['clean', 'sass', 'copy-html', 'copy-css', 'copy-fonts', 'copy-docs', 'copy-images', 'copy-db', 'package']);

gulp.task('default', ['build']);
