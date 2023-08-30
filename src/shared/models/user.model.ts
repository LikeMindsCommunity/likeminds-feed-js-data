export interface IUser {
  id: number;
  imageUrl: string;
  isGuest: boolean;
  name: string;
  organisationName: null | string;
  sdkClientInfo: {
    community: number;
    user: number;
    userUniqueId: string;
    uuid: string;
  };
  updatedAt: number;
  userUniqueId: string;
  uuid: string;
}
