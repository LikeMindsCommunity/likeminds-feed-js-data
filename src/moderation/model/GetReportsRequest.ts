import { FilterType } from "../enums";

class GetReportsRequest {
  page: number;
  pageSize?: number;
  filterTypes?: FilterType[];
  isClosed?: boolean;

  constructor(page: number, pageSize?: number, filterTypes?: FilterType[], isClosed?: boolean) {
    this.page = page;
    this.pageSize = pageSize;
    this.filterTypes = filterTypes;
    this.isClosed = isClosed;
  }

  public static builder(): GetReportsRequestBuilder {
    return new GetReportsRequestBuilder();
  }
}

class GetReportsRequestBuilder {
  private page!: number;
  private pageSize?: number;
  private filterTypes?: FilterType[];
  private isClosed?: boolean;

  public setPage(page: number): GetReportsRequestBuilder {
    this.page = page;
    return this;
  }

  public setPageSize(pageSize: number): GetReportsRequestBuilder {
    this.pageSize = pageSize;
    return this;
  }

  public setFilterType(filterTypes: FilterType[]): GetReportsRequestBuilder {
    this.filterTypes = filterTypes;
    return this;
  }

  public setIsClosed(isClosed: boolean): GetReportsRequestBuilder {
    this.isClosed = isClosed;
    return this;
  }

  public build(): GetReportsRequest {
    return new GetReportsRequest(this.page, this.pageSize, this.filterTypes, this.isClosed);
  }
}

export default GetReportsRequest;
