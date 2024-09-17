import { User } from "../models/member";
import { Post } from "../models/post";
import { Topic } from "../models/topic";

export interface AddPost {
  post: Post;

  topics: Record<string, Topic>;

  users: Record<string, User>;
}
export interface EditPost {
  post: Post;

  topics: Record<string, Topic>;

  users: Record<string, User>;
}
