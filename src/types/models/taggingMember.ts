import { SdkClientInfo } from "./member";

export interface TaggingUser {
  customTitle: string | null;
  id: number;
  imageUrl: string;
  isDeleted: boolean;
  isGuest: boolean;
  name: string;
  sdkClientInfo: SdkClientInfo;
  userUniqueId: string;
  uuid: string;
}
