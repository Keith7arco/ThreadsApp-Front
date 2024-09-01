import { User } from "./user.interface";

export interface Comment{
  _id: string;
  text:string;
  user: User;
  parent: Comment | null;
}