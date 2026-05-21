import type { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.createUserCreateService(req.body);
    res.status(201).json({
      message: "User created successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      error: error,
    });
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};
const getSingleUser = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};

const updateUser = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};

const deleteUser = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};

export const userController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
