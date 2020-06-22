import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

export const client = new MongoClient(process.env.ATLAS_URI, {
  useUnifiedTopology: true,
});

(async () => {
  await client.connect();

  // 'CTRL + C' - "SIGINT"
  process.on("SIGINT", () => {
    client.close().then(() => {
      console.info("SIGINT signal received. Closing MongoClient.");
      // Intentionally shut down node server so we don't 'plug up ports'
      process.exit(0);
    });
  });
})();
