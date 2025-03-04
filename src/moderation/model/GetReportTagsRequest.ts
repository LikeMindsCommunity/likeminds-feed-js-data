import { ReportEntityType } from "../enums";
class GetReportTagsRequest {
  // Properties of the request class
  entityType: ReportEntityType;

  // Public constructor to create the request object
  constructor(entityType: ReportEntityType) {
    this.entityType = entityType;
  }

  // Static builder method to create the request object
  public static builder(): GetReportTagsBuilder {
    return new GetReportTagsBuilder();
  }
}

// Builder class for GetReportTagsRequest
export class GetReportTagsBuilder {
  private entityType: ReportEntityType | undefined;
  // Add other properties as needed

  public setEntityType(entityType: ReportEntityType): GetReportTagsBuilder {
    this.entityType = entityType;
    return this;
  }

  // Build method to create the final GetReportTagsRequest object
  public build(): GetReportTagsRequest {
    if (!this.entityType) {
      throw new Error("entityType is required");
    }
    return new GetReportTagsRequest(this.entityType);
  }
}

export default GetReportTagsRequest;
