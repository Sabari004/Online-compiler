const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { generateFile } = require("./generateFile");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.json({ hello: "world" });
});
app.post("/run", async (req, res) => {
  const { language = "cpp", code } = req.body;
  if (code == undefined) {
    return res.status(400).json({ success: false, error: "Empty code body" });
  }
  const filepath = await generateFile(language, code);
  //need to generate a cpp file with content from the request
  //we need to run the file and sent the response
  return res.json({ filepath });
});
app.listen(5000, () => {
  console.log("Listening on port 5000!");
});
