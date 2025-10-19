StudyGenie: AI-Powered Study Assistant

StudyGenie is a full-stack web application designed to assist students in their learning process using OpenAI's GPT-3.5-turbo model. Users can paste study text and generate summaries, quizzes, or flashcards to enhance comprehension and retention.

Key Features
Text Summarization: Converts lengthy study material into concise, clear notes.
Quiz Generation: Creates 5 multiple-choice questions with 4 options each, including correct answers.
Flashcards: Extracts 10 key terms with short definitions from the provided text.
Error Handling: Manages API rate limits and invalid inputs gracefully.
Tech Stack
Frontend: React (with Axios for API calls), CSS for styling.
Backend: Node.js, Express.js, OpenAI API integration.
Other: CORS for cross-origin requests, dotenv for environment variables.
Getting Started
Clone the repository.
Backend Setup:
Navigate to server/.
Run npm install.
Add your OpenAI API key to a .env file as OPENAI_API_KEY=your_key_here.
Run npm start (starts on port 5000).
Frontend Setup:
Navigate to studygenie-frontend/.
Run npm install.
Run npm start (opens on http://localhost:3000).
Paste study text in the app and select an action (Summarize, Quiz, or Flashcards).
This project is ideal for students looking to streamline their study routines with AI assistance.
