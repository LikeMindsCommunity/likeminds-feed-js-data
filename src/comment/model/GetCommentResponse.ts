import { IComment } from "../../shared/models/comment";
import { IUser } from "../../shared/models/user";

// Comment interface (you can define this separately if needed)

export interface GetCommentResponse {
  comment: IComment;
  users: { [key: string]: IUser }; // Map<string, User> equivalent in TypeScript
}
