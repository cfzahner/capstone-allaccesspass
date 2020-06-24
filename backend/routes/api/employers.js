import { Router } from "express";
import { registerEmployer, loginUser } from "db";

const router = Router();

router.get("/test", (_, res) => {
  res.send("<p>employers router testing</p>");
});

router.get("/register", (_, res) => res.send("<p>Testig employers route</p>"));

router.post("/register", async ({ body }, res) =>
  res.json(await registerEmployer(body))
);

router.post("/user/login", async ({ body }, res) => {
  const results = await loginUser(body);
  if (!results) {
    res.status(403);
  }

  res.json(results);
});

export default router;
