const express = require('express');
const cors = require('cors'); // 👈 Importamos CORS
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors()); // 👈 Usamos CORS para permitir peticiones desde el frontend
const taskRoutes = require('./routes/taskRoutes'); // Importar las rutas de tareas
// Middleware para que Express entienda JSON
app.use(express.json());


// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente 🚀');
});

// Rutas
app.use('/api/tasks', taskRoutes); 

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});