// src/app.ts
import express from 'express';
import userRoutes from './routes/user.routes';

const app = express();

app.use(express.json());

// Rotte utenti
app.use('/api', userRoutes);

app.get('/', (_req, res) => {
  res.send('Ciao dal server Express!');
});

export default app;
