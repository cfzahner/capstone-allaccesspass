import { client } from "./client";

export const getAllCandidates = async () => {
  try {
    // TODO{courtney.zahner}: https://www.w3schools.com/nodejs/nodejs_mongodb_find.asp
    const cursor = await client
      .db("candidates")
      .collection("candidates")
      .find();
    const results = await cursor.toArray();
    await cursor.close();
    return results;
  } catch (err) {
    throw new Error(err);
  }
};

export const registerEmployer = async (newEmployer) => {
  try {
    return await client
      .db("candidates")
      .collection("candidates")
      .insertOne(newEmployer);
  } catch (err) {
    throw new Error(err);
  }
};
