class SavePostRequest {
  // Properties of the request class
  postId: string;
  // Public constructor to create the request object
  constructor(postId: string) {
    this.postId = postId;
  }

  // Static builder method to create the request object
  public static builder(): SavePostRequestBuilder {
    return new SavePostRequestBuilder();
  }
}

// Builder class for Attachment
export class SavePostRequestBuilder {
  private postId: string;

  // Add other properties as needed

  public setpostId(postId: string): SavePostRequestBuilder {
    this.postId = postId;
    return this;
  }

  // Build method to create the final Attachment object
  public build(): SavePostRequest {
    if (!this.postId) {
      throw new Error("postId is required.");
    }

    return new SavePostRequest(this.postId);
  }
}

export default SavePostRequest;
