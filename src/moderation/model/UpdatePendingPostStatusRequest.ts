import { LMFeedReportStatus } from "../enums";

class UpdatePendingPostStatusRequest {
  reportIds: number[];
  status: LMFeedReportStatus;

  constructor(reportIds: number[], status: LMFeedReportStatus) {
    this.reportIds = reportIds;
    this.status = status;
  }

  public static builder(): UpdatePendingPostStatusRequestBuilder {
    return new UpdatePendingPostStatusRequestBuilder();
  }
}

export class UpdatePendingPostStatusRequestBuilder {
  private reportIds!: number[];
  private status!: LMFeedReportStatus;

  public setReportIds(reportIds: number[]): UpdatePendingPostStatusRequestBuilder {
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
