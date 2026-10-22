import express from "express";
import pool from "./db.js";
const app = express(); // helps in creatinf the server
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from the server or backend");
});

/* GET route*/
const todos = [
  { id: 1, title: "Learn Express", date: "12/12/12", completed: false },
  { id: 2, title: "Build a todo API", date: "12/12/12", completed: false },
  { id: 3, title: "Build a todo API", date: "12/12/12", completed: false },
];

// this is the GET route
app.get("/todos", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT id, title, date::text AS date, completed
      FROM todos
      ORDER BY id
    `);

    res.json(result.rows);
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      message: "Could not load todos",
    });
  }
});

/* POST route */
app.post("/todos", async (req, res) => {
  const title = req.body?.title;
  const date = req.body?.date;

  if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ message: "Title is required" });
  }

  try {
    const result = await pool.query(
      `INSERT INTO todos (title, date)
       VALUES ($1, $2)
       RETURNING id, title, date::text AS date, completed`,
      [title.trim(), date || null],
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error.message);

    res.status(500).json({ message: "Could not create todo" });
  }
});

/* PATCH route  */
app.patch("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const newToDo = todos.find((todo) => todo.id === id);
  if (!newToDo) {
    return res.status(404).json({ message: "todos not found" });
  }
  const completed = req.body?.completed;
  if (typeof completed !== "boolean") {
    return res.status(400).json({ message: "completed must be true or false" });
  }
  newToDo.completed = completed;
  res.json(newToDo);
});
/* Delete route  */
app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "todo not found" });
  }
  todos.splice(index, 1);
  res.json({ message: "todo is deleteds" });
});
app.listen(3000, () => {
  console.log(` server is running on the http://localhost:3000`);
});
