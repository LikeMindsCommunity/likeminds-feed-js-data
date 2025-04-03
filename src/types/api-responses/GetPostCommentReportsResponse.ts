import { Widget } from "../models/widget";
import { Post } from "../models/post";
import { User } from "../models/member";
import { Topic } from "../models/topic";
import { Comment } from "../models/comment";
import { GroupReport } from "./GetReportsResponse";

export interface GetPostCommentReports {
  reportsData: GroupReport[];
  posts: Record<string, Post>;
  users: Record<string, User>;
  repostedPosts: Record<string, Post>;
  topics: Record<string, Topic>;
  userTopics: Record<string, Topic>;
  widgets: Record<string, Widget>;
  comments: Record<string, Comment>;
}
