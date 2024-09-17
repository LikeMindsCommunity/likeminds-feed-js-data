import { API } from "../shared/constants/api.constant";
import NetworkLibrary from "../core/services/networklibrary";
import GetReportTagsRequest from "./model/GetReportTagsRequest";
// import { GetReportTagsResponse } from "./model/GetReportTagsResponse";
import { GetReportTags } from "../types/api-responses/getReportTagsResponse";
import { ModelConverter } from "../utils/ModelConverter";
import PostReportRequest from "./model/PostReportRequest";

class ModerationClient {
  networkLibrary: NetworkLibrary;

  constructor(instance: NetworkLibrary) {
    this.networkLibrary = instance;
  }

  getReportTags(request: GetReportTagsRequest) {
    return this.networkLibrary
      .makeAuthenticatedRequest<GetReportTags>(
        `${API.GET_REPORT_TAGS}?type=${request.type}`
      )
      .then((resData) => {
        return resData;
      })
      .catch((error) => {
        return {
          success: false,
          errorMessage: error,
        };
      });
  }

  postReport(request: PostReportRequest) {
    return this.networkLibrary
      .makeAuthenticatedRequest<undefined>(`${API.POST_REPORT}`, {
        data: ModelConverter.requestBodyGenerator(request),
        method: "POST",
      })
      .then((res) => {
        return res;
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
