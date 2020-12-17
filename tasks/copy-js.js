import { pipeline } from 'stream';

const gulp = require('gulp');

export function copyJs() {
    return gulp.src('src/**/*.js')
        .pipe(gulp.dest('dist'));
}