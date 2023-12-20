# Todolist App

A Todolist application using React, Node.js, Express.js, and PostgreSQL.

## Prerequisites

- Node.js
- npm
- PostgreSQL

## Installation

1. Clone the project: `git clone https://github.com/glodielukose/PostgresReactTodoApp.git`
2. Navigate to the directory: `cd PostgresReactTodoApp`
3. Install dependencies: `npm install`
4. Create a PostgreSQL database and configure the settings in the `.env` file.

## Configuration

Configure your `.env` file with the database connection information.

## Execution

1. Start the Node.js server: `npm run server`
2. Launch the React application: `npm run client`

## API Endpoints

### `GET /`

Retrieve the list of tasks.

### `POST /`

Add a new task.

#### Request Parameters

- `todo`: The task description.

#### Request Example

```bash
curl -X POST -H "Content-Type: application/json" -d '{"todo": "New task"}' http://localhost:3001/
