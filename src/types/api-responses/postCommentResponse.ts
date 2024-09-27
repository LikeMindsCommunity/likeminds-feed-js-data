import { User } from "../models/member";
import { Reply } from "../models/replies";

export interface PostComment {
  comment: Reply;
  users: Record<string, User>;
}
export interface EditComment {
  comment: Reply;
  users: Record<string, User>;
}

export interface PostReply {
  comment: Reply;
  users: Record<string, User>;
}
