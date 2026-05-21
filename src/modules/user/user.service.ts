import { pool } from "../../db";
import type { IUser } from "./user.interface";
import bcrypt from "bcryptjs";

const createUserCreateService = async (payload: IUser) => {
  const { name, email, password, role } = payload;

  const hashPassword = await bcrypt.hash(password, 10);
  const result = await pool.query(
    `
     INSERT INTO users(name,email,password,role) VALUES($1,$2,$3,COALESCE($4,'contributor')) RETURNING *
    `,
    [name, email, hashPassword, role],
  );
  delete result.rows[0].password;
  return result;
};
const getAllUserService = async () => {
  const result = await pool.query(`
    SELECT id, name, email, role,created_at,updated_at
    FROM users
  `);

  return result;
};

const getSingleUserService = async (id: string) => {
  const result = await pool.query(
    `
      SELECT * FROM users WHERE id=$1  
        `,
    [id],
  );

  delete result.rows[0].password;
  return result;
};

const updateUserService = async (payload: IUser, id: string) => {
  const { name, password, role } = payload;

  const result = await pool.query(
    `
    UPDATE users 
    SET 
    name=COALESCE($1,name),
    password=COALESCE($2,password),
    role=COALESCE($3,role)
   
    WHERE id=$4 RETURNING *
    `,
    [name, password, role, id],
  );

  return result;
};

const deleteUserService = async (id: string) => {
  const result = await pool.query(
    `
    DELETE FROM users WHERE id=$1  
      `,
    [id],
  );
  return result;
};

export const userService = {
  createUserCreateService,
  getAllUserService,
  getSingleUserService,
  updateUserService,
  deleteUserService,
};
