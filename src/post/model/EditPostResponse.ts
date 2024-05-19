import { ITopic } from "src/shared/models/topic";
import { IPost } from "../../shared/models/post";
import { IUser } from "../../shared/models/user";
import { IWidget } from "src/shared/models/widget";

export interface EditPostResponse {
  post: IPost;
  users: { [key: string]: IUser }; // Map<string, User> equivalent in TypeScript
  topics: ITopic;
  widget: IWidget;
}
