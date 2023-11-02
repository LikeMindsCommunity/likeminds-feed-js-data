// import Attachment from "./Attachment";

class GetPostLikesRequest {
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
  public static builder(): GetPostLikesRequestBuilder {
    return new GetPostLikesRequestBuilder();
  }
}

// Builder class for Attachment
export class GetPostLikesRequestBuilder {
  private postId: string | undefined;
  private page: number | undefined;
  private pageSize: number | undefined;
  // Add other properties as needed

  public setpostId(postId: string): GetPostLikesRequestBuilder {
    this.postId = postId;
    return this;
  }

  public setpage(page: number): GetPostLikesRequestBuilder {
    this.page = page;
    return this;
  }

  public setpageSize(pageSize: number): GetPostLikesRequestBuilder {
    this.pageSize = pageSize;
    return this;
  }

  // Build method to create the final Attachment object
  public build(): GetPostLikesRequest {
    if (!this.postId || !this.page || !this.pageSize) {
      throw new Error("postId, page and pageSize are required.");
    }

    return new GetPostLikesRequest(this.postId, this.page, this.pageSize);
  }
}

export default GetPostLikesRequest;
