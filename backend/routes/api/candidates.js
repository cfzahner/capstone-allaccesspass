import { Router } from "express";
import { getAllCandidates } from "../../db/index";

const router = Router();

router.get("/test", (_, res) => {
  res.send("<p>candidates router testing</p>");
});

router.get("/candidates", async (_, res) => {
  res.json(await getAllCandidates());
});

router.post("/register", (req, res) => {
  res.send(`<p></p>`);
});
router.post("/authentication");
export default router;

//router post to register user
//router.post that you got the response
//router.post authenticate and send hey it worked
//router.put wait for the saved search, send a response for saved search

//
//router.get("./users", async(req, res) => {
//  res.send(`<p>read user${req.body}</p>`)
//})
//
//router.post("/register", async(req,res)=> {
// res.send{`<p>Trying to register a ${req.body}</p>`}
//})
//
//router.post("/authenticate", async(req, res)=> {
//res.send(`<p>Trying to authenticate ${req,res)</p>`)
//})
//
//router.put("/saveSearch", async (req, res) => {
//  res.send(`<p>Trying to save user search${req.body}</p>`);
//});
//
