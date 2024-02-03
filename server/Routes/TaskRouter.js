const { Router } = require("express");
const TaskController = require("../Controllers/TaskController");

const routes = new Router();

routes.post("/", TaskController.create);
routes.get("/", TaskController.getAll);
routes.put("/:id", TaskController.update);
routes.delete("/:id", TaskController.remove);

module.exports = routes;
