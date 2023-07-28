class LikeCommentRequest {
  // Properties of the request class
  postId: string;
  commentId: string;

  // Public constructor to create the request object
  constructor(postId: string, commentId: string) {
    this.postId = postId;
    this.commentId = commentId;
  }

  // Static builder method to create the request object
  public static builder(): LikeCommentRequestBuilder {
    return new LikeCommentRequestBuilder();
  }
}

// Builder class for LikeCommentRequest
export class LikeCommentRequestBuilder {
  private postId: string | undefined;
  private commentId: string | undefined;
  // Add other properties as needed

  public setpostId(postId: string): LikeCommentRequestBuilder {
    this.postId = postId;
    return this;
  }

  public setcommentId(commentId: string): LikeCommentRequestBuilder {
    this.commentId = commentId;
    return this;
  }

  // Build method to create the final LikeCommentRequest object
  public build(): LikeCommentRequest {
    if (!this.postId || !this.commentId) {
      throw new Error("postId and commentId are required.");
    }

    return new LikeCommentRequest(this.postId, this.commentId);
  }
}

export default LikeCommentRequest;
