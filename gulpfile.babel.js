'use strict'

import gulp from 'gulp'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import concat from 'gulp-concat'
import connect from 'gulp-connect'
import webpack from 'gulp-webpack'
import eslint from 'gulp-eslint'
import scsslint from 'gulp-scss-lint'
import paths from './config/paths'
import webpackConfig from './webpack.config.babel'

gulp.task('sass', ['scsslint'], () => {
  return gulp.src(paths.sass.src)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(paths.sass.dest))
    .pipe(concat('grap-ui.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(gulp.dest('docs/css'))
})

gulp.task('scsslint', () => {
  return gulp.src('./scss/*.scss')
    .pipe(scsslint())
})

gulp.task('eslint', () => {
  return gulp.src(['**/*.js', '!node_modules/**', '!docs/**', '!build/**', '!dist/**'])
    .pipe(eslint())
    .pipe(eslint.format())
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
  gulp.watch(['./scss/**/**.scss'], ['sass', 'css'])
  gulp.watch(['./grap-ui.scss'], ['sass', 'css'])
})

gulp.task('default', ['sass', 'webpack', 'connect', 'watch'])
