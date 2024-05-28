interface LMCallback {
  login(): void;
}
export type RefreshTokenExpired = () => {
  accessToken: string;
  refreshToken: string;
};
export type AccessTokenExpiredAndRefreshed = (
  accessToken: string,
  refreshToken: string
) => void;
export default LMCallback;
// export class LMSDKCallbacks {
//   private accessTokenExpiredAndRefreshedCallback: AccessTokenExpiredAndRefreshed;
//   private refreshTokenExpiredCallback: RefreshTokenExpired;
//   constructor() {}
//   public setRefreshTokenExpired(callback) {
//     this.refreshTokenExpiredCallback = callback;
//   }
//   public setAccessTokenExpiredAndRefreshed(callback) {
//     this.accessTokenExpiredAndRefreshedCallback = callback;
//   }
//   public accessTokenExpiredAndRefreshed(
//     accessToken: string,
//     refreshToken: string
//   ) {
//     this.accessTokenExpiredAndRefreshedCallback(accessToken, refreshToken);
//   }
//   public refreshTokenExpired() {
//     return this.refreshTokenExpiredCallback();
//   }
// }
export abstract class LMSDKCallbacks {
  constructor() {}

  abstract onAccessTokenExpiredAndRefreshed(
    accessToken: string,
    refreshToken: string
  ): void;
  abstract onRefreshTokenExpired(): {
    accessToken: string;
    refreshToken: string;
  } | null;
}
