import { Router } from "express";

import { registerUser } from "../../db";

const router = Router();

// TODO: Wrap try-catch
router.post("/register", async ({ body }, res) =>
  res.json(await registerUser(body))
);

// TODO: router.put("/saveCandidateId", Use the req.body.candidateId) - update
export default router;
