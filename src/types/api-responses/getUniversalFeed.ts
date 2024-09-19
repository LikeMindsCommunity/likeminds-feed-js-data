import { User } from "../models/member";
import { Post } from "../models/post";
import { Topic } from "../models/topic";
export interface GetUniversalFeed {
  posts: Post[];
  topics: Record<string, Topic>;
  users: Record<string, User>;
}
