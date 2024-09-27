class GetNotificationFeedRequest {
  // Properties of the request class
  page: number;
  pageSize: number;

  // Public constructor to create the request object
  constructor(page: number, pageSize: number) {
    this.page = page;
    this.pageSize = pageSize;
  }

  // Static builder method to create the request object
  public static builder(): GetNotificationFeedRequestBuilder {
    return new GetNotificationFeedRequestBuilder();
  }
}

// Builder class for GetNotificationFeedRequest
export class GetNotificationFeedRequestBuilder {
  private page: number | undefined;
  private pageSize: number | undefined;
  // Add other properties as needed

  public setPage(page: number): GetNotificationFeedRequestBuilder {
    this.page = page;
    return this;
  }

  public setPageSize(pageSize: number): GetNotificationFeedRequestBuilder {
    this.pageSize = pageSize;
    return this;
  }

  // Build method to create the final GetNotificationFeedRequest object
  public build(): GetNotificationFeedRequest {
    if (!this.page || !this.pageSize) {
      throw new Error("UUID and DeviceI are required.");
    }

    return new GetNotificationFeedRequest(this.page, this.pageSize);
  }
}

export default GetNotificationFeedRequest;
