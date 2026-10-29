const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'snippets.json');

app.use(express.json({ limit: '1mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// Helper to read/write snippets
const getSnippets = () => {
  if (!fs.existsSync(DATA_FILE)) return {};
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  } catch {
    return {};
  }
};

const saveSnippets = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// Save a code snippet to backend storage
app.post('/api/snippets', (req, res) => {
  const { title, html, css, js } = req.body;
  if (html === undefined || css === undefined || js === undefined) {
    return res.status(400).json({ error: 'Missing code fields' });
  }

  const snippets = getSnippets();
  const id = Math.random().toString(36).substring(2, 8);
  snippets[id] = {
    id,
    title: title || 'Untitled Snippet',
    html,
    css,
    js,
    createdAt: new Date().toISOString()
  };

  saveSnippets(snippets);
  res.status(201).json({ id, message: 'Snippet saved to cloud' });
});

// Load a code snippet by ID
app.get('/api/snippets/:id', (req, res) => {
  const snippets = getSnippets();
  const snippet = snippets[req.params.id];
  if (!snippet) {
    return res.status(404).json({ error: 'Snippet not found' });
  }
  res.json(snippet);
});

app.listen(PORT, () => {
  console.log(`Code Editor running at http://localhost:${PORT}`);
});