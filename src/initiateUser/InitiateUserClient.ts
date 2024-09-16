/* eslint-disable @typescript-eslint/no-explicit-any */
import { API } from "../shared/constants/api.constant";

import InitiateUserRequest from "./model/InitiateUserRequest";
import {
  InitiateUser,
  InitiateUserResponse,
} from "../types/api-responses/initiateUserResponse";
import NetworkLibrary from "../core/services/networklibrary";
import { ModelConverter } from "../utils/ModelConverter";

// import { GetMemberStateResponse } from "./model/GetMemberStateResponse";
import { GetMemberStateResponse } from "../types/api-responses/getMemberStateResponse";
import GetAllMembersRequest from "./model/GetAllMembersRequest";
import ValidateUserRequest from "./model/ValidateUserRequest";
import { ValidateUserResponse } from "../types/api-responses/initiateUserResponse";
import { GetAllMembersResponse } from "../types/api-responses/getAllMembersResponse";
// import { ValidateUserResponse } from "./model/ValidateUserResponse";
import { GetCommunityConfigurationsResponse } from "./model/GetCommunityConfigurationsResponse";

import LMResponse from "../core/services/lmresponse";
import { EditProfile, Nothing } from "src/pages/user/types";

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

  public async initiateUser(request: InitiateUserRequest) {
    const params = ModelConverter.requestBodyGenerator(request);

    this.networkLibrary.setApiKey(request.apikey);

    return this.networkLibrary
      .makeAuthenticatedRequest<InitiateUser>(`${API.SDK_INITIATE}`, {
        method: "POST",
        data: params,
      })
      .then((resData) => {
        const accessToken = resData?.data?.accessToken;
        this.networkLibrary.setAccessToken(accessToken);
        const refreshToken = resData?.data?.refreshToken;
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

  public async getCommunityConfigurations(): Promise<
    LMResponse<GetCommunityConfigurationsResponse>
  > {
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.COMMUNITY_CONFIGURATIONS}`)
      .then((resData: any) => {
        // Handle the response and return the LMResponse object
        const responseData: GetCommunityConfigurationsResponse =
          ModelConverter.responseBodyParser(resData.data);

        return new LMResponse<GetCommunityConfigurationsResponse>(
          responseData,
          null,
          true
        );
      })
      .catch((error) => {
        return new LMResponse<GetCommunityConfigurationsResponse>(
          null,
          error.message || "An error occurred",
          false
        );
      });
  }

  public async getMemberState(): Promise<GetMemberStateResponse> {
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.COMMUNITY_MEMBER_STATE}`)
      .then((resData: any) => {
        // Handle the response and return the LMResponse object
        const responseData: GetMemberStateResponse =
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

  public async editProfile(
    editProfile: EditProfile
  ): Promise<LMResponse<Nothing>> {
    const params = ModelConverter.requestBodyGenerator(editProfile);
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.COMMUNITY_MEMBER_PROFILE}`, {
        method: "PUT",
        data: params,
      })
      .then((resData: any) => {
        // Handle the response and return the LMResponse object
        const responseData: Nothing = ModelConverter.responseBodyParser(
          resData.data
        );

        return new LMResponse<Nothing>(responseData, null, true);
      })
      .catch((error) => {
        return new LMResponse<Nothing>(
          null,
          error.message || "An error occurred",
          false
        );
      });
  }
}

export default InitiateUserClient;
