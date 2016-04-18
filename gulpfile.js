var gulp = require('gulp'); // build process
var gutil = require('gulp-util'); // print console logging process, debugg
var source = require('vinyl-source-stream'); // move text files
var browerisy = require('browserify'); // code dependency
var watchify = require('watchify'); // re-run gulpfile when is changed
var reactify = require('reactify'); // convert jsx to js

gulp.task('default', function () {
    var bundler = watchify(browerisy({  // bundler is the object that executes the build
       entries: ['./src/app.jsx'],      // browserify start at app.jsx
       transform: [reactify],           // convert all jsx to js
       extensions: ['.jsx'],            // look at these files
       debug: true,                     //
       cache: {},
       packageCache:{},
       fullPaths: true
   }));

    function build(file){
        if (file) gutil.log('Recompiling ' + file);
        return bundler
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('main.js'))
            .pipe(gulp.dest('./'))
    }
    build();                        // when run gulp on terminal will build the file
    bundler.on('update', build);    // when file change hears for update event and rebuilds the file
});