const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.rutasUsuario = '/api/usuarios';

    //Middlewares
    this.middlewares();

    //Rutas de la aplicaion
    this.rout();
  }

  middlewares() {
    //CORSç
    this.app.use(cors());

    //Parseo y lectura del body
    this.app.use( express.json());

    this.app.use(express.static("public"));
  }

  rout() {
      this.app.use(this.rutasUsuario,require('../routes/user'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`);
    });
  }
}

module.exports = Server;
