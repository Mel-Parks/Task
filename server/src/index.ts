import express from 'express';
import cors from 'cors';
import { prisma } from './prisma';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Route de test
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend OK ✅' });
});

// Démarrage
app.listen(PORT, () => {
  console.log(`➜ Server running on http://localhost:${PORT}`);
});
