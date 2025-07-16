import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTask } from "../services/taskService";

export function useTaskForm() {
  const [form, setForm] = useState({
    title: "",
    description: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTask(form);
      alert("✅ Tarea creada correctamente");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("❌ Error al crear la tarea");
    }
  };

  return {
    form,
    handleChange,
    handleSubmit
  };
}
