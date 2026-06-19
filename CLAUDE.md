# discoteca-api

> Istruzioni di progetto, versionate. Indice dei satelliti e procedura di ripresa. Le preferenze personali vivono in `CLAUDE.local.md` (ignorato).

## Cos'e questo progetto

API in TypeScript con Prisma (schema e migrazioni in `prisma/`) e un mini frontend Vite + React + TypeScript (sorgenti in `src/`), come da ultimo commit di riferimento. Il dettaglio funzionale va completato leggendo i sorgenti e con la skill `onboard`.

## Igiene del repository e dati sensibili

La cartella `node_modules` era stata committata per errore e non era gitignored: ora `node_modules/`, `dist/` e `build/` sono nel `.gitignore`. Per smettere di tracciare `node_modules` mantenendo i file su disco si esegue `git rm -r --cached node_modules` e poi si committa la rimozione. Le eventuali credenziali vivono in `.env` (gitignored), mai versionate.

## Sviluppo e identita

git locale, identita `alesop95` / `alessio.sopranzi.95@gmail.com` impostata ora perche mancava del tutto, alias SSH `github-personal`, remoto gia presente `github-personal:alesop95/discoteca-api.git`. Commit e push restano manuali.

## Standard

Allineato in modo additivo a `.claude/PROJECT-SYSTEM.md`: regole, engine skills (`sync-context`, `git-sync`, `repo-status`, `onboard`), catalogo `.claude/templates/PACKAGES.md`, schede `context/` scaffold da popolare. Il pacchetto `code-context` (MCP) e disponibile per mappare l'API.
