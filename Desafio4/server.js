const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.port = 8080;

        this.productsPath = '/api/products';

        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes (){
        this.app.use(this.productsPath, require('./routes/products-routes'));
    }

    listen (){
        this.app.listen( this.port, () => {
            console.log(`This server is now running in port: ${this.port}`);
        })
    }
}

module.exports = Server;