const app = require('./app');

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
server.on('error', (err) => {
    console.error(`Fallo al iniciar server: ${err}`);
});