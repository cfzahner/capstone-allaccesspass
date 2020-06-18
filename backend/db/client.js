import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

export const client = new MongoClient(process.env.ATLAS_URI, {
  useUnifiedTopology: true,
});
