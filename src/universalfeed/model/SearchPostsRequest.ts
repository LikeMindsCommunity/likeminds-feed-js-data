class SearchPostsRequest {
    // Properties of the request class
    page: number;
    pageSize: number;
    search: string;
    searchType: string;
  
    // Public constructor to create the request object
    constructor(page: number, pageSize: number = 10, search: string, searchType: string) {
      this.page = page;
      this.pageSize = pageSize;
      this.search = search;
      this.searchType = searchType;
    }
  
    // Static builder method to create the request object
    public static builder(): SearchPostsRequestBuilder {
      return new SearchPostsRequestBuilder();
    }
  }

  
  // Builder class for GetFeedRequest
  export class SearchPostsRequestBuilder {
    private page: number;
    private pageSize: number;
    private search: string;
    private searchType: string;
    // Add other properties as needed
  
    public setPage(page: number): SearchPostsRequestBuilder {
      this.page = page;
      return this;
    }
  
    public setSearch(search: string): SearchPostsRequestBuilder {
      this.search = search;
      return this;
    }
  
    public setPageSize(pageSize: number): SearchPostsRequestBuilder {
      this.pageSize = pageSize;
      return this;
    }

    public setSearchType(searchType: string): SearchPostsRequestBuilder {
        this.searchType = searchType;
        return this;
    }

  
    // Build method to create the final GetFeedRequest object
    public build(): SearchPostsRequest {
      if (!this.page || !this.pageSize) {
        throw new Error("page and pageSize are required.");
      }
      if(!this.search || !this.searchType) {
        throw new Error("search and searchType are required.");
      }
  
      return new SearchPostsRequest(this.page, this.pageSize, this.search, this.searchType);
    }
  }
  
  export default SearchPostsRequest;