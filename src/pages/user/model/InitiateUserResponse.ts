import { User } from "../../../types/models/member";

export declare type InitiateUserResponse = {
  accessToken: string;
  refreshToken: string;
  user?: User;
  community: any;
  appAccess: boolean;
};
