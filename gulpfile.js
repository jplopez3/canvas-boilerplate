var gulp = require('gulp');
var sync = require('browser-sync');



gulp.task('serve', function() {
  sync({
    server: {
      baseDir: './',
      // index: 'outracoisa.html' se fosse outro nome q nao index
    },
    port: 8000
  });
  gulp.watch('*.html').on('change', sync.reload);
  refresh.listen();
  gulp.watch('styles/*.scss', ['sassing', sync.reload]);
  gulp.watch('scripts/*.js', ['scripting', sync.reload]);

});


gulp.task('default', ['serve']);
