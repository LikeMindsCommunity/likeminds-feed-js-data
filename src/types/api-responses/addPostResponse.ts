import { User } from "../models/member";
import { Post } from "../models/post";
import { Topic } from "../models/topic";
import { Widget } from "../models/widget";

export interface AddPost {
  post: Post;

  topics: Record<string, Topic>;

  users: Record<string, User>;

  widgets: Record<string, Widget>;
}
export interface EditPost {
  post: Post;

  topics: Record<string, Topic>;

  users: Record<string, User>;

  widgets: Record<string, Widget>;
}
