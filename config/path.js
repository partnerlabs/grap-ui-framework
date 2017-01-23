const paths = {
  build: {
    src: 'build/**/*',
    dest: 'build'
  },
  sass: {
    src: 'docs/docs.scss',
    dest: 'build',
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
  }
};

module.exports = paths
