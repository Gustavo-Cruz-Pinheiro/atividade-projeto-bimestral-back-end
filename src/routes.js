const { Router } = require("express");
const routes = Router();
const UsuarioController = require("./Controllers/UsuarioController");

routes.post("/cadastrar/", UsuarioController.store);
routes.get("/cadastrar/:email", UsuarioController.index);

routes.get("/entrar/:email", UsuarioController.index);

module.exports = routes;
