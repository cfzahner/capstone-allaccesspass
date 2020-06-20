import { client } from "./client";

export const getAllCandidates = async () => {
  try {
    const cursor = await client.db("candidates").collection("data");
    const results = await cursor.toArray();
    await cursor.close();
    return results;
  } catch (err) {
    throw new Error(err);
  }
};
