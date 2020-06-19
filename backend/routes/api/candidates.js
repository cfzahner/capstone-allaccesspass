import { Router } from "express";
import { getAllCandidates } from "db";

const router = Router();

router.get("/candidates", (_, res) => {
  res.send("<p>candidates router testing</p>");
});

router.get("/candidates", async (_, res) => {
  res.json(await getAllCandidates());
});

export default router;
