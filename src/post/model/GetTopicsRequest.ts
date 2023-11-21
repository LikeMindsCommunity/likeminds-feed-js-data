class GetTopicsRequest {
  // Properties of the request class
  isEnabled: boolean | null;
  search: string | undefined;
  searchType: string | undefined;
  page: number | undefined;
  pageSize: number | undefined;

  // Public constructor to create the request object
  constructor(
    isEnabled: boolean | null,
    search: string,
    searchType: string,
    page: number,
    pageSize: number
  ) {
    this.isEnabled = isEnabled;
    this.search = search;
    this.page = page;
    this.pageSize = pageSize;
    this.searchType = searchType;
  }

  // Static builder method to create the request object
  public static builder(): GetTopicsRequestBuilder {
    return new GetTopicsRequestBuilder();
  }
}

// Builder class for GetTopicsRequest
export class GetTopicsRequestBuilder {
  isEnabled: boolean | null;
  search: string | undefined;
  searchType: string | undefined;
  page: number | undefined;
  pageSize: number | undefined;
  // Add other properties as needed

  public setIsEnabled(isEnabled: boolean | null): GetTopicsRequestBuilder {
    this.isEnabled = isEnabled;
    return this;
  }
  public setSearch(search: string): GetTopicsRequestBuilder {
    this.search = search;
    return this;
  }
  public setSearchType(searchType: string): GetTopicsRequestBuilder {
    this.searchType = searchType;
    return this;
  }
  public setPage(page: number): GetTopicsRequestBuilder {
    this.page = page;
    return this;
  }
  public setPageSize(pageSize: number): GetTopicsRequestBuilder {
    this.pageSize = pageSize;
    return this;
  }

  // Build method to create the final GetTopicsRequest object
  public build(): GetTopicsRequest {
    if (
      !(
        this.page &&
        this.pageSize &&
        this.search !== undefined &&
        this.searchType
      )
    ) {
      throw new Error("Some parameters are missing");
    }

    return new GetTopicsRequest(
      this.isEnabled,
      this.search,
      this.searchType,
      this.page,
      this.pageSize
    );
  }
}

export default GetTopicsRequest;
