import { User } from "../models/member";
import { Reply } from "../models/replies";

export interface GetCommentDetails {
  comment: Reply;
  users: Record<string, User>;
}
