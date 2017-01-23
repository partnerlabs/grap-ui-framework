'use strict'

import gulp from 'gulp'
import sass from 'gulp-sass'
import babel from 'gulp-babel'
import concat from 'gulp-concat'
import sourcemaps from 'gulp-sourcemaps'
import gutil from 'gulp-util'
import webpack from 'gulp-webpack'
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

gulp.task('webpack', () => {
    return gulp.src('./js/main.js')
           .pipe(webpack(webpackConfig))
           .pipe(concat('grap-ui.js'))
           .pipe(gulp.dest('dist/js'))
           .pipe(gulp.dest('docs/js'))
})

gulp.task('default', () => {
  console.log('[gulp#default] started')

})
