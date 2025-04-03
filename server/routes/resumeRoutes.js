// routes/resumeRoutes.ts
import { Router } from "express";
import { db } from "../db.js";
import { resumes } from "../models/schema.js";
import { eq } from "drizzle-orm";

const router = Router();

router.get("/:userId", async (req, res) => {
  try {
    const userId = Number(req.params.userId);
    if (isNaN(userId)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    const userResumes = await db
      .select()
      .from(resumes)
      .where(eq(resumes.userId, userId));

    res.json(userResumes);
  } catch (error) {
    console.error("Error fetching resumes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
