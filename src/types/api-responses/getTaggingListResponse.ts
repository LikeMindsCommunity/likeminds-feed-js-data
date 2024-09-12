import { TaggingMember } from "../models/taggingMember";

export interface GetTaggingListResponse {
  data?: {
    members: TaggingMember[];
  };
}
