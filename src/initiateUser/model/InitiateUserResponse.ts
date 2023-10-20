import LMResponse from "../../LMResponse";
import { ICommunity } from "../../shared/models/community";
import { IUser } from "../../shared/models/user";
export interface InitiateUserResponse {
  accessToken: string;
  appAccess: boolean;
  community: ICommunity;
  hasAnswers: boolean;
  refreshToken: string;
  user: IUser;
  logoutResponse?: LMResponse<null> | null;
}
