import { User } from "../models/member";
// TODO change unknowns
export interface GetPostLikes {
  likes: Like[];
  topics: Record<string, unknown>;
  totalCount: number;
  userTopics: Record<string, unknown>;
  users: User[];
}

interface Like {
  id: string;
  createdAt: number;
  updatedAt: number;
  userId: string;
  uuid: string;
}
