// Post interface (you can define this separately if needed)

import { ITopic } from "src/shared/models/topic";
import { IPost } from "../../shared/models/post";
import { IUser } from "../../shared/models/user";
import { IWidget } from "src/shared/models/widget";

// User interface (you can define this separately if needed)

export interface GetFeedResponse {
  posts: IPost[];
  users: { [key: string]: IUser }; // Map<string, User> equivalent in TypeScript
  topics: ITopic;
  widget: IWidget;
}
