import { Widget } from "../models/widget";
import {Post} from "../models/post";
import { User } from "../models/member";
import { Topic } from "../models/topic";
import {Report} from "../models/report";
import { Comment } from "../models/comment";

export interface GetReports {
  reports: Report[];
  posts: Record<string, Post>;
  users: Record<string, User>;
  repostedPosts: Record<string, Post>;
  topics: Record<string, Topic>;
  userTopics: Record<string, Topic>;
  widgets: Record<string, Widget>;
  comments: Record<string, Comment>;
}
