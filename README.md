# Health Assistant AI Chatbot
# 🤖 Health Assistant AI Chatbot (Angular)

A smart AI-powered chatbot built using Angular and Gemini AI REST API to provide users with health-related information, suggestions, and general medical guidance in real-time.

---

## 🔧 Tech Stack

- ⚙️ **Framework**: Angular 19.2.3 Standalone=False
- 🌐 **API**: Google Gemini AI REST API
- 💬 **Language**: TypeScript
- 💅 **UI**: HTML, CSS
- 📡 **HTTP**: Angular HttpClient (REST)
- 🔒 **Security**: Environment file for hiding API key

---

## 📋 Features

- Real-time chat interface 💬
- Health-related question answering 🧠
- Gemini AI-powered responses 🤖
- Clean and responsive UI 🎨
- Secure API handling 🔐

---

## 🛠️ Setup Instructions

### 1. Clone the Repository


**[git clone https://github.com/yourusername/health-assistant-chatbot.git](https://github.com/GETRISHU/Health-Assist-AI-Chatbot.git)
cd health-assistant-chatbot
2. Install Dependencies


npm install
3. Add Your Gemini API Key
Create or update the environment.ts file in src/environments/:


export const environment = {
  production: false,
  GEMINI_API_KEY: 'your-gemini-api-key-here'
};
⚠️ Note: Never push your API key to GitHub. Make sure it's listed in .gitignore.

4. Run the Angular Development Server

ng serve
Visit: http://localhost:4200

📡 API Integration (Gemini AI)
Using HttpClient to make POST requests to Gemini REST API:

this.http.post(
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + this.apiKey,
  body,
  { headers }
)



#📸 Screenshots
![Screenshot 2025-05-09 113837](https://github.com/user-attachments/assets/a1ccef69-561a-45ab-85b6-5fd3735cb0c1)




🧠 Future Enhancements
Add voice support 🎙️

Save chat history 📚

Multi-language support 🌍

More advanced symptom checker 🩺

📜 License
**MIT License © Rishi Ranjan Kumar**
**










