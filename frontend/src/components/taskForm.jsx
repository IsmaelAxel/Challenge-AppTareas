import { useTaskForm } from "../hooks/useTaskForm";

function TaskForm() {
  const { form, handleChange, handleSubmit } = useTaskForm();

  return (
    <div>
      <h2>Crear nueva tarea</h2>
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

        <button type="submit">Crear tarea</button>
      </form>
    </div>
  );
}

export default TaskForm;
