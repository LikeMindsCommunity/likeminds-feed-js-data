import { IPost } from "src/shared/models/post.model";
import { IUser } from "src/shared/models/user.model";

export interface EditPostResponse {
  post: IPost;
  users: { [key: string]: IUser }; // Map<string, User> equivalent in TypeScript
}
