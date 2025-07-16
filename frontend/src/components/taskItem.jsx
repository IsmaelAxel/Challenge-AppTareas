import { useTaskItem } from "../hooks/useTaskItem";

function TaskItem() {
  const { task, form, handleChange, handleSubmit, handleDelete } = useTaskItem();

  if (!task) return <p>Cargando tarea...</p>;

  return (
    <div>
      <h2>Editar tarea</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Descripción:</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="checkbox-container">
          <label>
            <input
              type="checkbox"
              name="completed"
              checked={form.completed}
              onChange={handleChange}
            />
            Marcar como completada
          </label>
        </div>

        <div className="form-actions">
          <button type="submit">Guardar cambios</button>
          <button type="button" onClick={handleDelete}>Eliminar tarea</button>
        </div>
      </form>
    </div>
  );
}

export default TaskItem;
