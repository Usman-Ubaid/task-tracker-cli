import { readFile } from "./readFile.js";
import fs from "node:fs";
import type { Status } from "./types.js";

export const updateTask = (
  pathFile: string,
  id: string,
  description?: string,
  status?: Status,
) => {
  const tasks = readFile(pathFile);
  const taskIndex = tasks.findIndex((task) => task.id === id);
  const task = tasks[taskIndex]

  if (task && (description || status)) {
    const updatedTask = {
      ...task,
      description: description ? description : task.description,
      status: status ? status : task.status,
      updatedAt: new Date().toISOString(),
    };
    tasks.splice(taskIndex, 1, updatedTask);
    fs.writeFileSync(pathFile, JSON.stringify(tasks));
  }
  return;
};
