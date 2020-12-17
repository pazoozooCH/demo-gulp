console.log('Starting server');

setInterval(() => console.log(`Hello from the server`, new Date()), 1000);

function cleanUpServer(eventType) {
    console.log('Bye bye', eventType);
    process.exit(0);
}

[`exit`, `SIGINT`, `SIGUSR1`, `SIGUSR2`, `uncaughtException`, `SIGTERM`].forEach((eventType) => {
    process.on(eventType, cleanUpServer.bind(null, eventType));
})