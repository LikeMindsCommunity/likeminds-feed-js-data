import { API } from "../shared/constants/api.constant";
import NetworkLibrary from "../core/services/networklibrary";
import GetReportTagsRequest from "./model/GetReportTagsRequest";
import GetReportsRequest from "./model/GetReportsRequest";
import CloseReportRequest from "./model/CloseReportRequest";
import GetMemberRightsRequest from "./model/GetMemberRightsRequest";
import UpdateMemberRightsRequest from "./model/UpdateMemberRightsRequest";
import { FilterType } from "./enums";
// import { GetReportTagsResponse } from "./model/GetReportTagsResponse";
import UpdatePendingPostStatusRequest from "./model/UpdatePendingPostStatusRequest";
import GetPostCommentReportRequest from "./model/GetPostCommentReportRequest";
import { GetReportTags } from "../types/api-responses/getReportTagsResponse";
import { ModelConverter } from "../utils/ModelConverter";
import PostReportRequest from "./model/PostReportRequest";
import { PostReport } from "../types/api-responses/postReportResponse";
import { GetReports } from "../types/api-responses/GetReportsResponse";
import { GetPostCommentReports } from "../types/api-responses/GetPostCommentReportsResponse";
import { GetMemberRights } from "../types/api-responses/GetMemberRightsResponse";

class ModerationClient {
  networkLibrary: NetworkLibrary;

  constructor(instance: NetworkLibrary) {
    this.networkLibrary = instance;
  }

  getReportTags(request: GetReportTagsRequest) {
    return this.networkLibrary.makeAuthenticatedRequest<GetReportTags>(
      `${API.GET_REPORT_TAGS}?entity_type=${request.entityType}`,
      { method: "GET", headers: { "x-accept-version": "v1" } }
    );
  }

  getReports(getReportsRequest: GetReportsRequest) {
    const filterTypeParams = JSON.stringify(getReportsRequest.filterType);
    return this.networkLibrary.makeAuthenticatedRequest<GetReports>(
      `${API.GET_REPORTS}?page=${getReportsRequest.page}&page_size=${getReportsRequest.pageSize}&filter_type=${filterTypeParams}&is_closed=${getReportsRequest.isClosed}`,
      { method: "GET", headers: { "x-accept-version": "v1" } }
    );
  }

  updatePendingPostStatus(request: UpdatePendingPostStatusRequest) {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${API.UPDATE_REPORT}`,
      {
        data: ModelConverter.requestBodyGenerator(request),
        method: "PATCH",
        headers: { "x-accept-version": "v1" },
      }
    );
  }

  getReportsForPostAndComments(getReportsRequest: GetPostCommentReportRequest) {
    const filterTypeParams = JSON.stringify([
      FilterType.POST,
      FilterType.COMMENT,
      FilterType.REPLY,
    ]);
    const isClosed = "false";
    return this.networkLibrary.makeAuthenticatedRequest<GetPostCommentReports>(
      `${API.GET_REPORTS}?page=${getReportsRequest.page}&page_size=${getReportsRequest.pageSize}&filter_type=${filterTypeParams}&is_closed=${isClosed}`,
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
      `${API.GET_MEMBER_RIGHTS}?uuid=${request.uuid}&is_cm=${request.isCM}`,
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
        headers: { "x-accept-version": "v1" },
      }
    );
  }
}

export default ModerationClient;
