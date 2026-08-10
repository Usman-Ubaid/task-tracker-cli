type Status = "pending" | "in-progress" | "completed";

export interface Task {
  id: string;
  description: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
}