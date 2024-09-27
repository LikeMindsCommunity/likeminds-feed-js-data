class DeletePostRequest {
  // Properties of the request class
  postId: string;
  deleteReason?: string;

  // Public constructor to create the request object
  constructor(postId: string, deleteReason: string) {
    this.postId = postId;
    this.deleteReason = deleteReason;
  }

  // Static builder method to create the request object
  public static builder(): DeletePostRequestBuilder {
    return new DeletePostRequestBuilder();
  }
}

// Builder class for Attachment
export class DeletePostRequestBuilder {
  private postId?: string | undefined;
  private deleteReason?: string | undefined;
  // Add other properties as needed

  public setPostId(postId: string): DeletePostRequestBuilder {
    this.postId = postId;
    return this;
  }

  public setDeleteReason(deleteReason: string): DeletePostRequestBuilder {
    this.deleteReason = deleteReason;
    return this;
  }

  // Build method to create the final Attachment object
  public build(): DeletePostRequest {
    if (!this.postId) {
      throw new Error("attachmentType and DeletePostRequest are required.");
    }

    return new DeletePostRequest(this.postId, this.deleteReason);
  }
}

export default DeletePostRequest;
