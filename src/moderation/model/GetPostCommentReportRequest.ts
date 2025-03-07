class GetPostCommentReportRequest {
  page: number
  pageSize?: number

  constructor(page: number, pageSize?: number) {
    this.page = page
    this.pageSize = pageSize
  }

  public static builder(): GetPostCommentReportRequestBuilder {
    return new GetPostCommentReportRequestBuilder()
  }
}

export class GetPostCommentReportRequestBuilder {
  private page!: number
  private pageSize?: number

  public setPage(page: number): GetPostCommentReportRequestBuilder {
    this.page = page
    return this
  }

  public setPageSize(pageSize?: number): GetPostCommentReportRequestBuilder {
    this.pageSize = pageSize
    return this
  }

  public build(): GetPostCommentReportRequest {
    return new GetPostCommentReportRequest(this.page, this.pageSize)
  }
}

export default GetPostCommentReportRequest;
