import {val} from './es6-module';
import { jsFromSub } from './sub/js-from-sub';
import {getObj} from './typescript-code';

const getHello = require('./get-hello').default;

console.log('Starting server');
console.log('Get Hello:', getHello("World"));
console.log('ES6 import:', val);
console.log('TypeScript Code:', getObj('John', 21));
console.log('JS from Sub', jsFromSub);

require('./object-rest-spread');

setInterval(() => console.log(`Hello from the server`, new Date()), 1000);

function cleanUpServer(eventType) {
    console.log('Bye bye', eventType);
    process.exit(0);
}

[`exit`, `SIGINT`, `SIGUSR1`, `SIGUSR2`, `uncaughtException`, `SIGTERM`].forEach((eventType) => {
    process.on(eventType, cleanUpServer.bind(null, eventType));
})