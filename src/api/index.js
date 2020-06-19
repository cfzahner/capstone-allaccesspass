export const getAllCandidates = async () => {
  const resp = await fetch("http://localhost:1000/api/candidates/candidates");
  return resp.json();
};
