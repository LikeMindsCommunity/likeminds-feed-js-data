import LMResponse from "src/core/services/lmresponse";
import { environment } from "src/environment";
import { API } from "src/shared/constants/api.constant";

import InitiateUserRequest from "./model/InitiateUserRequest";
import { InitiateUserResponse } from "./model/InitiateUserResponse";
import NetworkLibrary from "src/core/services/networklibrary";
import { ModelConverter } from "src/utils/ModelConverter";

class InitiateUserClient {
  public networkLibrary: NetworkLibrary;

  constructor(networkInstance: NetworkLibrary) {
    this.networkLibrary = networkInstance;
  }

  public async initiateUser(
    request: InitiateUserRequest
  ): Promise<LMResponse<InitiateUserResponse>> {
    // const params = {
    //   is_guest: request?.isGuest,
    //   user_unique_id: request?.uuid,
    //   user_name: request?.userName,
    // };

    const params = ModelConverter.requestBodyGenerator(request);
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
        const responseData: InitiateUserResponse =
          ModelConverter.responseBodyParser(resData.data);

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
}

export default InitiateUserClient;
