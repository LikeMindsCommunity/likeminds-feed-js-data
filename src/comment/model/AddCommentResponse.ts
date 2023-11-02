// import { IComment } from "../../shared/models/comment";
import { IComment } from "../../shared/models/comment";
import { IUser } from "../../shared/models/user";

export interface AddCommentResponse {
  comment: IComment;
  users: { [key: string]: IUser }; // Map<string, User> equivalent in TypeScript
}
