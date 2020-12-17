const { watch } = require('gulp');
const { spawn } = require('child_process');

let node;

function run() {
    return spawn('node', ['-r', 'esm', 'src/server.js'], {stdio: 'inherit'});
}

function run_watch() {
    console.log('run_watch');
    if (node) {
        console.log('Killing running node process');
        node.kill();
    }

    node = run();
    return node;
}

// gulp.task('run', function() {
//     run_watch();
// });

exports.run = run;
exports.run_watch = function() {
    watch('src/**/*.js',  { ignoreInitial: false }, function() {
        run_watch();
    });
}