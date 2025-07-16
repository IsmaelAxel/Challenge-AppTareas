import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTaskById, updateTask, deleteTask } from "../services/taskService";

export function useTaskItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    completed: false
  });

  useEffect(() => {
    async function fetchTask() {
      const found = await getTaskById(id);
      if (!found) {
        alert("Tarea no encontrada");
        navigate("/");
        return;
      }

      setTask(found);
      setForm({
        title: found.title,
        description: found.description,
        completed: found.completed,
      });
    }

    fetchTask();
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
      await updateTask(id, form);
      alert("✅ Tarea modificada exitosamente");
      navigate("/");
    } catch (error) {
      alert("❌ Error al modificar la tarea");
    }
  };

  const handleDelete = async () => {
    const confirmDelete = confirm("¿Estás seguro de que querés eliminar esta tarea?");
    if (!confirmDelete) return;

    try {
      await deleteTask(id);
      alert("🗑️ Tarea eliminada correctamente");
      navigate("/");
    } catch (error) {
      alert("❌ Error al eliminar la tarea");
    }
  };

  return { task, form, handleChange, handleSubmit, handleDelete };
}
