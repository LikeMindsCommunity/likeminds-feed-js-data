// Main Request Class
class UpdateUserTopicsRequest {
  uuid: string;
  topicsIds: Record<string, boolean>;

  constructor(uuid: string, topicsIds: Record<string, boolean>) {
    this.uuid = uuid;
    this.topicsIds = topicsIds;
  }

  public static builder(): UpdateUserTopicsRequestBuilder {
    return new UpdateUserTopicsRequestBuilder();
  }
}

// Builder Class for UpdateUserTopicsRequest
export class UpdateUserTopicsRequestBuilder {
  private uuid: string | undefined;
  private topicsIds: Record<string, boolean> | undefined;

  public setUuid(uuid: string): UpdateUserTopicsRequestBuilder {
    this.uuid = uuid;
    return this;
  }

  public setTopicsIds(
    topicsIds: Record<string, boolean>
  ): UpdateUserTopicsRequestBuilder {
    this.topicsIds = topicsIds;
    return this;
  }

  public build(): UpdateUserTopicsRequest {
    if (!this.uuid || !this.topicsIds) {
      throw new Error(
        "Missing required parameters: uuid and topicsIds are mandatory."
      );
    }
    return new UpdateUserTopicsRequest(this.uuid, this.topicsIds);
  }
}

export default UpdateUserTopicsRequest;
