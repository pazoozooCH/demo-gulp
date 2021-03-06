var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

export function transpile() {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));;
}

export function transpileWatch() {
    return gulp.watch('src/**/*.ts', { ignoreInitial: false }, transpile)
}