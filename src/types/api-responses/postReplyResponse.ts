import { User } from "../models/member";
import { Reply } from "../models/replies";

interface Users {
  [key: string]: User;
}

export interface Post {
  comment: Reply;

  users: Users;
}
