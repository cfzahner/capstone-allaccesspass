import { Router } from "express";
import { getAllCandidates } from "../../db/index";

const router = Router();

router.get("/test", (_, res) => {
  res.send("<p>candidates router testing</p>");
});

router.get("/candidates", async (_, res) => {
  res.json(await getAllCandidates());
});

export default router;
