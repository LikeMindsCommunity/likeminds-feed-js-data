import LMResponse from "src/core/services/lmresponse";
import { InitiateUserResponse } from "./model/InitiateUserResponse";
import { environment } from "src/environment";
import { API } from "src/shared/constants/api.constant";
import NetworkLibrary from "src/core/services/networklibrary";
import InitiateUserRequest from "./model/InitiateUserRequest";

class InitiateUserClient {
  public networkLibrary = new NetworkLibrary();

  constructor() {}

  // public async initiateUser(initiateUserRequest: InitiateUserRequest): Promise<LMResponse<InitiateUserResponse>> {
  //   try {
  //     const response: AxiosResponse<InitiateUserResponse> = await this.axiosInstance.post('/initiateUser', initiateUserRequest);
  //     return {
  //       data: response.data,
  //       errorMessage: null,
  //       success: true,
  //       getData: () => response.data,
  //       getErrorMessage: () => null,
  //       getStatus: () => true,
  //     };
  //   } catch (error) {
  //     if (axios.isAxiosError(error)) {
  //       const axiosError: AxiosError = error;
  //       return {
  //         data: null,
  //         errorMessage: axiosError.response?.data?.message || 'An error occurred during the API call.',
  //         success: false,
  //         getData: () => null,
  //         getErrorMessage: () => axiosError.response?.data?.message || 'An error occurred during the API call.',
  //         getStatus: () => false,
  //       };
  //     } else {
  //       return {
  //         data: null,
  //         errorMessage: 'An unknown error occurred.',
  //         success: false,
  //         getData: () => null,
  //         getErrorMessage: () => 'An unknown error occurred.',
  //         getStatus: () => false,
  //       };
  //     }
  //   }
  // }

  public async initiateUser(
    request: InitiateUserRequest
  ): Promise<LMResponse<InitiateUserResponse>> {
    console.log(request);
    const params = {
      // is_guest: request?.isGuest,
      // user_unique_id: request?.uuid,
      // user_name: request?.userName,
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
}

export default InitiateUserClient;

// import NetworkLibrary from "src/core/services/networklibrary";
// import { API } from "../shared/constants/api.constant";
// import { InitUser, Logout, MemberState } from "./types";
// import { environment } from "src/environment";
// import LMResponse from "src/core/services/lmresponse";
// import { InitiateUserResponse } from "./model/InitiateUserResponse";
// import { InitiateUserRequest } from "./model/InitiateUserRequest";

// export class InitiateUserClient {
//   public networkLibrary = new NetworkLibrary();

//   public async initiateUser(request: InitiateUserRequest): Promise<LMResponse<InitiateUserResponse>> {

//     const params = {
//       is_guest: request?.isGuest,
//       user_unique_id: request?.uuid,
//       user_name: request?.userName,
//     };

//     return this.networkLibrary
//       .makeAuthenticatedRequest(`${environment.apiUrl}${API.SDK_INITIATE}`, {
//         method: "POST",
//         data: params,
//       })
//       .then((resData: any) => {
//         const accessToken = resData?.data?.access_token;
//         this.networkLibrary.setAccessToken(accessToken);
//         const refreshToken = resData?.data?.refresh_token;
//         this.networkLibrary.setRefreshToken(refreshToken);

//         // Handle the response and return the LMResponse object
//         const responseData: InitiateUserResponse = {
//           accessToken: resData?.data?.accessToken,
//           refreshToken: resData?.data?.refreshToken,
//           user: resData?.data.user,
//           community: resData?.data.community,
//           appAccess: resData?.data.appAccess,
//         };

//         return new LMResponse<InitiateUserResponse>(responseData, null, true);
//       })
//       .catch((error) => {
//         return new LMResponse<InitiateUserResponse>(
//           null,
//           error.message || "An error occurred",
//           false
//         );
//       });
//   }

//   logout(logout: Logout): Promise<any> {
//     const params = {
//       refresh_token: logout.refreshToken,
//     };
//     localStorage.clear();

//     return this.networkLibrary.makeAuthenticatedRequest(
//       `${environment.apiUrl}${API.USER_LOGOUT}`,
//       {
//         method: "POST",
//         data: params,
//       }
//     );
//   }

//   getMemberState(memberState: MemberState): Promise<any> {
//     return this.networkLibrary.makeAuthenticatedRequest(
//       `${environment.apiUrl}${API.COMMUNITY_MEMBER_STATE}?member_id=${memberState.memberId}`
//     );
//   }
// }
