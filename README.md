# Todolist App

Une application Todolist utilisant React, Node.js, Express.js, et PostgreSQL.

## Prérequis

- Node.js
- npm
- PostgreSQL

## Installation

1. Clonez le projet : `git clone https://github.com/votre-utilisateur/todolist-app.git`
2. Accédez au répertoire : `cd todolist-app`
3. Installez les dépendances : `npm install`
4. Créez une base de données PostgreSQL et configurez les paramètres dans le fichier `.env`.

## Configuration

Configurez votre fichier `.env` avec les informations de connexion à la base de données.

## Exécution

1. Lancez le serveur Node.js : `npm run start-server`
2. Démarrez l'application React : `npm run start-client`

## API Endpoints

### `GET /api/tasks`

Récupère la liste des tâches.

### `POST /api/tasks`

Ajoute une nouvelle tâche.

#### Paramètres de la requête

- `task`: La description de la tâche.

#### Exemple de Requête

```bash
curl -X POST -H "Content-Type: application/json" -d '{"task": "Nouvelle tâche"}' http://localhost:3001/api/tasks
