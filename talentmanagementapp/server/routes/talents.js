import express from "express";
import { getTalents, createTalents } from "../controllers/talents.js";

const router = express.Router();

// http://localhost:5000/talents
router.get("/", getTalents);

// http://localhost:5000/api/talents/create
router.post("/create", createTalents);

export default router;
