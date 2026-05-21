import { Pool } from "pg";
import config from "../config";

// Connection Database
export const pool = new Pool({
  connectionString: config.connection_string,
});

// Create Database:
export const initDB = async () => {
  try {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name varchar(20),
        email varchar(20) UNIQUE NOT NULL,
        password text NOT NULL,
        role varchar(20) DEFAULT 'contributor',
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        )       
        `);
    await pool.query(`
          
          CREATE TABLE IF NOT EXISTS issues(
          id SERIAL PRIMARY KEY,
          reporter_id INT UNIQUE REFERENCES users(id) ON DELETE CASCADE,
          description TEXT,
          type TEXT,
          status TEXT,
          address TEXT,
          phone varchar(20),  
             created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
          )`);
    console.log("Database connected successfully!");
  } catch (error) {
    console.log(error);
  }
};
