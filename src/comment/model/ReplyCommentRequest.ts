class ReplyCommentRequest {
  // Properties of the request class
  postId: string;
  commentId: string;
  text: string;
  tempId?: string;

  // Public constructor to create the request object
  constructor(postId: string, commentId: string, text: string, tempId: string) {
    this.postId = postId;
    this.commentId = commentId;
    this.text = text;
    this.tempId = tempId;
  }

  // Static builder method to create the request object
  public static builder(): ReplyCommentRequestBuilder {
    return new ReplyCommentRequestBuilder();
  }
}

// Builder class for EditCommentRequest
export class ReplyCommentRequestBuilder {
  postId: string | undefined;
  commentId: string | undefined;
  text: string | undefined;
  private tempId: string;
  // Add other properties as needed

  public setPostId(postId: string): ReplyCommentRequestBuilder {
    this.postId = postId;
    return this;
  }

  public setCommentId(commentId: string): ReplyCommentRequestBuilder {
    this.commentId = commentId;
    return this;
  }

  public setText(text: string): ReplyCommentRequestBuilder {
    this.text = text;
    return this;
  }

  public setTempId(tempId: string): ReplyCommentRequestBuilder {
    this.tempId = tempId;
    return this;
  }

  // Build method to create the final EditCommentRequest object
  public build(): ReplyCommentRequest {
    if (!this.postId || !this.commentId) {
      throw new Error("postId and commentId are required.");
    }

    return new ReplyCommentRequest(
      this.postId,
      this.commentId,
      this.text,
      this.tempId
    );
  }
}

export default ReplyCommentRequest;
