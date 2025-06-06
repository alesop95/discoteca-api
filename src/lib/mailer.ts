import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  // assicurati di avere EMAIL_USER in .env
    pass: process.env.EMAIL_PASS,  // assicurati di avere EMAIL_PASS in .env
  },
});

export const sendMail = async (to: string, subject: string, html: string) => {
  try {
    const info = await transporter.sendMail({
      from: `"Discoteca" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,  // invio contenuto in HTML
    });

    console.log('📧 Email inviata: %s', info.messageId);
  } catch (error) {
    console.error('❌ Errore invio email:', error);
    throw error;
  }
};