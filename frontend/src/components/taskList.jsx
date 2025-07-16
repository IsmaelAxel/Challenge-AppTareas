// src/components/TaskList.jsx
import { Link } from "react-router-dom";
import { useTasks } from "../hooks/useTasks";

function TaskList() {
  const { completedTasks, uncompletedTasks } = useTasks();

  return (
    <div>
      <section className="task-section">
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

      <section className="task-section">
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
