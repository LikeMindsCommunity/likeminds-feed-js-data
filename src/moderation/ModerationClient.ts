import { API } from "../shared/constants/api.constant";
import NetworkLibrary from "../core/services/networklibrary";
import GetReportTagsRequest from "./model/GetReportTagsRequest";
// import { GetReportTagsResponse } from "./model/GetReportTagsResponse";
import { GetReportTags } from "../types/api-responses/getReportTagsResponse";
import { ModelConverter } from "../utils/ModelConverter";
import PostReportRequest from "./model/PostReportRequest";
import { PostReport } from "../types/api-responses/postReportResponse";

class ModerationClient {
  networkLibrary: NetworkLibrary;

  constructor(instance: NetworkLibrary) {
    this.networkLibrary = instance;
  }

  getReportTags(request: GetReportTagsRequest) {
    return this.networkLibrary.makeAuthenticatedRequest<GetReportTags>(
      `${API.GET_REPORT_TAGS}?type=${request.type}`
    );
  }

  postReport(request: PostReportRequest) {
    return this.networkLibrary.makeAuthenticatedRequest<PostReport>(
      `${API.POST_REPORT}`,
      {
        data: ModelConverter.requestBodyGenerator(request),
        method: "POST",
      }
    );
  }
}

export default ModerationClient;
