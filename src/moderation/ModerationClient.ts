import LMResponse from "src/core/services/lmresponse";
import { API } from "src/shared/constants/api.constant";
import NetworkLibrary from "src/core/services/networklibrary";
import GetReportTagsRequest from "./model/GetReportTagsRequest";
import { GetReportTagsResponse } from "./model/GetReportTagsResponse";
import { ModelConverter } from "src/utils/ModelConverter";
import PostReportRequest from "./model/PostReportRequest";

class ModerationClient {
  networkLibrary: NetworkLibrary;

  constructor(instance: NetworkLibrary) {
    this.networkLibrary = instance;
  }

  public async getReportTags(
    getPost: GetReportTagsRequest
  ): Promise<LMResponse<GetReportTagsResponse>> {
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.COMMUNITY_REPORT_TAG}`)
      .then((resData: any) => {
        const responseData: GetReportTagsResponse =
          ModelConverter.responseBodyParser(resData.data);
        return new LMResponse<GetReportTagsResponse>(responseData, null, true);
      })
      .catch((error) => {
        return new LMResponse<GetReportTagsResponse>(
          null,
          error.message || "An error occurred",
          false
        );
      });
  }

  async postReport(request: PostReportRequest): Promise<LMResponse<any>> {
    const params = ModelConverter.requestBodyGenerator(request);
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.COMMUNITY_REPORT}`, {
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

export default ModerationClient;
