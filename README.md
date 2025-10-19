📚 StudyGenie: AI-Powered Study Assistant

StudyGenie is a full-stack web application designed to assist students in their learning process using OpenAI's GPT-3.5-turbo model.
It allows users to paste study text and instantly generate summaries, quizzes, or flashcards — making studying smarter and faster. ✨

🚀 Key Features

🧠 Text Summarization
Converts lengthy study material into concise and easy-to-understand notes.

📝 Quiz Generation
Automatically creates 5 multiple-choice questions (MCQs) with 4 options each, including correct answers.

💡 Flashcards
Extracts 10 key terms with short, clear definitions to enhance memory retention.

⚙️ Error Handling
Handles API rate limits, invalid inputs, and other potential issues gracefully.

🧩 Tech Stack
Layer	Technology Used
Frontend	React.js, Axios, CSS
Backend	Node.js, Express.js
AI Integration	OpenAI API (GPT-3.5-turbo)
Other Tools	CORS, dotenv
⚙️ Getting Started

Follow the steps below to set up StudyGenie on your local machine:

🔧 Backend Setup

Navigate to the backend directory:

cd server


Install dependencies:

npm install


Create a .env file and add your OpenAI API key:

OPENAI_API_KEY=your_api_key_here


Start the backend server:

npm start


The backend runs on port 5000 by default.

💻 Frontend Setup

Navigate to the frontend directory:

cd studygenie-frontend


Install dependencies:

npm install


Run the frontend:

npm start


This will open the app at http://localhost:3000

🧠 Usage

Paste your study text into the input box.

Choose an action:

✂️ Summarize → Get concise notes.

🧩 Quiz → Generate multiple-choice questions.

🪄 Flashcards → Learn with quick definitions.

Enjoy personalized, AI-powered study support!

💬 Example Use Cases

Summarizing long research notes

Generating self-assessment quizzes

Creating quick flashcards for exam revision

🌟 Why StudyGenie?

StudyGenie helps students save time, boost comprehension, and retain information effectively — all powered by the latest AI technology.

🛡️ License

This project is open-source and available under the MIT License.

Developed with ❤️ using React, Node.js, and OpenAI
