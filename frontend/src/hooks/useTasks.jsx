// src/hooks/useTasks.js
import { useEffect, useState } from "react";
import { fetchTasks } from "../services/taskService";

export function useTasks() {
  const [tasks, setTasks] = useState([]);

useEffect(() => {
  fetchTasks().then(setTasks).catch(console.error);
}, []);

  const completedTasks = tasks.filter((task) => task.completed);
  const uncompletedTasks = tasks.filter((task) => !task.completed);

  return {
    completedTasks,
    uncompletedTasks
  };
}