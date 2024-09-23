import { User } from "../models/member";

export interface GetCommentLikes {
  likes: Like[];

  totalCount: number;

  users: User[];
}

export interface Like {
  id: string;
  createdAt: number;
  updatedAt: number;
  userId: string;
  uuid: string;
}
