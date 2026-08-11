import { readFile } from "./readFile.js";
import fs from "node:fs";
import type { Status } from "./types.js";

export const updateTask = (
  filePath: string,
  id: string,
  description?: string,
  status?: Status,
) => {
  const tasks = readFile(filePath);
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
    fs.writeFileSync(filePath, JSON.stringify(tasks));
  }
  return;
};
