import { FilterType } from "../types/types";

class GetReportsRequest {
  page: number;
  pageSize?: number;
  filterType?: FilterType[];
  isClosed?: boolean;

  constructor(page: number, pageSize?: number, filterType?: FilterType[], isClosed?: boolean) {
    this.page = page;
    this.pageSize = pageSize;
    this.filterType = filterType;
    this.isClosed = isClosed;
  }

  public static builder(): GetReportsRequestBuilder {
    return new GetReportsRequestBuilder();
  }
}

class GetReportsRequestBuilder {
  private page!: number;
  private pageSize?: number;
  private filterType?: FilterType[];
  private isClosed?: boolean;

  public setPage(page: number): GetReportsRequestBuilder {
    this.page = page;
    return this;
  }

  public setPageSize(pageSize: number): GetReportsRequestBuilder {
    this.pageSize = pageSize;
    return this;
  }

  public setFilterType(filterType: FilterType[]): GetReportsRequestBuilder {
    this.filterType = filterType;
    return this;
  }

  public setIsClosed(isClosed: boolean): GetReportsRequestBuilder {
    this.isClosed = isClosed;
    return this;
  }

  public build(): GetReportsRequest {
    return new GetReportsRequest(this.page, this.pageSize, this.filterType, this.isClosed);
  }
}

export default GetReportsRequest;
