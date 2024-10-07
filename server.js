const app = require('./app');

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

server.on('error', (err) => {
    console.error(`Error on server: ${err}`);
});

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

function gracefulShutdown(signal) {
    if (signal) {
        console.log(`\nReceived signal: ${signal}`);
        console.log('Gracefully closing http server...');
    }

    try {
        server.close((err) => {
            if (err) {
                console.error('There was an error', err.message);
                process.exit(1);
            } else {
                console.log('http server closed successfully');
                console.log('bye, bye!');
                process.exit(0);
            }
        });
    } catch (error) {
        console.error('There was an error', err.message)
        setTimeout(() => process.exit(1), 500)
    }
}

