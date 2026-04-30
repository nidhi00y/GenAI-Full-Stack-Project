GenAI Resume & Interview Intelligence Platform

An AI-powered platform designed to help candidates prepare smarter for job applications by analyzing resumes, generating ATS scores, and creating personalized interview preparation plans.

Overview:
This project leverages Generative AI to bridge the gap between a candidate’s profile and job requirements. By combining resume data, self-description, and job descriptions, the system provides actionable insights and tailored preparation resources.

✨ Features
📊 ATS Score Analysis
Evaluates resume alignment with the provided Job Description (JD)
Highlights missing keywords and optimization suggestions
🧠 AI-Generated Interview Questions
Technical Questions based on the role and required skills
Behavioral Questions tailored to the candidate’s profile
🛠️ Skills Gap Identification
Extracts and compares:
Candidate skills
Required skills from JD
Provides recommendations for improvement
🗓️ Personalized Preparation Plan
Day-wise structured roadmap
Focused learning strategy for interviews
📄 Smart Resume Generator
Generates an optimized resume aligned with:
Job Description
Required skills
Improves ATS compatibility
🔐 Authentication System
Secure user authentication using JWT
🏗️ Tech Stack
Backend
Node.js
Express.js
Database
MongoDB
Authentication
JSON Web Tokens (JWT)
AI Integration
Gemini API (for content generation & analysis)

⚙️ Installation & Setup
1. Clone the Repository
git clone https://github.com/nidhi00y/GenAI-Full-Stack-Project
cd genai-resume-platform
2. Install Dependencies
npm install
3. Setup Environment Variables

Create a .env file:
MONGO_URI=your_mongodb_connection
JWT_ACCESS_SECRET=your_secret
GEMINI_API_KEY=your_api_key


4. Run the Server
npm start

🧠 How It Works
User signs up / logs in
Uploads:
Resume
Self-description
Job Description
Backend processes data
Gemini model generates:
ATS score
Questions
Skills
Plan
Resume
Results are displayed to the user
