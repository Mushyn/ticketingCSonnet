# Système de Gestion de Tickets

Application de gestion de tickets développée avec Next.js, TypeScript et Tailwind CSS.

## Prérequis

- Node.js (version 16.x ou supérieure)
- npm ou yarn

## Installation

1. Cloner le projet :

```bash
git clone https://github.com/Mushyn/ticketingCSonnet.git
cd ticket-system
```

2. Installer les dépendances :

```bash
npm install
# ou
yarn install
```

3. Démarrer le serveur de développement :

```bash
npm run dev
# ou
yarn dev
```

L'application sera accessible à l'adresse : [http://localhost:3000](http://localhost:3000)

## Identifiants de test

- Email : test@test.com
- Mot de passe : password

## Fonctionnalités

- 🔐 Authentification (connexion/inscription)
- 🎫 Création de tickets
- 📋 Liste des tickets
- 🔄 Mise à jour du statut des tickets
- 🔔 Notifications en temps réel
- 🌗 Thème clair/sombre
- 📱 Interface responsive

## Structure du projet

```
ticket-system/
├── src/
│   ├── app/          # Pages de l'application
│   ├── components/   # Composants réutilisables
│   ├── contexts/     # Contextes React (auth, tickets, etc.)
│   └── types/        # Types TypeScript
├── public/           # Fichiers statiques
└── ...
```

## Technologies utilisées

- Next.js 14
- TypeScript
- Tailwind CSS
- React Context
- React Hooks

## Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Construit l'application pour la production
- `npm run start` : Démarre l'application en mode production
- `npm run lint` : Vérifie le code avec ESLint

## Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/ma-feature`)
3. Commit les changements (`git commit -m 'Ajout de ma feature'`)
4. Push la branche (`git push origin feature/ma-feature`)
5. Ouvrir une Pull Request
