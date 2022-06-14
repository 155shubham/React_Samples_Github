import express from "express";
import { getUser, getUsers, createUser } from "../controllers/user.js";

const router = express.Router();

// http://localhost:5000/user
router.get("/", getUsers);

// http://localhost:5000/users
router.post("/user", getUser);

// http://localhost:5000/api/user/create
router.post("/create", createUser);

export default router;
