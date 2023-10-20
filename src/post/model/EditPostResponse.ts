import { IPost } from "../../shared/models/post";
import { IUser } from "../../shared/models/user";

export interface EditPostResponse {
  post: IPost;
  users: { [key: string]: IUser }; // Map<string, User> equivalent in TypeScript
}
