class PinPostRequest {
  // Properties of the request class
  postId: string;
  // Public constructor to create the request object
  constructor(postId: string) {
    this.postId = postId;
  }

  // Static builder method to create the request object
  public static builder(): PinPostRequestBuilder {
    return new PinPostRequestBuilder();
  }
}

// Builder class for Attachment
export class PinPostRequestBuilder {
  private postId: string;

  // Add other properties as needed

  public setpostId(postId: string): PinPostRequestBuilder {
    this.postId = postId;
    return this;
  }

  // Build method to create the final Attachment object
  public build(): PinPostRequest {
    if (!this.postId) {
      throw new Error("postId is required.");
    }

    return new PinPostRequest(this.postId);
  }
}

export default PinPostRequest;
