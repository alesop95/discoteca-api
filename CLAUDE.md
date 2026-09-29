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

Norme caricate su richiesta, una riga per situazione con le parole con cui si presenta, così che il caricamento non dipenda dal ricordare che la norma esista.

- `git worktree list` mostra più di un albero, se ne crea o se ne rimuove uno, si deve decidere da dove leggere la memoria versionata: skill `alberi-di-lavoro`.
- Un recupero web fallisce con 403 o con una pagina di verifica anti-bot, la fonte sta su Reddit o su Discord, serve la trascrizione di un video, si sta per annotare una fonte non letta: skill `fonti-non-recuperabili`.
- Si scrive o si valuta una prova automatica, si chiude un difetto, una verifica manuale smentisce una suite verde, si sta per dichiarare completo un intervento il cui scopo era un effetto misurabile: skill `prove-che-misurano`.
- Si inizializza o si allinea il progetto, oppure cambia il modo in cui si prova e si rilascia, e va deciso come separare test e produzione: skill `separazione-ambienti`.
