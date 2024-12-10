// Main Request Class
class GetUserTopicsRequest {
  uuids: string[];

  constructor(uuids: string[]) {
    this.uuids = uuids;
  }

  public static builder(): GetUserTopicsRequestBuilder {
    return new GetUserTopicsRequestBuilder();
  }
}

// Builder Class for GetUserTopicsRequest
export class GetUserTopicsRequestBuilder {
  private uuids: string[] | undefined;

  public setUuids(uuids: string[]): GetUserTopicsRequestBuilder {
    this.uuids = uuids;
    return this;
  }

  public build(): GetUserTopicsRequest {
    if (!this.uuids || this.uuids.length === 0) {
      throw new Error("Missing required parameter: uuids must not be empty.");
    }
    return new GetUserTopicsRequest(this.uuids);
  }
}

export default GetUserTopicsRequest;
