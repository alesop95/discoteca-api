// src/app.ts
import express from 'express';
import userRoutes from './routes/user.routes';
import path from 'path';

const app = express();
app.use(express.json());

// Rotte utenti API
app.use('/api', userRoutes);

app.get('/', (_req, res) => {
  res.send('Ciao dal server Express!');
});

// ✅ Serve la cartella public/qrs in modo statico
app.use('/qrs', express.static(path.join(__dirname, '../public/qrs')));

export default app;


