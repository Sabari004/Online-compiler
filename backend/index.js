const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.get("/", (req, res) => {
  return res.json({ hello: "world" });
});
app.post("/run", (req, res) => {
  const { language = "cpp", code } = req.body;
  if (code == undefined) {
    return res.status(400).json({ success: false, error: "Empty code body" });
  }
  //need to generate a cpp file with content from the request
  //we need to run the file and sent the response
  return res.json({ language, code });
});
app.listen(5000, () => {
  console.log("Listening on port 5000!");
});
