import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  // Separamos las tareas en dos grupos:
  const completedTasks = tasks.filter((task) => task.completed);
  const uncompletedTasks = tasks.filter((task) => !task.completed);

  return (
    <div>
      {/* TAREAS NO COMPLETADAS */}
      <section>
        <h2>⏳ Pendientes</h2>
        {uncompletedTasks.length === 0 ? (
          <p>No hay tareas pendientes.</p>
        ) : (
          <ul>
            {uncompletedTasks.map((task) => (
              <li key={task.id} className="task">
                <Link to={`/tarea/${task.id}`}>
                  <strong>{task.title}</strong>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* TAREAS COMPLETADAS */}
      <section>
        <h2>✅ Completadas</h2>
        {completedTasks.length === 0 ? (
          <p>No hay tareas completadas.</p>
        ) : (
          <ul>
            {completedTasks.map((task) => (
              <li key={task.id} className="task">
                <Link to={`/tarea/${task.id}`}>
                  <strong>{task.title}</strong>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default TaskList;
