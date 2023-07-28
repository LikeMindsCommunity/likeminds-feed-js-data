import { User } from "src/shared/models/user.model";

export declare type InitiateUserResponse = {
  accessToken: string;
  refreshToken: string;
  user?: User;
  community: any;
  appAccess: boolean;
};
