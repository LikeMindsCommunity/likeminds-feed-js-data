// Post interface (you can define this separately if needed)

import { IPost } from "src/shared/models/post.model";
import { IUser } from "src/shared/models/user.model";

// User interface (you can define this separately if needed)

export interface GetFeedResponse {
  posts: IPost[];
  users: { [key: string]: IUser }; // Map<string, User> equivalent in TypeScript
}
