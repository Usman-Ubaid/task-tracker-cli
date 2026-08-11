Task Tracker CLI

A simple command-line task tracker built with TypeScript and Node.js. Tasks are stored in a local tasks.json file at the project root.

This project is based on the Task Tracker challenge from roadmap.sh.

Requirements
Node.js
npm
Setup
Clone the repo
Install dependencies:
   npm install
Build the project:
   npm run build

tasks.json will be created automatically at the project root the first time you run the app, if it doesn't already exist.

Usage

Run commands using:

node dist/index.js <command>

You'll be prompted for any additional details the command needs.

Commands
add — Add a new task
  node dist/index.js add

You'll be asked for a description.

list — List tasks
  node dist/index.js list

Press Enter to list all tasks, or type a status (todo, in-progress, done) to filter.

update — Update a task's description and/or status
  node dist/index.js update

You'll be asked for the task's id, then a new description and/or status. Press Enter on either prompt to leave that field unchanged.

delete — Delete a task
  node dist/index.js delete

You'll be asked for the task's id.

Development
npm run build — compile TypeScript (src/) to JavaScript (dist/)
npm run watch — recompile automatically on file changes
Task fields

Each task stored in tasks.json has the following shape:

ts
{
  id: string;
  description: string;
  status: "todo" | "in-progress" | "done";
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}