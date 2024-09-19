import { User } from "../models/member";

export interface GetCommentLikes {
  likes: Like[];

  totalCount: number;

  users: User[];
}

interface Like {
  Id: string;
  createdAt: number;
  updatedAt: number;
  userId: string;
  uuid: string;
}
