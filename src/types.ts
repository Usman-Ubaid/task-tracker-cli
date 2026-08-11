export type Status = "todo" | "in-progress" | "done";

export interface Task {
  id: string;
  description: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
}