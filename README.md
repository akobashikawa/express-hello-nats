# Hello NATS

Modelo de aplicación usando Express, SocketIO, NATS.

## Run NATS server

```sh
docker run -d --name nats-server -p 4222:4222 
```

## Run server

```sh
npm install
npm run dev
```

## Run repl

```sh
node repl.js
# dentro, se pueden ejecutar los métodos del service
await service.hello()
```