class EditCommentRequest {
  // Properties of the request class
  postId: string;
  commentId: string;
  text: string;

  // Public constructor to create the request object
  constructor(postId: string, commentId: string, text: string) {
    this.postId = postId;
    this.commentId = commentId;
    this.text = text;
  }

  // Static builder method to create the request object
  public static builder(): EditCommentRequestBuilder {
    return new EditCommentRequestBuilder();
  }
}

// Builder class for EditCommentRequest
export class EditCommentRequestBuilder {
  private postId: string | undefined;
  private commentId: string | undefined;
  private text: string | undefined;
  // Add other properties as needed

  public setPostId(postId: string): EditCommentRequestBuilder {
    this.postId = postId;
    return this;
  }

  public setCommentId(commentId: string): EditCommentRequestBuilder {
    this.commentId = commentId;
    return this;
  }

  public setText(text: string): EditCommentRequestBuilder {
    this.text = text;
    return this;
  }

  // Build method to create the final EditCommentRequest object
  public build(): EditCommentRequest {
    if (!this.postId || !this.commentId) {
      throw new Error("postId and commentId are required.");
    }

    return new EditCommentRequest(this.postId, this.commentId, this.text);
  }
}

export default EditCommentRequest;
