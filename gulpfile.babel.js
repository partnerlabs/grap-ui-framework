'use strict'

import gulp from 'gulp'
import sass from 'gulp-sass'


gulp.task('sass', () =>{
  console.log('[gulp#sass] concat && compiled')
  return gulp.src(paths.sass.src)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(paths.sass.dest))
})

gulp.task('default', () => {
  console.log('[gulp#default] started')
})
