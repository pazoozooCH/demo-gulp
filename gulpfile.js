const { series } = require('gulp');
const { run } = require('./tasks/run');
const { clean } = require('./tasks/clean');

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  // body omitted
  console.log('#Build runs');
  cb();
}

exports.build = build;
exports.default = series(clean, build, run);