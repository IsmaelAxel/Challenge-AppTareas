const API_URL = "http://localhost:3001/api/tasks";

export async function createTask(task) {
  const res = await fetch("http://localhost:3001/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(task)
  });

  if (!res.ok) {
    throw new Error("Error al crear la tarea");
  }

  return await res.json();
}

export async function fetchTasks() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Error al obtener tareas");
  return await res.json();
}

export async function getTaskById(id) {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data.find(task => task.id === id);
}

export async function updateTask(id, taskData) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(taskData),
  });

  if (!res.ok) throw new Error("Error al actualizar la tarea");
  return await res.json();
}

export async function deleteTask(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Error al eliminar la tarea");
  return await res.json();
}