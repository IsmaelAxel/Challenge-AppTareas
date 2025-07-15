import { useEffect, useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]); // Estado para guardar las tareas
  useEffect(() => {
    fetch('http://localhost:3000/api/tasks') // Pedimos las tareas al backend
      .then(res => res.json()) // Convertimos la respuesta a JSON
      .then(data => setTasks(data)) // Guardamos las tareas en el estado
      .catch(error => console.error('Error al obtener tareas:', error));
  }, []); // El array vacío [] indica que se ejecuta solo una vez

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <strong>{task.title}</strong> - {task.description} - {task.completed ? '✅' : '❌'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;