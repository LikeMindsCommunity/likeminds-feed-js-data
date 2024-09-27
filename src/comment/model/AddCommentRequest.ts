class AddCommentRequest {
  // Properties of the request class
  postId: string;
  text: string;
  tempId?: string;

  // Public constructor to create the request object
  constructor(postId: string, text: string, tempId: string) {
    this.postId = postId;
    this.text = text;
    this.tempId = tempId;
  }

  // Static builder method to create the request object
  public static builder(): AddCommentRequestBuilder {
    return new AddCommentRequestBuilder();
  }
}

// Builder class for AddCommentRequest
export class AddCommentRequestBuilder {
  private postId: string | undefined;
  private text: string | undefined;
  private tempId: string;
  // Add other properties as needed

  public setPostId(postId: string): AddCommentRequestBuilder {
    this.postId = postId;
    return this;
  }

  public setText(text: string): AddCommentRequestBuilder {
    this.text = text;
    return this;
  }

  public setTempId(tempId: string): AddCommentRequestBuilder {
    this.tempId = tempId;
    return this;
  }
  // Build method to create the final AddCommentRequest object
  public build(): AddCommentRequest {
    if (!this.postId || !this.text) {
      throw new Error("postId and text are required.");
    }

    return new AddCommentRequest(this.postId, this.text, this.tempId);
  }
}

export default AddCommentRequest;
