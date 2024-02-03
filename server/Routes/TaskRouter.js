const { Router } = require("express");

const routes = new Router();

routes.post("/", () => {});
routes.get("/", () => {});
routes.put("/:id", () => {});
routes.delete("/:id", () => {});

module.exports = routes;
