export const getAllCandidates = async () => {
  const resp = await fetch("http://localhost:1000/api/candidates/candidates");
  return resp.json();
};
export const authenticateUser = async (formData) => {
  const resp = await fetch("http://localhost:1000/api/candidates/candidates", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   },
    //   body: JSON.stringify(formData),
  });
  console.log(resp);
};
