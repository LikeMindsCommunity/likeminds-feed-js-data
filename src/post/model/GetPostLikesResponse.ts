import { IUser } from "src/shared/models/user.model";
import Like from "./Like";

export interface GetPostLikesResponse {
  likes: Like[];
  totalCount: number;
  users: { [key: string]: IUser }; // Map<string, User> equivalent in TypeScript
}
