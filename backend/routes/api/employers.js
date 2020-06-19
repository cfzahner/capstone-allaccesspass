"api/employers/register";

// router.post("/authenticate")
// find $and username === req.body.username (and with password)

router.post("/register", async (req, res) => {
  // TODO:
  try {
    addEmployer(req.body).then(() => {
      res.send("<p>Added Employee</p>");
    });
  } catch (error) {}
});

// TODO: router.put("/saveCandidateId", Use the req.body.candidateId) - update
