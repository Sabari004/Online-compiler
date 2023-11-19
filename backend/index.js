const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.get("/", (req, res) => {
  //   console.log("jfjlfajl");
  // console.log(req.body.name);
  return res.json({ hello: "world" });
});
app.post("/run", (req, res) => {
  // console.log(JSON.parse(}));
  const { language = "cpp", code } = req.body;
  if (code == undefined) {
    return res.status(400).json({ success: false, error: "Empty code body" });
  }
  return res.json({ language, code });
});
app.listen(5000, () => {
  console.log("Listening on port 5000!");
});
