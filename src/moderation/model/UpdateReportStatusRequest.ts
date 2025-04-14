import { LMFeedReportStatus } from "../enums";

class UpdateReportStatusRequest {
  reportIds: number[];
  actionTaken: LMFeedReportStatus;

  constructor(reportIds: number[], actionTaken: LMFeedReportStatus) {
    this.reportIds = reportIds;
    this.actionTaken = actionTaken;
  }

  public static builder(): UpdateReportStatusRequestBuilder {
    return new UpdateReportStatusRequestBuilder();
  }
}

export class UpdateReportStatusRequestBuilder {
  private reportIds!: number[];
  private actionTaken!: LMFeedReportStatus;

  public setReportIds(reportIds: number[]): UpdateReportStatusRequestBuilder {
    this.reportIds = reportIds;
    return this;
  }

  public setActionTaken(
    actionTaken: LMFeedReportStatus
  ): UpdateReportStatusRequestBuilder {
    this.actionTaken = actionTaken;
    return this;
  }

  public build(): UpdateReportStatusRequest {
    return new UpdateReportStatusRequest(this.reportIds, this.actionTaken);
  }
}

export default UpdateReportStatusRequest;
