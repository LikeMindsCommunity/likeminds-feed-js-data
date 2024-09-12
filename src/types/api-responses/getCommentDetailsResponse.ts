import { User } from "../models/member";
import { Reply } from "../models/replies";

export interface GetCommentDetailsResponse {
  data?: {
    comment: Reply;
    users: Record<string, User>;
  };
}
