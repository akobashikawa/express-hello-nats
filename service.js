class Service {
    hello(name = 'World') {
        const message = `Hello ${name}!`;
        // nats.publish('hello.done', { message })
        return message;
    }
}

module.exports = Service;