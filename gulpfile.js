// /////////////////////////////////////////////////
// Required
// /////////////////////////////////////////////////

var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
    sass = require("gulp-sass"),
    plumber = require("gulp-plumber"),
    browserSync = require("browser-sync"),
    concat = require("gulp-concat"),
    reload = browserSync.reload;

// /////////////////////////////////////////////////
// Scripts Task
// /////////////////////////////////////////////////

gulp.task("scripts",function(){
    gulp.src([
      "app/bower_components/jquery/dist/jquery.min.js",
      "app/bower_components/gsap/src/minified/TweenMax.min.js",
      "app/bower_components/jquery-bez/jquery.bez.min.js",
      "app/bower_components/gsap/src/minified/TimelineLite.min.js",
      "app/bower_components/scrollmagic/scrollmagic/minified/ScrollMagic.min.js",
      "app/bower_components/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js",
      "app/bower_components/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js",
      "app/bower_components/viewport-units-buggyfill/viewport-units-buggyfill.js",
      "app/bower_components/viewport-units-buggyfill/viewport-units-buggyfill.hacks.js",
      "app/js/**/*.js", '!app/js/**/*.min.js',
    ])
    .pipe(concat('main.js'))
    .pipe(rename({suffix:'.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('app/assets/js'))
    .pipe(reload({stream:true}));
});

// /////////////////////////////////////////////////
// Styles Task
// /////////////////////////////////////////////////

gulp.task("styles",function(){
    gulp.src("app/sass/**/*.scss")
    .pipe(plumber())
    .pipe(sass({
      style:"compressed"
    }))
    .pipe(gulp.dest("app/assets/css/"))
    .pipe(reload({stream:true}));
});

// /////////////////////////////////////////////////
// HTML Task
// /////////////////////////////////////////////////

gulp.task("html", function(){
    gulp.src("app/**/*.html")
    .pipe(reload({stream:true}));
});

// /////////////////////////////////////////////////
// Browser-Sync Task
// /////////////////////////////////////////////////
gulp.task('browser-sync', function(){
  browserSync({
    server:{
      baseDir:"./app/"
    }
  })
});

// /////////////////////////////////////////////////
// Watch Task
// /////////////////////////////////////////////////

gulp.task("watch",function(){
  gulp.watch("app/js/**/*.js",['scripts']);
  gulp.watch("app/sass/**/*.scss",['styles']);
  gulp.watch("app/**/*.html",['html']);
});


// /////////////////////////////////////////////////
// Default Task
// /////////////////////////////////////////////////
gulp.task("default",[ 'styles', 'html', 'browser-sync', 'watch']);
