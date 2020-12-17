const { series } = require('gulp');
const { spawn } = require('child_process');

function run() {
    return spawn('node', ['src/server.js'], {stdio: 'inherit'});
}

exports.run = run;