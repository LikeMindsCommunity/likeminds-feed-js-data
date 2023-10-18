import LMResponse from "src/core/services/lmresponse";
import { API } from "src/shared/constants/api.constant";
import NetworkLibrary from "src/core/services/networklibrary";
import InitiateUserRequest from "src/initiateUser/model/InitiateUserRequest";
import { InitiateUserResponse } from "src/initiateUser/model/InitiateUserResponse";
import GetReportTagsRequest from "./model/GetReportTagsRequest";
import { GetReportTagsResponse } from "./model/GetReportTagsResponse";
import { ModelConverter } from "src/utils/ModelConverter";
import PostReportRequest from "./model/PostReportRequest";

class ModerationClient {
  networkLibrary: NetworkLibrary;

  constructor(instance: NetworkLibrary) {
    this.networkLibrary = instance;
  }

  getReportTags(
    request: GetReportTagsRequest,
  ): Promise<LMResponse<GetReportTagsResponse>> {
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.GET_REPORT_TAGS}?type=${request.type}`)
      .then((resData: any) => {
        const responseData = ModelConverter.responseBodyParser(resData.data);
        return new LMResponse<GetReportTagsResponse>(responseData, null, true);
      })
      .catch((error: any) => {
        return new LMResponse<GetReportTagsResponse>(
          null,
          error.message || "An error occoured",
          false,
        );
      });
  }

  postReport(request: PostReportRequest): Promise<LMResponse<any>> {
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.POST_REPORT}`, {
        data: ModelConverter.requestBodyGenerator(request),
        method: "POST",
      })
      .then((resData: any) => {
        const responseData = ModelConverter.responseBodyParser(resData.data);
        return new LMResponse<any>({}, null, true);
      })
      .catch((error: any) => {
        return new LMResponse<any>(
          null,
          error.message || "An error occoured",
          false,
        );
      });
  }
}

export default ModerationClient;
