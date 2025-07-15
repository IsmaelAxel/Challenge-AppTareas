import { Routes, Route, Link } from 'react-router-dom';
import TaskList from './components/taskList';
import TaskForm from './components/taskForm';

function App() {
  return (
    <div>
      <h1>📝 Lista de Tareas</h1>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/crear">Crear tarea</Link>
      </nav>

      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/crear" element={<TaskForm />} />
        {/* Más rutas en el futuro, como editar tarea */}
      </Routes>
    </div>
  );
}

export default App;