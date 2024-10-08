const repl = require('repl');

const nats = require('./nats-client');

const Service = require('./service');
const service = new Service({ nats });

async function executeQuery(query) {
    try {
        const result = await service.executeQuery(query);
        // console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}

// ejemplo: await service.hello()
global.service = service;

const cli = repl.start('repl> ');
cli.on('exit', () => {
    console.log('bye, bye!');
    process.exit();
});