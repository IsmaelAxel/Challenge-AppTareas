# 📋 Lista de Tareas - Challenge

Este es un proyecto full stack de una aplicación para gestionar tareas (to-do list) creado con:

- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Almacenamiento:** Simulado con array en memoria (sin base de datos)

---

## 🚀 Cómo iniciar el proyecto

### 📁 1. Clonar el repositorio

```bash
git clone https://github.com/IsmaelAxel/Challenge-AppTareas.git
cd Challenge-AppTareas
```

### 📆 2. Instalar dependencias

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

---

### 🛠️ 3. Iniciar servidores

#### Iniciar el backend (por ejemplo en el puerto 3001)

```bash
cd backend
npm run dev
```

> Esto inicia el servidor Express en `http://localhost:3001`.

#### Iniciar el frontend (Vite en el puerto 5173 por defecto)

```bash
cd ../frontend
npm run dev
```

> Esto inicia la aplicación React en `http://localhost:5173`.

---

## 📌 Funcionalidades

- Crear tareas ✅
- Editar tareas 📝
- Eliminar tareas 🗑️
- Filtrar por tareas completadas y no completadas 🎯

---

## 🧠 Estructura del proyecto

```
Challenge-AppTareas/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── data/
│   └── index.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── App.jsx
│   └── vite.config.js
│
└── README.md
```

---

## 📋 Notas

- El proyecto guarda las tareas en memoria, lo cual significa que se borran cuando se reinicia el backend.
- No hay base de datos por el momento, pero el código está preparado para escalar.

---

## 💡 Ideas futuras

- Guardado persistente en base de datos (MongoDB, PostgreSQL, etc.) 📂
- Autenticación de usuarios 🔐
- Buscador o paginación 🔍
- Diseño más personalizado 🎨

---

## 🤝 Autor

Hecho con ❤️ por [Ismael Axel](https://github.com/IsmaelAxel)

