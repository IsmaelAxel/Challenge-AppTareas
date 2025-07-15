import { Routes, Route, Link } from 'react-router-dom';
import TaskList from './components/taskList';
import TaskForm from './components/taskForm';
import TaskItem from './components/taskItem';

function App() {
  return (
    <div className='container'>
      <h1>📝 Lista de Tareas</h1>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/crear">Crear tarea</Link>
      </nav>

      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/crear" element={<TaskForm />} />
        <Route path="/tarea/:id" element={<TaskItem />} />
      </Routes>
    </div>
  );
}

export default App;