import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = { title, description };

    try {
      const res = await fetch("http://localhost:3001/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
      });

      const data = await res.json();
      setTitle("");
      setDescription("");
      navigate("/"); // Vuelve al inicio
    } catch (error) {
      console.error("Error al crear la tarea:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear nueva tarea</h2>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <br />
      <button type="submit">Crear tarea</button>
    </form>
  );
}

export default TaskForm;
