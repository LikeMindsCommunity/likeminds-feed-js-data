class HidePostRequest {
  // Properties of the request class
  postId: string;
  // Public constructor to create the request object
  constructor(postId: string) {
    this.postId = postId;
  }

  // Static builder method to create the request object
  public static builder(): HidePostRequestBuilder {
    return new HidePostRequestBuilder();
  }
}

// Builder class for AddPostRequest
export class HidePostRequestBuilder {
  private postId: string;
  // Add other properties as needed
  public setPostId(postId: string): HidePostRequestBuilder {
    this.postId = postId;
    return this;
  }
  // Build method to create the final AddPostRequest object
  public build(): HidePostRequest {
    return new HidePostRequest(this.postId);
  }
}

export default HidePostRequest;
