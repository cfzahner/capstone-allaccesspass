import { MongoClient } from "mongodb";
//import dotenv from "dotenv";

//dotenv.config();
require("dotenv").config();
console.log(process.env.ATLAS_URI);
export const client = new MongoClient(process.env.ATLAS_URI, {
  useUnifiedTopology: true,
});

// eslint-disable-next-line no-unused-expressions
async () => {
  await client.connect();
  process.on("SIGINT", async () => {
    client.close().then(() => {
      // shuts down (closes) port
      console.info("SIGINT signal received. Closing MongoClient");
      process.exit(0);
    });
  });
};
