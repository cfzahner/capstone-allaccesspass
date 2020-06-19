export const getAllCandidates = async () => {
  const resp = await fetch(
    "https://randomuser.me/api/?results=100&gender=female"
  );
  return resp.json();
};
