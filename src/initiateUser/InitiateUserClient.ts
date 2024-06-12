/* eslint-disable @typescript-eslint/no-explicit-any */
import { API } from "../shared/constants/api.constant";

import InitiateUserRequest from "./model/InitiateUserRequest";
import { InitiateUserResponse } from "../shared/models/api-responses/initiateUserResponse";
import NetworkLibrary from "../core/services/networklibrary";
import { ModelConverter } from "../utils/ModelConverter";

// import { GetMemberStateResponse } from "./model/GetMemberStateResponse";
import { GetMemberStateResponse } from "../shared/models/api-responses/getMemberStateResponse";
import GetAllMembersRequest from "./model/GetAllMembersRequest";
import ValidateUserRequest from "./model/ValidateUserRequest";
import { ValidateUserResponse } from "../shared/models/api-responses/initiateUserResponse";
import { GetAllMembersResponse } from "../shared/models/api-responses/getAllMembersResponse";

class InitiateUserClient {
  private networkLibrary: NetworkLibrary;

  constructor(networkInstance: NetworkLibrary) {
    this.networkLibrary = networkInstance;
  }

  public async validateUser(
    request: ValidateUserRequest
  ): Promise<ValidateUserResponse> {
    this.networkLibrary.setAccessToken(request.accessToken);
    this.networkLibrary.setRefreshToken(request.refreshToken);

    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.SDK_INITIATE}`, {
        method: "GET",
      })
      .then((resData: any) => {
        // Handle the response and return the LMResponse object
        const responseData: ValidateUserResponse =
          ModelConverter.responseBodyParser(resData);

        return responseData;
      })
      .catch((error) => {
        return {
          success: false,
          errorMessage: error,
        };
      });
  }

  public async initiateUser(
    request: InitiateUserRequest
  ): Promise<InitiateUserResponse> {
    const params = ModelConverter.requestBodyGenerator(request);

    this.networkLibrary.setApiKey(request.apikey);

    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.SDK_INITIATE}`, {
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
          ModelConverter.responseBodyParser(resData);

        return responseData;
      })
      .catch((error) => {
        return {
          success: false,
          errorMessage: error,
        };
      });
  }

  public async getMemberState(): Promise<GetMemberStateResponse> {
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.COMMUNITY_MEMBER_STATE}`)
      .then((resData: any) => {
        // Handle the response and return the LMResponse object
        const responseData: GetMemberStateResponse =
          ModelConverter.responseBodyParser(resData.data);

        return responseData;
      })
      .catch((error) => {
        return {
          success: false,
          errorMessage: error,
        };
      });
  }

  public async getAllMembers(
    request: GetAllMembersRequest
  ): Promise<GetAllMembersResponse> {
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.DM_ALL_MEMBERS}?page=${request.page}`)
      .then((resData: any) => {
        // Handle the response and return the LMResponse object
        const responseData: any = ModelConverter.responseBodyParser(resData);

        return responseData;
      })
      .catch((error) => {
        return {
          success: false,
          errorMessage: error,
        };
      });
  }
}

export default InitiateUserClient;
