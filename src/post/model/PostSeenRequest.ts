class PostSeenRequest {
  // Properties of the request class
  postIds: string[];

  // Constructor to create the request object
  constructor(postIds: string[]) {
    this.postIds = postIds;
  }

  // Static builder method to create the request object
  public static builder(): PostSeenRequestBuilder {
    return new PostSeenRequestBuilder();
  }
}

// Builder class for PostSeenRequest
export class PostSeenRequestBuilder {
  private postIds?: string[];

  public setPostIds(postIds: string[]): PostSeenRequestBuilder {
    this.postIds = postIds;
    return this;
  }

  // Build method to create the final PostSeenRequest object
  public build(): PostSeenRequest {
    if (!this.postIds || this.postIds.length === 0) {
      throw new Error("postIds is required and cannot be empty.");
    }

    return new PostSeenRequest(this.postIds);
  }
}

export default PostSeenRequest;
