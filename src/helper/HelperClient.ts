import LMResponse from "../core/services/lmresponse";
import { API } from "../../src/shared/constants/api.constant";
import NetworkLibrary from "../../src/core/services/networklibrary";
import { ModelConverter } from "../../src/utils/ModelConverter";

import { DecodeUrlResponse } from "./model/DecodeUrlResponse";

import { GetTaggingListResponse } from "../shared/models/api-responses/getTaggingListResponse";
import RegisterDeviceRequest from "./model/RegisterDeviceRequest";

class HelperClient {
  public networkLibrary: NetworkLibrary;

  constructor(instance: NetworkLibrary) {
    this.networkLibrary = instance;
  }

  public async decodeUrl(): Promise<LMResponse<DecodeUrlResponse>> {
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.HELPER_URL}`)
      .then((resData: any) => {
        const responseData: DecodeUrlResponse =
          ModelConverter.responseBodyParser(resData);
        return new LMResponse<DecodeUrlResponse>(responseData, null, true);
      })
      .catch((error) => {
        return new LMResponse<DecodeUrlResponse>(
          null,
          error.message || "An error occurred",
          false
        );
      });
  }
  public async getTaggingList(): Promise<GetTaggingListResponse> {
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.COMMUNITY_TAG}`)
      .then((resData: any) => {
        const responseData: GetTaggingListResponse =
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

  public async registerDevice(): Promise<LMResponse<any>> {
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.USER_DEVICE_PUSH}`)
      .then((resData: any) => {
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

  async validateRegisterDeviceRequest(
    request: RegisterDeviceRequest
  ): Promise<LMResponse<any>> {
    const params = ModelConverter.requestBodyGenerator(request);
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.USER_DEVICE_PUSH}`, {
        method: "POST",
        data: params,
      })
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

export default HelperClient;
