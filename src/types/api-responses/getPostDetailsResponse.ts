import { User } from "../models/member";
import { Post } from "../models/post";
import { Topic } from "../models/topic";

export interface GetPostDetails {
  post: Post;
  topics: Record<string, Topic>;
  users: Record<string, User>;
  // widgets: Record<string, any>; // Replace 'Record<string, any>' with actual type if known
}
