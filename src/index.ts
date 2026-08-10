import path from 'node:path';
import { createFile } from './checkAndCreateFile.js';
import { listTasks } from './listTasks.js';

const filePath = path.join((import.meta.dirname), "../tasks.json");

createFile(filePath);

listTasks(filePath);