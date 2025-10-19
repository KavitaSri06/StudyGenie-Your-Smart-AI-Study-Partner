import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// Helper function to call OpenAI
async function callOpenAI(prompt) {
  return await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
}

// 🧾 Summarize Route
router.post("/summarize", async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });

  try {
    const response = await callOpenAI(
      `Summarize this study text into short, clear study notes:\n${text}`
    );
    res.json({ summary: response.data.choices[0].message.content });
  } catch (err) {
    if (err.response && err.response.status === 429) {
      res.status(429).json({ error: "Rate limit exceeded, try again in a minute" });
    } else {
      console.error("Error in summarize route:", err.message);
      res.status(500).json({ error: "Failed to generate summary" });
    }
  }
});

// 🧩 Quiz Route
router.post("/quiz", async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });

  try {
    const response = await callOpenAI(
      `Create 5 multiple-choice questions with 4 options each and provide the correct answer for this study material:\n${text}`
    );
    res.json({ quiz: response.data.choices[0].message.content });
  } catch (err) {
    if (err.response && err.response.status === 429) {
      res.status(429).json({ error: "Rate limit exceeded, try again in a minute" });
    } else {
      console.error("Error in quiz route:", err.message);
      res.status(500).json({ error: "Failed to generate quiz" });
    }
  }
});

// 💡 Flashcards Route
router.post("/flashcards", async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });

  try {
    const response = await callOpenAI(
      `Extract 10 key terms and their short definitions from this study text. Format it as "Term: Definition":\n${text}`
    );
    res.json({ flashcards: response.data.choices[0].message.content });
  } catch (err) {
    if (err.response && err.response.status === 429) {
      res.status(429).json({ error: "Rate limit exceeded, try again in a minute" });
    } else {
      console.error("Error in flashcards route:", err.message);
      res.status(500).json({ error: "Failed to generate flashcards" });
    }
  }
});

export default router;
