import { readFile } from "./readFile.js";
import fs from "node:fs";

export const deleteTask = (filePath: string, id: string) => {
  const tasks = readFile(filePath);
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    console.log("No task found with that id");
    return;
  }
  tasks.splice(taskIndex, 1);

  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
};
