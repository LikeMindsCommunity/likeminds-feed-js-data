import { IUser } from "../../shared/models/user";
import Like from "./Like";

export interface GetPostLikesResponse {
  likes: Like[];
  totalCount: number;
  users: { [key: string]: IUser }; // Map<string, User> equivalent in TypeScript
}
