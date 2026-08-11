export const STATUSES = ['todo', 'in-progress', 'done'] as const;

export type Status = typeof STATUSES[number]

export interface Task {
  id: string;
  description: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
}