import cors from "cors";
import express from "express";
import auth from "./routes/api/auth";
import candidates from "./routes/api/candidates";
import employers from "./routes/api/employers";

const app = express();
const PORT = 1000;

app.get("/", (_, res) => res.send("<p>Howdy</p>"));

app.use(cors());
app.use(express.json());

app.use("/api/candidates", candidates);

app.use("/api/auth", auth);

app.use("/api/employers", employers);

app.listen(PORT, () => {
  console.log(`run a server on port: ${PORT}`);
});
