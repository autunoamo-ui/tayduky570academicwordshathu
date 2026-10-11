import express from 'express';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client if environment API key is present
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

if (apiKey) {
  aiClient = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Server-side Gemini API proxy endpoint
app.post('/api/gemini/generate', async (req, res) => {
  const { prompt, systemInstruction, model = 'gemini-2.5-flash' } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Missing prompt in request body.' });
  }

  // Use environment key if available
  if (!apiKey || !aiClient) {
    return res.status(503).json({
      error: 'Server GEMINI_API_KEY is not configured. Please use client API key in settings.',
    });
  }

  try {
    const config: { systemInstruction?: string; temperature: number } = {
      temperature: 0.7,
    };
    if (systemInstruction) {
      config.systemInstruction = systemInstruction;
    }

    const response = await aiClient.models.generateContent({
      model: model || 'gemini-2.5-flash',
      contents: prompt,
      config,
    });

    const text = response.text || '';
    return res.json({ text, model });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('Server Gemini Error:', message);
    return res.status(500).json({ error: message });
  }
});

// Mount Vite middleware for dev server
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
