const {v4: uuidv4} = require('uuid'); // Importa la librería para generar IDs únicos si es necesario
const tasks = require('../data/tasks');

// GET /api/tasks
function getAllTasks(req, res) {
  res.json(tasks); // Devuelve todas las tareas en formato JSON
}

// POST /api/tasks
function createTask(req, res) {
  const {title, description} = req.body; // Extraemos el título y la descripción del cuerpo de la solicitud

  //Validación básica
  if (!title || !description) {
    return res.status(400).json({error: 'Título y descripción son obligatorios'});
  }

  const newTask = {
    id: uuidv4(), // Genera un ID simple basado en la longitud del array
    title,
    description,
    completed: false,
    createdAt: new Date() // Fecha de creación
  };

  tasks.push(newTask); // Añade la nueva tarea al array de tareas
  res.status(201).json(newTask); // Devuelve la nueva tarea creada con un estado 201
}

function deleteTask(req, res) {
  const { id } = req.params; // Extrae el ID de la tarea a eliminar

  const taskIndex = tasks.findIndex(task => task.id === id); // Busca el índice de la tarea

  if (taskIndex === -1) {
    return res.status(404).json({error: 'Tarea no encontrada'}); // Si no se encuentra, devuelve un error 404
  }

  const deleteTask = tasks.splice(taskIndex, 1) // Elimina la tarea del array
  res.json({message: 'Tarea eliminada correctamente', task: deleteTask}); // Devuelve un mensaje de éxito
}

function updateTask(req, res) {
  const { id } = req.params; // Extrae el ID de la tarea a actualizar
  const { title, description, completed } = req.body; // Extrae los nuevos valores del cuerpo de la solicitud

  const task = tasks.find(task => task.id === id); // Busca el índice de la tarea

  if (!task) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  // Validacion básica
  if (title !== undefined){
    task.title = title
  }
  if (description !== undefined) {
    task.description = description;
  }
  if (completed !== undefined) {
    task.completed = completed;
  }

  res.json({ message: 'Tarea actualizada correctamente', task });
}


module.exports = {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask
};