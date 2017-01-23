'use strict'

import gulp from 'gulp'
import sass from 'gulp-sass'
import paths from './config/paths'

gulp.task('sass', () =>{
  console.log('[gulp#sass] concat && compiled')
  console.log('[gulp#sass] paths.sass.src ', paths.sass.src, ' paths.sass.dest : ',paths.sass.dest)
  return gulp.src(paths.sass.src)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(paths.sass.dest))
})

gulp.task('default', () => {
  console.log('[gulp#default] started')
})
