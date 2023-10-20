// Post interface (you can define this separately if needed)

import { IPost } from "../../shared/models/post";
import { IUser } from "../../shared/models/user";

// User interface (you can define this separately if needed)

export interface GetFeedResponse {
  posts: IPost[];
  users: { [key: string]: IUser }; // Map<string, User> equivalent in TypeScript
}
