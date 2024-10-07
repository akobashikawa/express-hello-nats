class Controller {

    constructor({ service }) {
        this.service = service;
    }
    
    async hello(req, res) {
        const name = req.query.name;
        const message = await this.service.hello(name);
        res.send(message);
    }
}

module.exports = Controller;