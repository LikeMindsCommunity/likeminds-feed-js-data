class LikePostRequest {
  // Properties of the request class
  postId: string;
  // Public constructor to create the request object
  constructor(postId: string) {
    this.postId = postId;
  }

  // Static builder method to create the request object
  public static builder(): LikePostRequestBuilder {
    return new LikePostRequestBuilder();
  }
}

// Builder class for Attachment
export class LikePostRequestBuilder {
  private postId: string;

  // Add other properties as needed

  public setpostId(postId: string): LikePostRequestBuilder {
    this.postId = postId;
    return this;
  }

  // Build method to create the final Attachment object
  public build(): LikePostRequest {
    if (!this.postId) {
      throw new Error("postId is required.");
    }

    return new LikePostRequest(this.postId);
  }
}

export default LikePostRequest;
