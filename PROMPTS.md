# Journal des Prompts de Développement

Ce document répertorie la séquence des prompts utilisés pour construire l'application de gestion de tickets avec GitHub Copilot.

## Étape 1 : Initialisation du Projet

```
Je souhaite créer un outil de ticketing en technologie Next JS typescript et Tailwind
```

## Étape 2 : Ajout de l'Authentification

```
Oui, j'aimerais que tu ajoutes la fonctionnalité de login à l'outil de ticketing.
```

## Étape 3 : Correction des erreurs et Configuration

```
Il manque le dossier public
```

```
npm ERR! Missing script: "dev"
```

```
Error: It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin
```

## Étape 4 : Debugging des Fonctionnalités

```
Quand je clique sur nouveau ticket, rien ne se passe, il en va de même sur le bouton déconnexion quand je clique dessus, je ne me déconnecte pas.
```

```
La modale s'est bien affichée et j'ai donc créé un ticket quand j'ai fait créer le bouton créer. Ça a fermé la modale, mais je n'ai pas vu apparaître le ticket dans un tableau
```

## Étape 5 : Amélioration de l'Interface

```
Peux tu automatiquement associer un numéro de ticket s'il te plaît ?
```

```
Est il possible de faire en sorte que le petit message qui confirme la création du ticket soit plutôt affiché en bas à à droite ?
```

```
La Snack bar vert, qui confirme la création du ticket, doit s'afficher en bas à droite de l'écran et disparaître avec un glisser vers le bas.
```

## Étape 6 : Optimisation du Layout

```
Il faut que le la page soit plein écran pour que le comportement de l'application soit correct
```

```
On ne voit plus apparaître la petite modale ad notification
```

```
Il y a toujours du rouge
```

## Étape 7 : Documentation

```
Peux tu ajouter un fichier readme Pour l'installation
```

## Conseils pour l'Utilisation des Prompts

1. Commencez par une vision claire du projet
2. Décrivez précisément les problèmes rencontrés
3. Fournissez des détails sur les erreurs
4. Demandez des améliorations spécifiques
5. Validez chaque fonctionnalité avant de passer à la suivante

## Notes Importantes

- Les prompts doivent être clairs et concis
- Il est préférable de traiter un problème à la fois
- N'hésitez pas à demander des clarifications
- Testez chaque modification avant de continuer

## Ordre Recommandé pour de Futurs Projets

1. Structure de base et configuration
2. Authentification
3. Fonctionnalités principales
4. Interface utilisateur
5. Notifications et feedback
6. Optimisations et corrections
7. Documentation
