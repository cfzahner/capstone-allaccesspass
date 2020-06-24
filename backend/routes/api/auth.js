import { Router } from "express";
import { getAuth } from "../../db/index";

const router = Router();
router.get("/login", async (_, res) => {
  res.json(await getAuth());
});

export default router;
