import Task from "../models/Task";

//este get me muestra los datos de la base de datos, el .lean lo muestra en tipo JS sin el lean lo muestra como objeto de mongodb
export const renderTasks = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("index", { tasks: tasks });
};

//esto guarda en la base de datos, datos nuevos
export const createTask = async (req, res) => {
  //este try intenta guardar y si existe un error en el cath devuelve el error informando al usuario
  try {
    const task = Task(req.body);

    await task.save();

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const renderTaskEdit = async (req, res) => {
  //esto lo que hace es encontrar por id de tarea
  const task = await Task.findById(req.params.id).lean();

  res.render("edit", { task });
};

//esto lo que hace es actualizar el dato editado
export const editTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);
  res.redirect("/");
};

//ruta para eliminar
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id, req.body);
  res.redirect("/");
};

//ruta para marcar el done como realizado o no
export const tasktoggleDone = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
};
