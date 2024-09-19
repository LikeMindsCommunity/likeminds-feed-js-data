import { TaggingUser } from "../models/taggingMember";
import { Widget } from "../models/widget";

export interface GetTaggingList {
  members: TaggingUser[];
  widgets: Record<string, Widget>;
}
