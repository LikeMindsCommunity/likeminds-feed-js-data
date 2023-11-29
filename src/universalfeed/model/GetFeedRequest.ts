class GetFeedRequest {
  // Properties of the request class
  page: number;
  pageSize: number;
  topicIds: string[];

  // Public constructor to create the request object
  constructor(page: number, pageSize: number, topicIds) {
    this.page = page;
    this.pageSize = pageSize;
    this.topicIds = topicIds;
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
  topicIds: string[] | undefined;
  // Add other properties as needed

  public setpage(page: number): GetFeedRequestBuilder {
    this.page = page;
    return this;
  }

  public setTopicIds(topicIds: string[]): GetFeedRequestBuilder {
    this.topicIds = topicIds;
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

    return new GetFeedRequest(this.page, this.pageSize, this.topicIds);
  }
}

export default GetFeedRequest;
