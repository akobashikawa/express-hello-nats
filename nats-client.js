const { connect, StringCodec } = require('nats');

const sc = StringCodec();
let nc;

async function initNats() {
    const NATS_URL = process.env.NATS_URL || 'nats://localhost:4222';
    try {
        nc = await connect({ servers: NATS_URL });
        console.log(`NATS connection to ${NATS_URL}: OK`);
        return nc;
    } catch (error) {
        console.error(`NATS connection to ${NATS_URL}: ${error.message}`);
        return null;
    }
}

// Método para publicar sin esperar respuesta
async function publish(subject, data) {
    try {
        if (!nc) {
            await initNats();
        }

        nc.publish(subject, sc.encode(data));
        console.log(`NATS published message to ${subject}`);
        // console.log(data);
    } catch (error) {
        console.error(`NATS failed to publish message to ${subject}: ${error.message}`);
    }
}

// Método para suscribirse a un tema
async function subscribe(subject, handler) {
    try {
        if (!nc) {
            await initNats();
        }
    
        const subscription = nc.subscribe(subject, {
            callback: (err, msg) => {
                if (err) {
                    console.error(`NATS error in subscription to ${subject}: ${err.message}`);
                    return;
                }
                const message = sc.decode(msg.data);
                console.log(`NATS received message from ${subject}`);
                handler(message); // Ejecutar el handler proporcionado por el usuario
            },
        });
    
        console.log(`NATS subscribed to ${subject}`);
        return subscription;
    } catch (error) {
        console.error(`NATS failed to subscribe to ${subject}: ${error.message}`);
    }
}

module.exports = {
    initNats,
    sc,
    nc,
    publish,
    subscribe,
};