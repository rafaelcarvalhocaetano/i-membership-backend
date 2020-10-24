import { User } from "./User";

export interface IRequest {
  next: Page;
  previous: Page;
  peyloader: User[]
}
interface Page {
  page: number;
  limit: number;
}