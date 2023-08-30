import LMResponse from "src/core/services/lmresponse";
import { environment } from "src/environment";
import { API } from "src/shared/constants/api.constant";

import InitiateUserRequest from "./model/InitiateUserRequest";
import { InitiateUserResponse } from "./model/InitiateUserResponse";
import NetworkLibrary from "src/core/services/networklibrary";
import { ModelConverter } from "src/utils/ModelConverter";
import GetMemberStateRequest from "./model/GetMemberStateRequest";
import { GetMemberStateResponse } from "./model/GetMemberStateResponse";
import { IMember } from "./model/GetAllMembersResponse";
import GetAllMembersRequest from "./model/GetAllMembersRequest";

class InitiateUserClient {
  private networkLibrary: NetworkLibrary;

  constructor(networkInstance: NetworkLibrary) {
    this.networkLibrary = networkInstance;
  }

  public async initiateUser(
    request: InitiateUserRequest
  ): Promise<LMResponse<InitiateUserResponse>> {
    // const params = ModelConverter.requestBodyGenerator(request);
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.SDK_INITIATE}`, {
        method: "POST",
        data: request,
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

  public async getMemberState(): Promise<LMResponse<GetMemberStateResponse>> {
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.COMMUNITY_MEMBER_STATE}`)
      .then((resData: any) => {
        // Handle the response and return the LMResponse object
        const responseData: GetMemberStateResponse =
          ModelConverter.responseBodyParser(resData.data);

        return new LMResponse<GetMemberStateResponse>(responseData, null, true);
      })
      .catch((error) => {
        return new LMResponse<GetMemberStateResponse>(
          null,
          error.message || "An error occurred",
          false
        );
      });
  }

  public async getAllMembers(
    request: GetAllMembersRequest
  ): Promise<LMResponse<any>> {
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.DM_ALL_MEMBERS}?page=${request.page}`)
      .then((resData: any) => {
        // Handle the response and return the LMResponse object
        const responseData: any = ModelConverter.responseBodyParser(
          resData.data
        );

        return new LMResponse<any>(responseData, null, true);
      })
      .catch((error) => {
        return new LMResponse<any>(
          null,
          error.message || "An error occurred",
          false
        );
      });
  }
}

export default InitiateUserClient;
