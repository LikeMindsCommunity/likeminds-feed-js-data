import { Community } from "../models/community";
import { User } from "../models/member";

export interface ValidateUser {
  accessToken: string;
  appAccess: boolean;
  community: Community;
  hasAnswers: boolean;
  refreshToken: string;
  user: User;
}

export interface InitiateUser {
  accessToken: string;
  appAccess: boolean;
  community: Community;
  hasAnswers: boolean;
  refreshToken: string;
  user: User;
}
