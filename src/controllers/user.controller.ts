import { Request, Response } from 'express';
import prisma from '../lib/prisma';
import { createUserSchema } from '../schemas/user.schema';
import { sendMail } from '../lib/mailer';
import { generateQRToFile } from '../lib/qrcode'; // ✅ GIUSTA IMPORTAZIONE

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
    let user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      user = await prisma.user.create({ data: { name, email } });
    }

    // 🔁 Crea QR file univoco
    const qrData = `ID:${user.id}, Nome:${user.name}, Email:${user.email}`;
    const filename = `user-${user.id}.png`;
    const qrPath = await generateQRToFile(qrData, filename);
    const fullUrl = `${req.protocol}://${req.get('host')}${qrPath}`;

    // ✉️ HTML con QR code visibile
    const htmlContent = `
      <h2>Ciao ${user.name}!</h2>
      <p>Sei nella lista! Mostra il QR qui sotto all'ingresso:</p>
      <p><img src="${fullUrl}" alt="QR Code" /></p>
      <p>Se non lo vedi, clicca qui per aprirlo: <br /><a href="${fullUrl}">Visualizza QR</a></p>
      <p><i>In caso di problemi, mostra questa email.</i></p>
    `;

    await sendMail(user.email, '🎉 Sei in lista! Ecco il tuo QR code', htmlContent);

    return res.status(200).json({
      message: 'Utente registrato o già presente. Email inviata.',
      user,
    });
  } catch (error: any) {
    return res.status(500).json({
      error: 'Errore durante la gestione utente',
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
