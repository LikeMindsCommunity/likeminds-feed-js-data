class GetTopicsRequest {
  // Properties of the request class
  isEnabled: boolean | null;
  page: number | undefined;
  pageSize: number | undefined;
  search?: string | undefined;
  searchType?: string | undefined;
  parentIds?: string[] | null;
  orderBy?: string[] | null;

  // Public constructor to create the request object
  constructor(
    isEnabled: boolean | null,
    page: number,
    pageSize: number,
    search?: string,
    searchType?: string,
    parentIds?: string[] | null,
    orderBy?: string[] | null
  ) {
    this.isEnabled = isEnabled;
    this.search = search;
    this.page = page;
    this.pageSize = pageSize;
    this.searchType = searchType;
    this.parentIds = parentIds;
    this.orderBy = orderBy;
  }

  // Static builder method to create the request object
  public static builder(): GetTopicsRequestBuilder {
    return new GetTopicsRequestBuilder();
  }
}

// Builder class for GetTopicsRequest
export class GetTopicsRequestBuilder {
  isEnabled: boolean | null;
  page: number | undefined;
  pageSize: number | undefined;
  search?: string | undefined;
  searchType?: string | undefined;
  parentIds?: string[] | null;
  orderBy?: string[] | null;
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
  public setParentIds(parentIds: string[] | null): GetTopicsRequestBuilder {
    this.parentIds = parentIds;
    return this;
  }
  public setOrderBy(orderBy: string[] | null): GetTopicsRequestBuilder {
    this.orderBy = orderBy;
    return this;
  }

  // Build method to create the final GetTopicsRequest object
  public build(): GetTopicsRequest {
    if (!(this.page && this.pageSize)) {
      throw new Error("Some parameters are missing");
    }

    return new GetTopicsRequest(
      this.isEnabled,
      this.page,
      this.pageSize,
      this.search,
      this.searchType,
      this.parentIds,
      this.orderBy
    );
  }
}

export default GetTopicsRequest;
