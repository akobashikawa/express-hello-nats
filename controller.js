class Controller {

    constructor({ service }) {
        this.service = service;
    }
    
    async hello(req, res) {
        res.send(this.service.hello());
    }
}

module.exports = Controller;