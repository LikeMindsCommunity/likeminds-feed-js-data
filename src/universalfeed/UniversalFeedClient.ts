import LMResponse from "src/core/services/lmresponse";
import { environment } from "src/environment";
import { API } from "src/shared/constants/api.constant";
import NetworkLibrary from "src/core/services/networklibrary";
import InitiateUserRequest from "src/initiateUser/model/InitiateUserRequest";
import { InitiateUserResponse } from "src/initiateUser/model/InitiateUserResponse";
import GetFeedRequest from "./model/GetFeedRequest";

class UniversalFeedClient {
  private networkLibrary;

  constructor(networkInstance: NetworkLibrary) {
    this.networkLibrary = networkInstance;
  }

  public async initiateUser(
    request: InitiateUserRequest
  ): Promise<LMResponse<InitiateUserResponse>> {
    const params = {
      is_guest: request?.isGuest,
      user_unique_id: request?.uuid,
      user_name: request?.userName,
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

        // Handle the response and return the LMResponse object
        const responseData: InitiateUserResponse = {
          accessToken: resData?.data?.accessToken,
          refreshToken: resData?.data?.refreshToken,
          user: resData?.data.user,
          community: resData?.data.community,
          appAccess: resData?.data.appAccess,
          hasAnswers: false,
        };

        return new LMResponse<InitiateUserResponse>(responseData, null, true);
      })
      .catch((error) => {
        return new LMResponse<InitiateUserResponse>(
          null,
          error.message || "An error occurred",
          false
        );
      });
  }

  // get normal feed
  getFeed(feed: GetFeedRequest): Promise<any> {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${API.FEED_UNIVERSAL}?page=${feed.page}&page_size=${feed.pageSize}`
    );
  }
}

export default UniversalFeedClient;
