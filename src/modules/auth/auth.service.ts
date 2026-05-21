import { pool } from "../../db";

import bcrypt from "bcryptjs";
import type { ILogin, IUser } from "./auth.interface";

const registerUserService = async (payload: IUser) => {
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
const loginUserService = async (payload: ILogin) => {
  const { email, password } = payload;
  //   1.Check if the user exists:
  const userData = await pool.query(
    `    SELECT * from users where email = $1`,
    [email],
  );

  if (userData.rows.length === 0) {
    throw new Error("Invalid Credentials");
  }
  const user = userData.rows[0];

  const matchPassWord = await bcrypt.compare(password, user.password);
  if (!matchPassWord) {
    throw new Error("Password does not match");
  }
  delete user.password;
  return user;
};

export const authService = {
  registerUserService,
  loginUserService,
};
