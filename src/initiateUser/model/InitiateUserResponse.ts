import LMResponse from "src/LMResponse";
import { ICommunity } from "src/shared/models/community.model";
import { IUser } from "src/shared/models/user.model";
export interface InitiateUserResponse {
  accessToken: string;
  appAccess: boolean;
  community: ICommunity;
  hasAnswers: boolean;
  refreshToken: string;
  user: IUser;
  logoutResponse?: LMResponse<null> | null;
}
