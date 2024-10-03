class GetReportTagsRequest {
  // Properties of the request class
  type: number;

  // Public constructor to create the request object
  constructor(type: number) {
    this.type = type;
  }

  // Static builder method to create the request object
  public static builder(): GetReportTagsBuilder {
    return new GetReportTagsBuilder();
  }
}

// Builder class for GetReportTagsRequest
export class GetReportTagsBuilder {
  private type: number | undefined;
  // Add other properties as needed

  public setType(type: number): GetReportTagsBuilder {
    this.type = type;
    return this;
  }

  // Build method to create the final GetReportTagsRequest object
  public build(): GetReportTagsRequest {
    return new GetReportTagsRequest(this.type);
  }
}

export default GetReportTagsRequest;
