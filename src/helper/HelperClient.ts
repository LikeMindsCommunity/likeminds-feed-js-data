import LMResponse from "src/core/services/lmresponse";
import { API } from "src/shared/constants/api.constant";
import NetworkLibrary from "src/core/services/networklibrary";
import { ModelConverter } from "src/utils/ModelConverter";
import DecodeUrlRequest from "./model/DecodeUrlRequest";
import { DecodeUrlResponse } from "./model/DecodeUrlResponse";
import GetTaggingListRequest from "./model/GetTaggingListRequest";
import { GetTaggingListResponse } from "./model/GetTaggingListResponse";
import RegisterDeviceRequest from "./model/RegisterDeviceRequest";

class HelperClient {
  public networkLibrary: NetworkLibrary;

  constructor(instance: NetworkLibrary) {
    this.networkLibrary = instance;
  }

  public async decodeUrl(
    decodeUrlRequest: DecodeUrlRequest
  ): Promise<LMResponse<DecodeUrlResponse>> {
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.HELPER_URL}`)
      .then((resData: any) => {
        const responseData: DecodeUrlResponse =
          ModelConverter.responseBodyParser(resData.data);
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
  public async getTaggingList(
    getTaggingListRequest: GetTaggingListRequest
  ): Promise<LMResponse<GetTaggingListResponse>> {
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.COMMUNITY_TAG}`)
      .then((resData: any) => {
        const responseData: GetTaggingListResponse =
          ModelConverter.responseBodyParser(resData.data);
        return new LMResponse<GetTaggingListResponse>(responseData, null, true);
      })
      .catch((error) => {
        return new LMResponse<GetTaggingListResponse>(
          null,
          error.message || "An error occurred",
          false
        );
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
