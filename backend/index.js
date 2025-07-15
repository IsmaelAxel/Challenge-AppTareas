const express = require('express');
const dotenv = require('dotenv') // Cargar variables de entorno
const cors = require('cors'); // 👈 Importamos CORS
dotenv.config(); // Cargar las variables de entorno desde el archivo .env

const app = express();
const PORT = process.env.API || 3000;

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