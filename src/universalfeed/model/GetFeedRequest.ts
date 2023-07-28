class GetFeedRequest {
  // Properties of the request class
  page: number;
  pageSize: number;

  // Public constructor to create the request object
  constructor(page: number, pageSize: number) {
    this.page = page;
    this.pageSize = pageSize;
  }

  // Static builder method to create the request object
  public static builder(): GetFeedRequestBuilder {
    return new GetFeedRequestBuilder();
  }
}

// Builder class for GetFeedRequest
export class GetFeedRequestBuilder {
  private page: number | undefined;
  private pageSize: number | undefined;
  // Add other properties as needed

  public setpage(page: number): GetFeedRequestBuilder {
    this.page = page;
    return this;
  }

  public setpageSize(pageSize: number): GetFeedRequestBuilder {
    this.pageSize = pageSize;
    return this;
  }

  // Build method to create the final GetFeedRequest object
  public build(): GetFeedRequest {
    if (!this.page || !this.pageSize) {
      throw new Error("page and pageSize are required.");
    }

    return new GetFeedRequest(this.page, this.pageSize);
  }
}

export default GetFeedRequest;
