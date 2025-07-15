const express = require('express');
const router = express.Router();
const { getAllTasks, createTask, deleteTask, updateTask } = require('../controllers/taskController');

// Ruta: GET /api/tasks
router.get('/', getAllTasks);
// Ruta: POST /api/tasks
router.post('/', createTask); 
// Ruta: DELETE /api/tasks/:id
router.delete('/:id', deleteTask); // Ruta para eliminar una tarea por ID
// Ruta: PUT /api/tasks/:id
router.put('/:id', updateTask); // Ruta para actualizar una tarea por ID

module.exports = router;