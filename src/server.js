import {val} from './es6-module';
const getHello = require('./get-hello').default;

console.log('Starting server');
console.log('Get Hello:', getHello("World"));
console.log('ES6 import:', val);

require('./object-rest-spread');

setInterval(() => console.log(`Hello from the server`, new Date()), 1000);

function cleanUpServer(eventType) {
    console.log('Bye bye', eventType);
    process.exit(0);
}

[`exit`, `SIGINT`, `SIGUSR1`, `SIGUSR2`, `uncaughtException`, `SIGTERM`].forEach((eventType) => {
    process.on(eventType, cleanUpServer.bind(null, eventType));
})