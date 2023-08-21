class GetTaggingListRequest {
  // Properties of the request class
  searchName: string;
  page: number;
  pageSize: number;

  // Public constructor to create the request object
  constructor(searchName: string, page: number, pageSize: number) {
    this.searchName = searchName;
    this.page = page;
    this.pageSize = pageSize;
  }

  // Static builder method to create the request object
  public static builder(): GetTaggingListRequestBuilder {
    return new GetTaggingListRequestBuilder();
  }
}

// Builder class for Attachment
export class GetTaggingListRequestBuilder {
  private searchName: string | undefined;
  private page: number | undefined;
  private pageSize: number | undefined;
  // Add other properties as needed

  public setsearchName(searchName: string): GetTaggingListRequestBuilder {
    this.searchName = searchName;
    return this;
  }

  public setpage(page: number): GetTaggingListRequestBuilder {
    this.page = page;
    return this;
  }

  public setpageSize(pageSize: number): GetTaggingListRequestBuilder {
    this.pageSize = pageSize;
    return this;
  }

  // Build method to create the final Attachment object
  public build(): GetTaggingListRequest {
    if (!this.searchName || !this.page || !this.pageSize) {
      throw new Error("searchName, page and pageSize are required.");
    }

    return new GetTaggingListRequest(this.searchName, this.page, this.pageSize);
  }
}

export default GetTaggingListRequest;
