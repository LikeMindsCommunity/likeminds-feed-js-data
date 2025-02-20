import { API } from "../shared/constants/api.constant";
import NetworkLibrary from "../core/services/networklibrary";
import GetReportTagsRequest from "./model/GetReportTagsRequest";
import GetReportsRequest from "./model/GetReportsRequest";
// import { GetReportTagsResponse } from "./model/GetReportTagsResponse";
import UpdatePendingPostStatusRequest from "./model/UpdatePendingPostStatusRequest";
import { GetReportTags } from "../types/api-responses/getReportTagsResponse";
import { ModelConverter } from "../utils/ModelConverter";
import PostReportRequest from "./model/PostReportRequest";
import { PostReport } from "../types/api-responses/postReportResponse";
import { GetReports } from "../types/api-responses/GetReportsResponse";

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

  getReports(getReportsRequest: GetReportsRequest) {
    return this.networkLibrary.makeAuthenticatedRequest<GetReports>(
      `${API.GET_REPORTS}?page=${getReportsRequest.page}&pageSize=${getReportsRequest.pageSize}&filterType=${getReportsRequest.filterType?.join(",")}&isClosed=${getReportsRequest.isClosed}`,
      { method: "GET", headers: { "x-accept-version": "v1" } }
    );
  }

  updatePendingPostStatus(request: UpdatePendingPostStatusRequest) {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${API.UPDATE_REPORT}`,
      {
        data: ModelConverter.requestBodyGenerator(request),
        method: "PATCH",
      }
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
