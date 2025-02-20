import { LMFeedReportStatus } from "../types/types";

class UpdatePendingPostStatusRequest {
  reportIds: string[];
  status: LMFeedReportStatus;

  constructor(reportIds: string[], status: LMFeedReportStatus) {
    this.reportIds = reportIds;
    this.status = status;
  }

  public static builder(): UpdatePendingPostStatusRequestBuilder {
    return new UpdatePendingPostStatusRequestBuilder();
  }
}

class UpdatePendingPostStatusRequestBuilder {
  private reportIds!: string[];
  private status!: LMFeedReportStatus;

  public setReportIds(reportIds: string[]): UpdatePendingPostStatusRequestBuilder {
    this.reportIds = reportIds;
    return this;
  }

  public setStatus(status: LMFeedReportStatus): UpdatePendingPostStatusRequestBuilder {
    this.status = status;
    return this;
  }

  public build(): UpdatePendingPostStatusRequest {
    return new UpdatePendingPostStatusRequest(this.reportIds, this.status);
  }
}

export default UpdatePendingPostStatusRequest;
