import path from 'node:path';
import { createFile } from './checkAndCreateFile.js';
import { listTasks } from './listTasks.js';
import { addTask } from './addTask.js';

const filePath = path.join((import.meta.dirname), "../tasks.json");

createFile(filePath);

console.log(listTasks(filePath));

addTask(filePath, "Sample task");