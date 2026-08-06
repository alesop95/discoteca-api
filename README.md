# discoteca-api

Un piccolo backend TypeScript per una lista ospiti in stile discoteca: chi si registra riceve via email un codice QR personale da mostrare all'ingresso. Il progetto nasce come prova di concetto personale per l'idea, non come sistema in produzione.

## Come funziona

Un unico endpoint POST accetta nome ed email, validati con Zod. Il controller cerca l'utente per email e, se non esiste, lo crea; genera poi un'immagine con codice QR che codifica id, nome ed email dell'utente (`src/lib/qrcode.ts`) e la invia all'ospite via email tramite Nodemailer (`src/lib/mailer.ts`), così che il QR possa essere scansionato all'ingresso. Un secondo endpoint elenca gli utenti registrati. Il modello dati (`prisma/schema.prisma`, SQLite) è volutamente minimale: un'unica tabella `User`, senza ruoli, eventi o gestione della capienza.

Esiste anche un frontend complementare in `frontend/` (Vite, React, TypeScript) che consiste in poco più di un form di registrazione (`RegisterForm.tsx`) che chiama l'endpoint POST.

## Stack tecnico

Backend: Express 5, TypeScript, Prisma su SQLite, libreria `qrcode` per la generazione dell'immagine, Nodemailer per l'invio email, Zod per la validazione dell'input. Frontend: Vite con React e TypeScript.

## Stato del progetto

È una prova di concetto funzionante, non un servizio consolidato: non ci sono test automatizzati, lo schema non versiona eventi o liste ospiti distinte al di là della tabella utenti piatta, e in passato la cartella `node_modules` era stata committata per errore ed è stata aggiunta al `.gitignore` solo di recente.
