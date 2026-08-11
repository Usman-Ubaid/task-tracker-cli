import { readFile } from "./readFile.js";
import type { Status, Task } from "./types.js";

export const listTasks = (filePath: string, status?: Status): Task[] => {
  if (status) {
    const tasks = readFile(filePath);
    const filteredTasks = tasks.filter((task) => task.status === status);
    return filteredTasks;
  } else {
    return readFile(filePath);
  }
};
