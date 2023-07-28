class GetCommentLikesRequest {
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
  public static builder(): GetCommentLikesRequestBuilder {
    return new GetCommentLikesRequestBuilder();
  }
}

// Builder class for GetCommentLikesRequest
export class GetCommentLikesRequestBuilder {
  private postId: string | undefined;
  private commentId: string | undefined;
  private page: number | undefined;
  private pageSize: number | undefined;
  // Add other properties as needed

  public setpostId(postId: string): GetCommentLikesRequestBuilder {
    this.postId = postId;
    return this;
  }

  public setcommentId(commentId: string): GetCommentLikesRequestBuilder {
    this.commentId = commentId;
    return this;
  }

  public setpage(page: number): GetCommentLikesRequestBuilder {
    this.page = page;
    return this;
  }

  public setpageSize(pageSize: number): GetCommentLikesRequestBuilder {
    this.pageSize = pageSize;
    return this;
  }

  // Build method to create the final GetCommentLikesRequest object
  public build(): GetCommentLikesRequest {
    if (!this.postId || !this.commentId) {
      throw new Error("postId and commentId are required.");
    }

    return new GetCommentLikesRequest(
      this.postId,
      this.commentId,
      this.page,
      this.pageSize
    );
  }
}

export default GetCommentLikesRequest;
