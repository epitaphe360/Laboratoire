# Elitech Lab

SaaS laboratoire (demandes, devis, consultations, échantillons, rapports, factures).

Application Vite + React, routes `/lab/*`, fonctions Vercel `api/lab/*`, schéma SQL `lab`.

**Supabase Laboratoire** : `omlhfjfpyttfvntfqjnk` — pas le projet Sib.

## Démarrage

```bash
cp .env.example .env.local
# renseigner VITE_LAB_SUPABASE_URL et VITE_LAB_SUPABASE_ANON_KEY
npm i
npm run dev
```

Ouvrir http://localhost:5173/lab

## Variables d’environnement

Côté client (Vite, préfixe `VITE_`) :

| Variable | Rôle |
|---|---|
| `VITE_LAB_SUPABASE_URL` | `https://omlhfjfpyttfvntfqjnk.supabase.co` |
| `VITE_LAB_SUPABASE_ANON_KEY` | clé **anon** du projet Laboratoire |

Les mettre dans `.env.local` (gitignoré) et dans Vercel → Environment Variables (Production / Preview / Development).

Côté serveur uniquement (jamais `VITE_`, jamais dans `src/`) :

- `SUPABASE_SERVICE_ROLE_KEY` — workers, cron, seed
- `LAB_CRON_SECRET` ou `CRON_SECRET` — header `x-lab-cron-secret` sur `/api/lab/*`
- `RESEND_API_KEY` ou SMTP — flush e-mails
- `SUPABASE_ACCESS_TOKEN` — `npm run lab:seed` / restore-check

## Scripts

| Commande | Effet |
|---|---|
| `npm run build` | build Vite |
| `npm run test:unit` | Vitest |
| `npm run lab:seed` | comptes + dossiers démo (DEV) |
| `npm run lab:cron` | relances devis / délais |
| `npm run lab:flush-emails` | envoi file `lab.email_messages` |
| `npm run lab:backup` | inventaire backup |
| `npm run lab:vercel` | env Vercel + deploy |

## Migrations

`supabase/migrations/*lab*` à appliquer sur **Laboratoire** `omlhfjfpyttfvntfqjnk`. Seed : `docs/LAB_SEED.md`.

## Déploiement Vercel

```bash
npx vercel --prod --archive=tgz
```

Cron : `GET /api/lab/cron?flush=1` toutes les 30 min (`vercel.json`).

## Isolation

Ce dépôt n’est **pas** la plateforme salon Sib. Pas de pages accueil Sib, pas d’utilisateurs Sib.
