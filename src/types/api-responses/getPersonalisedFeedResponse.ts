import { FilterComment } from "../models/filterComment";
import { User } from "../models/member";
import { Post } from "../models/post";
import { Topic } from "../models/topic";
import { Widget } from "../models/widget";
export interface GetPersonalisedFeed {
  posts: Post[];
  topics: Record<string, Topic>;
  users: Record<string, User>;
  filteredComments?: Record<string, FilterComment>;
  widgets: Record<string, Widget>;
}
