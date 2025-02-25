import { API } from "../shared/constants/api.constant";
import NetworkLibrary from "../core/services/networklibrary";
import GetReportTagsRequest from "./model/GetReportTagsRequest";
import GetReportsRequest from "./model/GetReportsRequest";
import CloseReportRequest from "./model/CloseReportRequest";
import GetMemberRightsRequest from "./model/GetMemberRightsRequest";
import UpdateMemberRightsRequest from "./model/UpdateMemberRightsRequest";
import { FilterType } from "./types/types";
// import { GetReportTagsResponse } from "./model/GetReportTagsResponse";
import UpdatePendingPostStatusRequest from "./model/UpdatePendingPostStatusRequest";
import GetPostCommentReportRequest from "./model/GetPostCommentReportRequest";
import { GetReportTags } from "../types/api-responses/getReportTagsResponse";
import { ModelConverter } from "../utils/ModelConverter";
import PostReportRequest from "./model/PostReportRequest";
import { PostReport } from "../types/api-responses/postReportResponse";
import { GetReports } from "../types/api-responses/GetReportsResponse";
import { GetPostCommentReports } from "src/types/api-responses/GetPostCommentReportsResponse";
import { GetMemberRights } from "src/types/api-responses/GetMemberRightsResponse";

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

  getReportsForPostAndComments(getReportsRequest: GetPostCommentReportRequest) {
    const filterType = [FilterType.POST, FilterType.COMMENTS, FilterType.REPLY];
    const isClosed = "false";
    return this.networkLibrary.makeAuthenticatedRequest<GetPostCommentReports>(
      `${API.GET_REPORTS}?page=${getReportsRequest.page}&pageSize=${getReportsRequest.pageSize}&filterType=${filterType.join(",")}&isClosed=${isClosed}`,
      { method: "GET", headers: { "x-accept-version": "v1" } }
    );
  }

  closeReport(request: CloseReportRequest) {
    return this.networkLibrary.makeAuthenticatedRequest(`${API.CLOSE_REPORT}`, {
      method: "DELETE",
      headers: { "x-accept-version": "v1" },
      data: ModelConverter.requestBodyGenerator(request),
    });
  }

  getMemberRights(request: GetMemberRightsRequest) {
    return this.networkLibrary.makeAuthenticatedRequest<GetMemberRights>(
      `${API.GET_MEMBER_RIGHTS}?uuid=${request.uuid}&isCM=${request.isCM}`,
      { method: "GET", headers: { "x-accept-version": "v1" } }
    );
  }

  updateMemberRights(request: UpdateMemberRightsRequest) {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${API.UPDATE_MEMBER_RIGHTS}`,
      {
        method: "PATCH",
        headers: { "x-accept-version": "v1" },
        data: ModelConverter.requestBodyGenerator(request),
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
