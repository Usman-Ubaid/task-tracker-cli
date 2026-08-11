import path from "node:path";
import { createFile } from "./checkAndCreateFile.js";
import { listTasks } from "./listTasks.js";
import { addTask } from "./addTask.js";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { deleteTask } from "./deleteTask.js";
import { updateTask } from "./updateTask.js";
import { isValidStatus } from "./utils.js";

async function main() {
  const filePath = path.join(import.meta.dirname, "../tasks.json");
  const rl = readline.createInterface({ input, output });
  createFile(filePath);

  const argument = process.argv[2];
  if (argument === "add") {
    const answer = await rl.question("What is the description? ");
    addTask(filePath, answer);
  } else if (argument === "delete") {
    const answer = await rl.question("Id of the task");
    deleteTask(filePath, answer);
  } else if (argument === "update") {
    const id = await rl.question("id of the task");
    const description = await rl.question(
      "Write Description or press enter to skip ",
    );
    const status = await rl.question("Write Status or press enter to skip ");
    if (status && !isValidStatus(status)) {
      console.log("Invalid status");
    } else {
      updateTask(
        filePath,
        id,
        description,
        isValidStatus(status) ? status : undefined,
      );
    }
  } else if (argument === "list") {
    const status = await rl.question("list by Status");
    if (isValidStatus(status)) {
      console.log(listTasks(filePath, status));
    } else if (!status) {
      console.log(listTasks(filePath));
    } else {
      console.log("Invalid status");
    }
  } else {
    console.log("Unknown Command");
  }
  rl.close();
}

main();
