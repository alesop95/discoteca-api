import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';

export const generateQRToFile = async (data: string, filename: string): Promise<string> => {
  const outputDir = path.join(__dirname, '../../public/qrs');

  // ✅ Crea la directory se non esiste
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const filePath = path.join(outputDir, filename);
  await QRCode.toFile(filePath, data);

  // 🔁 Ritorna il path accessibile via URL (quello usato nel browser/email)
  return `/qrs/${filename}`;
};
