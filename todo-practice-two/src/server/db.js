import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: process.env.PGPASSWORD,
  database: "todo_app",
});

export default pool;
