import { User } from "../models/member";
import { Reply } from "../models/replies";

export interface PostCommentResponse {
  data?: {
    comment: Reply;
    users: Record<string, User>;
  };
}
export interface EditCommentResponse {
  data?: {
    comment: Reply;
    users: Record<string, User>;
  };
}

export interface PostReplyResponse {
  data?: {
    comment: Reply;
    users: Record<string, User>;
  };
}
