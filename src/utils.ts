import { STATUSES, type Status } from "./types.js";

export function isValidStatus(status: string): status is Status {
  return STATUSES.includes(status as Status);
}