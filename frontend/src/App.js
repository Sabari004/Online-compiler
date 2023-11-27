import { useState } from "react";
import "./App.css";
// import axios from "axios";
import axios from "axios";
function App() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const handleSubmit = async () => {
    const payload = {
      language: "java",
      code: code,
    };
    try {
      const { data } = await axios.post("http://localhost:5000/run", payload);
      setOutput(data.output);
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
    // console.log(output);
  };
  return (
    <div className="App">
      <h1>Online Code Compiler</h1>
      <textarea
        rows="20"
        cols="75"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      ></textarea>
      <br></br>
      <button onClick={handleSubmit}>Submit</button>
      <p style={{ padding: "50px" }}>{output}</p>
    </div>
  );
}

export default App;
