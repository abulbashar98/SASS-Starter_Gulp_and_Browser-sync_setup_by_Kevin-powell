

/*--------------------------------------------- *\
Edits after the tutorial from Comment Section
\*--------------------------------------------*/

// Step 1

/*
 Sass variable genuine ==> const sass = require('gulp-sass');
 Sass variable edited ==> const sass = require('gulp-sass')(require('sass'));
 */

// Step 2

/* 
Install sass ===>  npm install --save-dev sass
*/




const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

// compile scss into css

function style() {
    // 1. where is my scss file
    return gulp.src('./scss/**/*.scss')
        // 2. pass that file through sass compiler
        .pipe(sass().on('error', sass.logError))
        // 3. where do i save the compiled CSS??
        .pipe(gulp.dest('./css'))
        // 4. steam changes to all browser
        .pipe(browserSync.stream());
}


function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;