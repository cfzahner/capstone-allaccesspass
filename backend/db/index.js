import { client } from "./client";

export const getAllCandidates = async () => {
  try {
    await client.connect();
    const cursor = await client
      .db("candidates")
      .collection("candidates")
      .find();
    console.log("hello client", cursor);
    return await cursor.toArray();
  } catch (err) {
    throw new Error(err);
  } finally {
    await client.close();
  }
};
