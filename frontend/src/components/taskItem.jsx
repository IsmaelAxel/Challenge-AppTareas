import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function TaskItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    completed: false
  });

  useEffect(() => {
    fetch(`http://localhost:3001/api/tasks`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((t) => t.id === id);
        if (found) {
          setTask(found);
          setForm({
            title: found.title,
            description: found.description,
            completed: found.completed
          });
        } else {
          alert("Tarea no encontrada");
          navigate("/");
        }
      });
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        alert("✅ Tarea modificada exitosamente");
        navigate("/");
      } else {
        alert("❌ Error al modificar la tarea");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Error de red al actualizar la tarea");
    }
  };

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
          <button
            type="button"
            onClick={async () => {
              const confirmDelete = confirm("¿Estás seguro de que querés eliminar esta tarea?");
              if (!confirmDelete) return;

              try {
                const response = await fetch(`http://localhost:3001/api/tasks/${id}`, {
                  method: "DELETE"
                });

                if (response.ok) {
                  alert("🗑️ Tarea eliminada correctamente");
                  navigate("/");
                } else {
                  alert("❌ Error al eliminar la tarea");
                }
              } catch (error) {
                console.error(error);
                alert("❌ Error de red al eliminar la tarea");
              }
            }}
          >
            Eliminar tarea
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskItem;
