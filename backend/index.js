const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const { generateFile } = require("./generateFile");
const { executeJava } = require("./executeJava");
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  return res.json({ hello: "world" });
});
app.post("/run", async (req, res) => {
  const { language = "cpp", code } = req.body;
  if (code == undefined) {
    return res.status(400).json({ success: false, error: "Empty code body" });
  }
  try {
    const filepath = await generateFile(language, code);
    const output = await executeJava(filepath);
    return res.json({ filepath, output });
  } catch (err) {
    res.status(500).json({ err });
  }
  //need to generate a cpp file with content from the request
  //we need to run the file and sent the response
});
app.listen(5000, () => {
  console.log("Listening on port 5000!");
});
