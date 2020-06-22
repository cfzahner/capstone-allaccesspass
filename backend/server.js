import cors from "cors";
import express from "express";
import candidates from "./routes/api/candidates";

const app = express();
const PORT = 1000;

app.get("/", (_, res) => res.send("<p>Howdy</p>"));

app.use("/api/candidates", candidates);

app.use(
  cors({
    origin: true,
  })
);

app.listen(PORT, () => {
  console.log(`run a server on port: ${PORT}`);
});
