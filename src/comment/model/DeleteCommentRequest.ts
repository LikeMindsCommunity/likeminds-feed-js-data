class DeleteCommentRequest {
  // Properties of the request class
  postId: string;
  commentId: string;
  reason?: string;

  // Public constructor to create the request object
  constructor(postId: string, commentId: string, reason?: string) {
    this.postId = postId;
    this.commentId = commentId;
    this.reason = reason;
  }

  // Static builder method to create the request object
  public static builder(): DeleteCommentRequestBuilder {
    return new DeleteCommentRequestBuilder();
  }
}

// Builder class for DeleteCommentRequest
export class DeleteCommentRequestBuilder {
  private postId: string | undefined;
  private commentId: string | undefined;
  private reason?: string | undefined;
  // Add other properties as needed

  public setPostId(postId: string): DeleteCommentRequestBuilder {
    this.postId = postId;
    return this;
  }

  public setCommentId(commentId: string): DeleteCommentRequestBuilder {
    this.commentId = commentId;
    return this;
  }

  public setReason(reason: string): DeleteCommentRequestBuilder {
    this.reason = reason;
    return this;
  }

  // Build method to create the final DeleteCommentRequest object
  public build(): DeleteCommentRequest {
    if (!this.postId || !this.commentId) {
      throw new Error("postId and commentId are required.");
    }

    return new DeleteCommentRequest(this.postId, this.commentId, this.reason);
  }
}

export default DeleteCommentRequest;
