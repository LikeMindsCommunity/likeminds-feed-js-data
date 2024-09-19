import { User } from "../models/member";
import { Reply } from "../models/replies";

// TODO
export interface Post {
  comment: Reply;

  users: Record<string, User>;
}
