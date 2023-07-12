import NetworkLibrary from "src/core/services/networklibrary";
import { API } from "../../shared/constants/api.constant";
import { InitUser, Logout, MemberState } from "./types";
import { environment } from "src/environment";

export class Member {
  public networkLibrary = new NetworkLibrary();

  initiateUser(initUser: InitUser): Promise<any> {
    const params = {
      is_guest: initUser?.isGuest,
      user_unique_id: initUser?.userUniqueId,
      user_name: initUser?.userName,
    };

    return this.networkLibrary
      .makeAuthenticatedRequest(`${environment.apiUrl}${API.SDK_INITIATE}`, {
        method: "POST",
        data: params,
      })
      .then((resData: any) => {
        const accessToken = resData?.data?.access_token;
        this.networkLibrary.setAccessToken(accessToken);
        const refreshToken = resData?.data?.refresh_token;
        this.networkLibrary.setRefreshToken(refreshToken);

        return { data: resData?.data, errorMessage: null, success: true };
      })
      .catch((error) => {
        console.log({
          data: null,
          errorMessage: error.error_message,
          success: false,
        });
      });
  }

  logout(logout: Logout): Promise<any> {
    const params = {
      refresh_token: logout.refreshToken,
    };
    localStorage.clear();

    return this.networkLibrary.makeAuthenticatedRequest(
      `${environment.apiUrl}${API.USER_LOGOUT}`,
      {
        method: "POST",
        data: params,
      }
    );
  }

  getMemberState(memberState: MemberState): Promise<any> {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${environment.apiUrl}${API.COMMUNITY_MEMBER_STATE}?member_id=${memberState.memberId}`
    );
  }
}
