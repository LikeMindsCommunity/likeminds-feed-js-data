class DeleteTemporaryPostRequest {
  temporaryPostId: string;

  constructor(temporaryPostId: string) {
    this.temporaryPostId = temporaryPostId;
  }

  public static builder(): DeleteTemporaryPostRequestBuilder {
    return new DeleteTemporaryPostRequestBuilder();
  }
}

export class DeleteTemporaryPostRequestBuilder {
  private temporaryPostId?: string;

  public setTemporaryPostId(
    temporaryPostId: string
  ): DeleteTemporaryPostRequestBuilder {
    this.temporaryPostId = temporaryPostId;
    return this;
  }

  public build(): DeleteTemporaryPostRequest {
    if (!this.temporaryPostId) {
      throw new Error("temporaryPostId is required.");
    }

    return new DeleteTemporaryPostRequest(this.temporaryPostId);
  }
}

export default DeleteTemporaryPostRequest;
