# CodePulse — Online Code Editor with Live Preview

An interactive browser-based IDE for HTML, CSS, and JavaScript built for the Elevate Labs Web Development Internship (Project #13).

## Features Implemented
- **Monaco Editor Integration:** Multi-tab editing (`index.html`, `style.css`, `script.js`) with syntax highlighting and auto-layout.
- **Sandboxed Live Preview:** Real-time rendering inside an isolated `iframe` with debounced auto-execution.
- **Integrated Console Output:** Captures `console.log` and runtime errors directly inside the workspace UI.
- **Multiple Layout Views:** Switch dynamically between **Side-by-Side**, **Stacked**, and **Full Preview** modes.
- **Starter Templates & Code Sharing:** Includes 3 pre-built templates, instant Base64 URL sharing, single-file `.html` export, local persistence (`localStorage`), and a Node.js/Express REST endpoint (`/api/snippets`) for cloud snippet sharing.

## Tech Stack
- **Frontend:** HTML5, Tailwind CSS, JavaScript (ES6+), Microsoft Monaco Editor
- **Backend:** Node.js, Express.js

## Run Locally
```bash
npm install
npm start