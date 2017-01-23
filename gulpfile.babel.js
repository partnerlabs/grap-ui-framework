'use strict'

import gulp from 'gulp'
import sass from 'gulp-sass'
import concat from 'gulp-concat'
import connect from 'gulp-connect'
import webpack from 'gulp-webpack'
import eslint from 'gulp-eslint'
import paths from './config/paths'
import webpackConfig from './webpack.config.babel'

gulp.task('sass', () => {
  return gulp.src(paths.sass.src)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest(paths.sass.dest))
    .pipe(concat('grap-ui.css'))
    .pipe(gulp.dest('dist/js'))
    .pipe(gulp.dest('docs/css'))
})

gulp.task('eslint', () => {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
  return gulp.src(['**/*.js', '!node_modules/**', '!docs/**', '!build/**', '!dist/**'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError())
})

gulp.task('webpack', ['eslint'], () => {
  return gulp.src('./js/main.js')
           .pipe(webpack(webpackConfig))
           .pipe(concat('grap-ui.js'))
           .pipe(gulp.dest('dist/js'))
           .pipe(gulp.dest('docs/js'))
})

gulp.task('connect', () => {
  connect.server({
    root: 'docs',
    livereload: true
  })
})

gulp.task('html', () => {
  gulp.src('./docs/index.html')
  .pipe(connect.reload())
})

gulp.task('js', () => {
  gulp.src('./js/**.js')
  .pipe(connect.reload())
})

gulp.task('css', () => {
  gulp.src('./scss/**.scss')
  .pipe(connect.reload())
})

gulp.task('watch', () => {
  gulp.watch(['./docs/index.html'], ['html'])
  gulp.watch(['./js/**.js'], ['webpack', 'js'])
  gulp.watch(['./scss/**.scss'], ['sass', 'css'])
  gulp.watch(['./grap-ui.scss'], ['sass', 'css'])
})

gulp.task('default', ['sass', 'webpack', 'connect', 'watch'])
