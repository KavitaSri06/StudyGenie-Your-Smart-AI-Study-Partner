import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("");

  const handleRequest = async (endpoint) => {
    if (!text.trim()) return alert("Please enter some text!");
    setLoading(true);
    setResult("");
    setType(endpoint);

    try {
      const res = await axios.post(`http://localhost:5000/api/${endpoint}`, { text });
      if (endpoint === "summarize") setResult(res.data.summary);
      if (endpoint === "quiz") setResult(res.data.quiz);
      if (endpoint === "flashcards") setResult(res.data.flashcards);
    } catch (err) {
      if (err.response && err.response.data) {
        setResult(`Error: ${err.response.data.error}`);
      } else {
        setResult("Something went wrong!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>🧠 StudyGenie</h1>
      <textarea
        placeholder="Paste your study text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className="buttons">
        <button onClick={() => handleRequest("summarize")}>Summarize</button>
        <button onClick={() => handleRequest("quiz")}>Quiz</button>
        <button onClick={() => handleRequest("flashcards")}>Flashcards</button>
      </div>
      {loading && <p>⏳ Generating...</p>}
      {result && (
        <div className={`result-card ${type}`}>
          <h2>{type} Result</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default App;
