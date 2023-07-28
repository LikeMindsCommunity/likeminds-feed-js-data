class GetPostRequest {
  // Properties of the request class
  postId: string;
  page: number;
  pageSize: number;

  // Public constructor to create the request object
  constructor(postId: string, page: number, pageSize: number) {
    this.postId = postId;
    this.page = page;
    this.pageSize = pageSize;
  }

  // Static builder method to create the request object
  public static builder(): GetPostRequestBuilder {
    return new GetPostRequestBuilder();
  }
}

// Builder class for Attachment
export class GetPostRequestBuilder {
  private postId: string | undefined;
  private page: number | undefined;
  private pageSize: number | undefined;
  // Add other properties as needed

  public setpostId(postId: string): GetPostRequestBuilder {
    this.postId = postId;
    return this;
  }

  public setpage(page: number): GetPostRequestBuilder {
    this.page = page;
    return this;
  }

  public setpageSize(pageSize: number): GetPostRequestBuilder {
    this.pageSize = pageSize;
    return this;
  }

  // Build method to create the final Attachment object
  public build(): GetPostRequest {
    if (!this.postId || !this.page || !this.pageSize) {
      throw new Error("postId, page and pageSize are required.");
    }

    return new GetPostRequest(this.postId, this.page, this.pageSize);
  }
}

export default GetPostRequest;
