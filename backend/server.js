import cors from "cors";
import express from "express";

import candidates from "./routes/api/candidates";

const app = express();
const PORT = 1000;

app.get("/", (_, res) => res.send("<p>Howdy</p>"));

app.use(cors());
app.use(express.json());

app.use("/api/candidates", candidates);

app.post("/api/candidates", function (req, res) {
  console.log(req);
});

app.listen(PORT, () => {
  console.log(`run a server on port: ${PORT}`);
});
