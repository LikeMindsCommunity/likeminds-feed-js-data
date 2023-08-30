class GetTaggingListRequest {
  // Properties of the request class
  page: number;
  pageSize: number;
  searchName?: string;

  // Public constructor to create the request object
  constructor(page: number, pageSize: number, searchName: string) {
    this.page = page;
    this.pageSize = pageSize;
    this.searchName = searchName;
  }

  // Static builder method to create the request object
  public static builder(): GetTaggingListRequestBuilder {
    return new GetTaggingListRequestBuilder();
  }
}

// Builder class for GetTaggingListRequest
export class GetTaggingListRequestBuilder {
  private page: number | undefined;
  private pageSize: number | undefined;
  private searchName: string | undefined;
  // Add other properties as needed

  public setpage(page: number): GetTaggingListRequestBuilder {
    this.page = page;
    return this;
  }

  public setpageSize(pageSize: number): GetTaggingListRequestBuilder {
    this.pageSize = pageSize;
    return this;
  }

  public setSearchName(searchName: string): GetTaggingListRequestBuilder {
    this.searchName = searchName;
    return this;
  }

  // Build method to create the final GetTaggingListRequest object
  public build(): GetTaggingListRequest {
    if (!this.page || !this.pageSize) {
      throw new Error("UUID and DeviceI are required.");
    }

    return new GetTaggingListRequest(this.page, this.pageSize, this.searchName);
  }
}

export default GetTaggingListRequest;
