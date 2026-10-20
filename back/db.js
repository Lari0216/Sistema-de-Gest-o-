import { Pool } from "pg"

const pool = new Pool ({
    host: "localhost",
    user: "postgres",
    password: "senai",
    database: "sistemadegestao",
    port: 5432
});

export default pool; 