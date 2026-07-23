# Portfolio — Yoh Bi Nene Regis

Site statique (HTML/CSS/JS, aucune dépendance) prêt à héberger sur **GitHub Pages**.

## Structure

```
portfolio/
├── index.html        → structure de la page (hero, à propos, pistes, expérience, projets, contact)
├── css/style.css      → design (couleurs par piste : orange = backend, violet = IA, sarcelle = data)
├── js/script.js        → contenu des projets + tes liens (LinkedIn, CV) + filtres
└── assets/            → mets ici tes images/captures d'écran si besoin
```

## Ce que tu dois compléter

Tout se fait dans **`js/script.js`**, en haut du fichier :

1. **`globalLinks`** → colle ton lien LinkedIn et le lien vers ton CV (PDF hébergé sur GitHub, Drive, etc.).
2. **`projects`** → pour chaque projet, remplis le champ `links` avec ce que tu as :
   - `github` → lien vers le dépôt
   - `demo` → lien vers le site/API déployé (Railway, Vercel, Netlify…)
   - `swagger` → lien vers la documentation Swagger/OpenAPI
   - `video` → lien vers ta vidéo de démonstration (YouTube, Loom…)
   - `powerbi` → lien vers ton rapport Power BI publié
   - `n8n` → lien vers ton workflow n8n (capture, export JSON hébergé, ou description)
   - `files` → lien vers un fichier (Power BI `.pbix`, dataset, export…) hébergé sur Google Drive/GitHub

   Tant qu'un lien est vide (`""`), le bouton s'affiche automatiquement en pointillés avec la mention **« à ajouter »** — personne ne clique dans le vide, et tu vois d'un coup d'œil ce qu'il te reste à faire.

3. Tu peux aussi ajouter de nouveaux projets en copiant un bloc `{ track, status, title, description, tech, links }` dans le tableau `projects`.

## Ajouter ta photo

En haut de la première page, un cercle avec un anneau tricolore (orange/violet/sarcelle) t'attend, au-dessus de ton nom.

1. Choisis une photo carrée (portrait professionnel, ~400×400px minimum).
2. Renomme-la `photo.jpg` et place-la dans le dossier `assets/`.
3. Recharge la page : la photo remplace automatiquement les initiales "YR".

Tant qu'aucune photo n'est présente, un badge « photo à ajouter » s'affiche sous le cercle — tu sais donc toujours si elle manque.

## Héberger sur GitHub Pages (gratuit)

1. Crée un dépôt GitHub, par exemple `portfolio`.
2. Mets tout le contenu de ce dossier à la racine du dépôt (donc `index.html` doit être à la racine, pas dans un sous-dossier) :
   ```bash
   git init
   git add .
   git commit -m "Premier déploiement du portfolio"
   git branch -M main
   git remote add origin https://github.com/<ton-pseudo>/portfolio.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages → Branch: `main` / `root`** → Save.
4. Ton site sera disponible à `https://<ton-pseudo>.github.io/portfolio/` après une à deux minutes.

## Notes

- Pas de framework, pas de build : tu peux tout modifier directement dans un éditeur de texte.
- Le site est responsive (mobile/desktop) et respecte les préférences de réduction de mouvement.
- Les couleurs par piste (backend / IA / data) sont volontairement cohérentes entre les pastilles de filtre, les cartes projets et la timeline d'expérience, pour que le visiteur s'y retrouve visuellement en un coup d'œil.
