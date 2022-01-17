import { Router } from "express";
import res from "express/lib/response";
import Task from "../models/Task";
import {
  renderTasks,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  tasktoggleDone,
} from "../controllers/tasks.controller";

const router = Router();

//Primero va al controller y dentro del archivo tasks controller se muestra.
//este get me muestra los datos de la base de datos, el .lean lo muestra en tipo JS sin el lean lo muestra como objeto de mongodb
router.get("/", renderTasks);

//esto guarda en la base de datos, datos nuevos
router.post("/tasks/add", createTask);

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/task/:id/edit", renderTaskEdit);

//esto lo que hace es actualizar el dato editado
router.post("/task/:id/edit", editTask);

//ruta para eliminar
router.get("/task/:id/delete", deleteTask);

//ruta para marcar el done como realizado o no
router.get("/task/:id/toggleDone", tasktoggleDone);

export default router;
