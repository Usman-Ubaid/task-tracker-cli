import fs from "node:fs";
import crypto from "node:crypto";
import type { Task } from "./types.js";
import { readFile } from "./readFile.js";

export const addTask = (filePath: string, description: string): void => {
    
    if(!description || description.trim() === ""){
        console.log("Error: Task description cannot be empty.");
        return;
    }

    const tasks: Task[] = readFile(filePath);

    const newTask: Task = {
        id: crypto.randomUUID(),
        description: description,
        status: "todo",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }

    tasks.push(newTask);

    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}   