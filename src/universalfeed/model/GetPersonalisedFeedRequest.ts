class GetPersonalisedFeedRequest {
    // Properties of the request class
    page: number;
    pageSize?: number;
    shouldRecompute?: boolean;
    shouldReorder?: boolean;
  
    // Constructor to create the request object
    constructor(
      page: number,
      pageSize?: number,
      shouldRecompute?: boolean,
      shouldReorder?: boolean
    ) {
      this.page = page;
      this.pageSize = pageSize;
      this.shouldRecompute = shouldRecompute;
      this.shouldReorder = shouldReorder;
    }
  
    // Static builder method to create the request object
    public static builder(): GetPersonalisedFeedRequestBuilder {
      return new GetPersonalisedFeedRequestBuilder();
    }
  }
  
  // Builder class for GetPersonalisedFeedRequest
  export class GetPersonalisedFeedRequestBuilder {
    private page?: number;
    private pageSize?: number;
    private shouldRecompute?: boolean;
    private shouldReorder?: boolean;
  
    public setPage(page: number): GetPersonalisedFeedRequestBuilder {
      this.page = page;
      return this;
    }
  
    public setPageSize(pageSize: number): GetPersonalisedFeedRequestBuilder {
      this.pageSize = pageSize;
      return this;
    }
  
    public setShouldRecompute(
      shouldRecompute: boolean
    ): GetPersonalisedFeedRequestBuilder {
      this.shouldRecompute = shouldRecompute;
      return this;
    }
  
    public setShouldReorder(
      shouldReorder: boolean
    ): GetPersonalisedFeedRequestBuilder {
      this.shouldReorder = shouldReorder;
      return this;
    }
  
    // Build method to create the final GetPersonalisedFeedRequest object
    public build(): GetPersonalisedFeedRequest {
      if (this.page === undefined) {
        throw new Error("page is required.");
      }
  
      return new GetPersonalisedFeedRequest(
        this.page,
        this.pageSize,
        this.shouldRecompute,
        this.shouldReorder
      );
    }
  }
  
  export default GetPersonalisedFeedRequest;
  