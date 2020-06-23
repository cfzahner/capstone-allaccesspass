import { Router } from "express";

import { registerEmployer } from "../../db";

const router = Router();

router.get("/test", (_, res) => {
  res.send("<p>employers router testing</p>");
});

router.get("/register", (_, res) => res.send("<p>Testig employers route</p>"));

// TODO: Wrap try-catch
router.post("/register", async ({ body }, res) =>
  res.json(await registerEmployer(body))
);

// TODO: router.put("/saveCandidateId", Use the req.body.candidateId) - update
export default router;
