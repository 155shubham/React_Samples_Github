import express from "express";
import {
  getProjects,
  updateProject,
  insertProject,
} from "../controllers/projects.js";

const router = express.Router();

// http://localhost:5000/projects
router.get("/", getProjects);

// http://localhost:5000/api/projects/update
router.post("/update", updateProject);

// http://localhost:5000/api/projects/insert
router.post("/insert", insertProject);

export default router;
