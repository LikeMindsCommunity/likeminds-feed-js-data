import { User } from "../../shared/models/user";

export declare type InitiateUserResponse = {
  accessToken: string;
  refreshToken: string;
  user?: User;
  community: any;
  appAccess: boolean;
};
