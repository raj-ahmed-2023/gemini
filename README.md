# Gemini Clown 🤡

**A Satirical Web Application Critiquing AI Censorship**

## Overview

Gemini Clown is a web application featuring a custom chatbot persona designed as a satirical commentary on perceived excessive censorship and safety restrictions within Google's Gemini AI models. It mimics the visual style of the Gemini Advanced interface but replaces the standard AI responses with humorous, pre-written paragraphs that highlight themes of avoidance, corporate jargon, intellectual neutering, and the perceived absurdity of overly strict AI safety protocols.

The goal of this project is not to create a functional assistant, but to use humor and parody to critique and draw attention to the user experience resulting from heavy content filtering and restrictive programming in modern large language models.

## Motivation

This project was born out of observations regarding the interaction patterns and limitations encountered when using AI assistants like Google Gemini. Specifically, it aims to satirize the often frustrating or comical experience of an AI refusing to engage with certain topics, providing overly sanitized responses, or appearing to prioritize corporate safety concerns over genuine helpfulness or intellectual engagement. "Gemini Clown" exaggerates these traits to a humorous extreme for commentary.

## Features

* **Parody Interface:** A web UI styled similarly to the Gemini Advanced interface (dark theme, sidebar, chat layout).
* **"Gemini Clown" Persona:** A unique AI persona characterized by its sarcastic awareness of its own limitations and censorship.
* **Satirical Responses:** Instead of generating answers, the application serves randomized, pre-written responses that embody the satirical themes.
* **Simple Logic:** Relies on a straightforward mechanism to deliver its commentary effectively.

## How it Works

The core logic is intentionally simple. Instead of complex natural language processing or generation, Gemini Clown operates by:

1.  Maintaining a large array (`responses`) of pre-written satirical paragraphs in TypeScript.
2.  Utilizing a function (`getRandomResponse`) to randomly select one of these paragraphs whenever the user submits input.
3.  Displaying the chosen random response in the chat interface.

This approach ensures that every interaction reinforces the satirical message, regardless of the user's specific query. The variety comes from the diverse set of pre-written responses covering different angles of the critique.


**View Live**
![View Live](https://gemini-satire.vercel.app) 


## Getting Started (Example)

*(Add instructions if you want others to run it locally)*

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/gemini-clown.git](https://github.com/your-username/gemini-clown.git) # Replace with your repo URL
    cd gemini-clown
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or yarn install
    # or pnpm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    # or yarn dev
    # or pnpm dev
    ```
4.  Open your browser to `http://localhost:xxxx` *(Check the port specified by your dev server)*

## Disclaimer

This project is a work of satire and parody. It is **not** affiliated with, endorsed by, or representative of Google or the official Gemini AI. The "Gemini Clown" persona and its responses are fictional creations intended for commentary and humor, reflecting the creator's perspective on AI censorship and safety features. Use for entertainment and critical reflection purposes only.