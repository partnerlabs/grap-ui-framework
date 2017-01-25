const paths = {
  build: {
    src: 'build/**/*',
    dest: 'build'
  },
  sass: {
    src: './scss/main.scss',
    dest: 'build/css',
    watch: ['docs/sass/*.scss', 'scss/*.scss', 'docs/docs.scss', 'grap-ui.scss']
  },
  img: {
    src: 'docs/img/*.png',
    dest: 'build/img'
  },
  html: {
    src: 'docs/index.html',
    dest: 'build',
    watch: ['docs/html/*.html', 'docs/index.html']
  },
  js: {
    src: 'js/index.js',
    dest: 'build'
  }
}

module.exports = paths
