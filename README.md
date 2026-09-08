# RoadBudget — landing page (Phase 0 : validation)

Landing page + formulaire de capture email. Pas encore de génération
automatique d'itinéraire (volontaire, voir l'analyse — on valide la demande
avant d'automatiser).

## Tester en local

Il faut Node.js installé (version 20 ou plus, à vérifier avec `node -v`).

```bash
cd roadbudget
npm install
npm run dev
```

Puis ouvrez http://localhost:3000 dans votre navigateur.

Le formulaire poste sur `/api/subscribe`, qui pour l'instant se contente
d'écrire l'email dans les logs du serveur (visible dans le terminal où tourne
`npm run dev`). C'est un choix volontaire tant qu'il n'y a pas de base de
données branchée — voir le `TODO` dans `app/api/subscribe/route.ts`.

## Déployer (Vercel — le plus simple, gratuit pour démarrer)

1. Créez un compte sur https://vercel.com (connexion via GitHub la plus simple)
2. Mettez ce dossier dans un dépôt GitHub :
   ```bash
   cd roadbudget
   git init
   git add .
   git commit -m "Landing page RoadBudget"
   git branch -M main
   git remote add origin <url-de-votre-repo-github>
   git push -u origin main
   ```
3. Sur vercel.com : "Add New Project" → importez ce dépôt → laissez les
   réglages par défaut (Vercel détecte Next.js automatiquement) → "Deploy"
4. Au bout de 1-2 minutes, vous avez une URL en `.vercel.app` fonctionnelle
5. Pour un nom de domaine perso : dans les réglages du projet Vercel →
   "Domains" → ajoutez votre domaine et suivez les instructions DNS

## Où voir les inscriptions à la waitlist

Pour l'instant : Vercel → votre projet → onglet "Logs" (les emails y
apparaissent tels qu'envoyés par `console.log`).

**Prochaine étape technique** (à ne faire que si le trafic le justifie) :
brancher Supabase pour stocker les emails dans une vraie table plutôt que
dans les logs. Dites-moi quand vous voulez cette étape.

## Modifier le contenu

Tout le texte modifiable (nom, accroche, itinéraire d'exemple) est centralisé
dans `lib/content.ts` — pas besoin de toucher au reste du code pour changer
le nom du produit, la destination d'exemple ou les montants.
