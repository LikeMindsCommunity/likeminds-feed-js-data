class GetCommentRequest {
  // Properties of the request class
  postId: string;
  commentId: string;
  page: number;
  pageSize: number;

  // Public constructor to create the request object
  constructor(
    postId: string,
    commentId: string,
    page: number,
    pageSize: number
  ) {
    this.postId = postId;
    this.commentId = commentId;
    this.page = page;
    this.pageSize = pageSize;
  }

  // Static builder method to create the request object
  public static builder(): GetCommentRequestBuilder {
    return new GetCommentRequestBuilder();
  }
}

// Builder class for GetCommentRequest
export class GetCommentRequestBuilder {
  private postId: string | undefined;
  private commentId: string | undefined;
  private page: number | undefined;
  private pageSize: number | undefined;
  // Add other properties as needed

  public setpostId(postId: string): GetCommentRequestBuilder {
    this.postId = postId;
    return this;
  }

  public setcommentId(commentId: string): GetCommentRequestBuilder {
    this.commentId = commentId;
    return this;
  }

  public setpage(page: number): GetCommentRequestBuilder {
    this.page = page;
    return this;
  }

  public setpageSize(pageSize: number): GetCommentRequestBuilder {
    this.pageSize = pageSize;
    return this;
  }

  // Build method to create the final GetCommentRequest object
  public build(): GetCommentRequest {
    if (!this.postId || !this.commentId) {
      throw new Error("postId and commentId are required.");
    }

    return new GetCommentRequest(
      this.postId,
      this.commentId,
      this.page,
      this.pageSize
    );
  }
}

export default GetCommentRequest;
