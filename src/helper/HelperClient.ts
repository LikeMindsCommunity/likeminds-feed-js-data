import LMResponse from "../core/services/lmresponse";
import { API } from "../../src/shared/constants/api.constant";
import NetworkLibrary from "../../src/core/services/networklibrary";
import { ModelConverter } from "../../src/utils/ModelConverter";

import { GetTaggingList } from "../types/api-responses/getTaggingListResponse";
import RegisterDeviceRequest from "./model/RegisterDeviceRequest";
import { DecodeURL } from "../types/api-responses/decodeUrlResponse";

class HelperClient {
  public networkLibrary: NetworkLibrary;

  constructor(instance: NetworkLibrary) {
    this.networkLibrary = instance;
  }

  public async decodeUrl() {
    return this.networkLibrary.makeAuthenticatedRequest<DecodeURL>(
      `${API.HELPER_URL}`
    );
  }

  public async getTaggingList() {
    return this.networkLibrary.makeAuthenticatedRequest<GetTaggingList>(
      `${API.COMMUNITY_TAG}`
    );
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
