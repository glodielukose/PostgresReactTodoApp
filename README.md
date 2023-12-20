# Todolist App

Une application Todolist utilisant React, Node.js, Express.js, et PostgreSQL.

## Prérequis

- Node.js
- npm
- PostgreSQL

## Installation

1. Clonez le projet : `git clone https://github.com/glodielukose/PostgresReactTodoApp.git`
2. Accédez au répertoire : `cd PostgresReactTodoApp`
3. Installez les dépendances : `npm build`
4. Créez une base de données PostgreSQL et configurez les paramètres dans le fichier `.env`.

## Configuration

Configurez votre fichier `.env` avec les informations de connexion à la base de données.

## Exécution

1. Lancez le serveur Node.js : `npm run server`
2. Démarrez l'application React : `npm run client`

## API Endpoints

### `GET /`

Récupère la liste des tâches.

### `POST /`

Ajoute une nouvelle tâche.

#### Paramètres de la requête

- `todo`: La description de la tâche.

#### Exemple de Requête

```bash
curl -X POST -H "Content-Type: application/json" -d '{"todo": "Nouvelle tâche"}' http://localhost:3001/
