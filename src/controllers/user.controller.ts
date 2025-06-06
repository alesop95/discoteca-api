import { Request, Response } from 'express';
import prisma from '../lib/prisma';
import { createUserSchema } from '../schemas/user.schema';
import { sendMail } from '../lib/mailer';

export const createUser = async (req: Request, res: Response) => {
  const parseResult = createUserSchema.safeParse(req.body);

  if (!parseResult.success) {
    return res.status(400).json({
      error: 'Dati non validi',
      details: parseResult.error.errors,
    });
  }

  const { name, email } = parseResult.data;

  try {
    const newUser = await prisma.user.create({
      data: { name, email },
    });

    // Invia email di benvenuto
    await sendMail(email, 'Benvenuto alla serata!', `
      <h1>Ciao ${name}!</h1>
      <p>Sei stato aggiunto alla lista. Mostra questa email all'ingresso!</p>
    `);

    return res.status(201).json(newUser);
  } catch (error: any) {
    return res.status(500).json({
      error: 'Errore durante la creazione utente',
      details: error.message,
    });
  }
};

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    return res.json(users);
  } catch (error: any) {
    return res.status(500).json({
      error: 'Errore durante il recupero degli utenti',
      details: error.message,
    });
  }
};