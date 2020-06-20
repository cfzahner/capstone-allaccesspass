import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

export const client = new MongoClient(process.env.ATLAS_URI, {
  useUnifiedTopology: true,
}
);
async () => {
  await client.connect();
  process.on("SIGINT", async() => {
    client.close().then(() => {
      // shuts down (closes) port
      console.info("SIGINT signal received. Closing MongoClient")
      process.exit(0)
    })
  })
})();
