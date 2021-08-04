const express = require("express");
const cors = require('cors');
const profissional = require('./routers/profissional');
const tipoDeProfissional = require("./routers/tipoDeProfissional");

class App {
    constructor() {
        this.express = express();
        this.middleware();
        this.routers();
    }

    middleware() {
        this.express.use(cors({
            origin: ['http://localhost:3000', 'http://localhost:8080']
        }));
        this.express.use(express.json());
    }

    routers() {
        this.express.use("/profissional", profissional);
        this.express.use("/tipoDeProfissional", tipoDeProfissional);
    }
}

module.exports = new App().express;