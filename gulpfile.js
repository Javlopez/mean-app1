(function(){
  'use strict';

  var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    watch = require('gulp-watch'),
    jshint = require('gulp-jshint'),
    livereload = require('gulp-livereload'),
    _paths = ['server/**/*.js', 'client/js/*.js'];

    //register nodemon
    gulp.task('nodemon', function(){
      nodemon({
        script: 'server/app.js',
        env: {
          'NODE_ENV': 'development'
        }
      })
      .on('restart');
    });

    //Rerun tasks when the file changes
    /*
    gulp.task('watch', function(){
      livereload.listen();

      gulp.src(_paths, {
        read: false
      })
      .pipe(watch({
        emit:'all'
      }))
      .pipe(jshint())
      .pipe(jshint.reporter('default'));

      watch(_paths, livereload.changed);
    });
    */

    gulp.task('watch', function(){
      livereload.listen();
      gulp.src(_paths, {
        read:false
      })
      .pipe(watch({
        emit:'all'
      }))
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
      
      watch(_paths, livereload.changed);
    });

    gulp.task('lint', function(){
      gulp.src(_paths)
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
    });

    gulp.task('default', ['lint', 'nodemon', 'watch']);

}());
