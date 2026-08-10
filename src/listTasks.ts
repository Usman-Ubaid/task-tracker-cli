import fs from "node:fs";
import type { Task } from "./types.js";

export const listTasks = (filePath: string): Task[] => {
  return JSON.parse(fs.readFileSync(filePath, "utf8"))
};
