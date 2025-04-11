/* eslint-disable @typescript-eslint/no-explicit-any */
import { API } from "../shared/constants/api.constant"

import InitiateUserRequest from "./model/InitiateUserRequest"

import NetworkLibrary from "../core/services/networklibrary"
import { ModelConverter } from "../utils/ModelConverter"

// import { GetMemberStateResponse } from "./model/GetMemberStateResponse";
import { GetMemberState } from "../types/api-responses/getMemberStateResponse"
import GetAllMembersRequest from "./model/GetAllMembersRequest"
import ValidateUserRequest from "./model/ValidateUserRequest"
import LogoutRequest from "./model/LogoutRequest"

import { GetAllMembers } from "../types/api-responses/getAllMembersResponse"
// import { ValidateUserResponse } from "./model/ValidateUserResponse";
import { GetCommunityConfigurationsResponse } from "./model/GetCommunityConfigurationsResponse"

import LMResponse from "../core/services/lmresponse"
import { EditProfile, Nothing } from "src/pages/user/types"
import {
  InitiateUser,
  ValidateUser,
} from "../types/api-responses/initiateUserResponse"

interface _LogoutUserRequest_{
  refreshToken:string
}

class InitiateUserClient {
  private networkLibrary: NetworkLibrary

  constructor(networkInstance: NetworkLibrary) {
    this.networkLibrary = networkInstance
  }

  public async validateUser(request: ValidateUserRequest) {
    this.networkLibrary.setAccessToken(request.accessToken)
    this.networkLibrary.setRefreshToken(request.refreshToken)

    return this.networkLibrary.makeAuthenticatedRequest<ValidateUser>(
      `${API.SDK_INITIATE}`,
      {
        method: "GET",
      }
    )
  }

  public async initiateUser(request: InitiateUserRequest) {
    const params = ModelConverter.requestBodyGenerator(request)
    this.networkLibrary.setApiKey(request.apikey)
    return this.networkLibrary
      .makeAuthenticatedRequest<InitiateUser>(`${API.SDK_INITIATE}`, {
        method: "POST",
        data: params,
      })
      .then((resData) => {
        const accessToken = resData?.data?.accessToken
        this.networkLibrary.setAccessToken(accessToken)
        const refreshToken = resData?.data?.refreshToken
        this.networkLibrary.setRefreshToken(refreshToken)
        return resData
      })
  }

  public async getCommunityConfigurations() {
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.COMMUNITY_CONFIGURATIONS}`)
      .then((resData) => {
        // Handle the response and return the LMResponse object
        return resData
      })
      .catch((error) => {
        return new LMResponse<GetCommunityConfigurationsResponse>(
          null,
          error.message || "An error occurred",
          false
        )
      })
  }

  public async getMemberState() {
    return this.networkLibrary.makeAuthenticatedRequest<GetMemberState>(
      `${API.COMMUNITY_MEMBER_STATE}`
    )
  }

  public async getAllMembers(request: GetAllMembersRequest) {
    return this.networkLibrary.makeAuthenticatedRequest<GetAllMembers>(
      `${API.DM_ALL_MEMBERS}?page=${request.page}`
    )
  }

  public async logoutUser(
    request: LogoutRequest
  ): Promise<LMResponse<Nothing>> {
    
    console.log("data logout called");
    
    const internalRequest = {
      refreshToken:this.networkLibrary.getRefreshToken()
    }

    console.log(`internal request`,internalRequest);
    

    const accessToken = this.networkLibrary.getAccessTokenFromLocalStorage()
    const refreshToken = this.networkLibrary.getRefreshTokenFromLocalStorage()

    console.log("access and refresh from local storage", accessToken, refreshToken);
    

    if (!accessToken || !refreshToken) {
      console.log("case 1");
      
      this.networkLibrary.clearLocalStorage()
      return new LMResponse<Nothing>(null, null, true)
    } else {
      if (request.deviceId) {
        console.log("case 2");
        console.log("calling api");
      
        const response = await this.networkLibrary.makeAuthenticatedRequest(
          `${API.USER_LOGOUT}`,
          {
            method: "POST",
            data: ModelConverter.requestBodyGenerator(internalRequest),
          }
        )
        if (response.success) {
          console.log("api success");
          
          this.networkLibrary.clearLocalStorage()
          return new LMResponse<Nothing>(null, null, true)
        } else {
          console.log("api error");
          
          return new LMResponse<Nothing>(
            null,
            response.errorMessage || "An error occurred",
            false
          )
        }
      } else {
        console.log("case 3");
        
        this.networkLibrary.clearLocalStorage()
        return new LMResponse<Nothing>(null, null, true)
      }
    }
  }

  public async editProfile(editProfile: EditProfile) {
    const params = ModelConverter.requestBodyGenerator(editProfile)
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.COMMUNITY_MEMBER_PROFILE}`, {
        method: "PUT",
        data: params,
      })
      .then((resData) => {
        // Handle the response and return the LMResponse object
        return resData
      })
      .catch((error) => {
        return new LMResponse<Nothing>(
          null,
          error.message || "An error occurred",
          false
        )
      })
  }
}

export default InitiateUserClient
