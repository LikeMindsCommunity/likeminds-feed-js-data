class GetPendingPostModerationRequest {
    page: number;
    pageSize?: number;
  
    constructor(page: number, pageSize?: number) {
      this.page = page;
      this.pageSize = pageSize;
    }
  
    public static builder(): GetPendingPostModerationRequestBuilder {
      return new GetPendingPostModerationRequestBuilder();
    }
  }
  
  export class GetPendingPostModerationRequestBuilder {
    private page: number | undefined;
    private pageSize: number | undefined;
  
    public setPage(page: number): GetPendingPostModerationRequestBuilder {
      this.page = page;
      return this;
    }
  
    public setPageSize(pageSize: number): GetPendingPostModerationRequestBuilder {
      this.pageSize = pageSize;
      return this;
    }
  
    public build(): GetPendingPostModerationRequest {
      if (this.page === undefined) {
        throw new Error("Page is required.");
      }
  
      return new GetPendingPostModerationRequest(this.page, this.pageSize);
    }
  }
  
  export default GetPendingPostModerationRequest;
  