import { API } from "../shared/constants/api.constant";
import NetworkLibrary from "../core/services/networklibrary";
import GetReportTagsRequest from "./model/GetReportTagsRequest";
// import { GetReportTagsResponse } from "./model/GetReportTagsResponse";
import { GetReportTagsResponse } from "../shared/models/api-responses/getReportTagsResponse";
import { ModelConverter } from "../utils/ModelConverter";
import PostReportRequest from "./model/PostReportRequest";

class ModerationClient {
  networkLibrary: NetworkLibrary;

  constructor(instance: NetworkLibrary) {
    this.networkLibrary = instance;
  }

  getReportTags(request: GetReportTagsRequest): Promise<GetReportTagsResponse> {
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.GET_REPORT_TAGS}?type=${request.type}`)
      .then((resData: any) => {
        const responseData = ModelConverter.responseBodyParser(resData);
        return responseData;
      })
      .catch((error) => {
        return {
          success: false,
          errorMessage: error,
        };
      });
  }

  postReport(request: PostReportRequest): Promise<any> {
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.POST_REPORT}`, {
        data: ModelConverter.requestBodyGenerator(request),
        method: "POST",
      })
      .then((res: any) => {
        return ModelConverter.responseBodyParser(res);
      })
      .catch((error) => {
        return {
          success: false,
          errorMessage: error,
        };
      });
  }
}

export default ModerationClient;
