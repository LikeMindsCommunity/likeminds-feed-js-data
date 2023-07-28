class PostReportRequest {
  // Properties of the request class
  entityId: string;
  uuid: string;
  entityType: number;
  tagId: number;
  reason?: string;

  // Public constructor to create the request object
  constructor(
    entityId: string,
    uuid: string,
    entityType: number,
    tagId: number,
    reason?: string
  ) {
    this.entityId = entityId;
    this.uuid = uuid;
    this.entityType = entityType;
    this.tagId = tagId;
    this.reason = reason;
  }

  // Static builder method to create the request object
  public static builder(): PostReportBuilder {
    return new PostReportBuilder();
  }
}

// Builder class for PostReportRequest
export class PostReportBuilder {
  private entityId: string | undefined;
  private uuid: string | undefined;
  private entityType: number | undefined;
  private tagId: number | undefined;
  private reason: string | undefined;
  // Add other properties as needed

  public setEntityId(entityId: string): PostReportBuilder {
    this.entityId = entityId;
    return this;
  }

  public setUuid(uuid: string): PostReportBuilder {
    this.uuid = uuid;
    return this;
  }
  public setEntityType(entityType: number): PostReportBuilder {
    this.entityType = entityType;
    return this;
  }
  public setTagId(tagId: number): PostReportBuilder {
    this.tagId = tagId;
    return this;
  }
  public setReason(reason: string): PostReportBuilder {
    this.reason = reason;
    return this;
  }

  // Build method to create the final PostReportRequest object
  public build(): PostReportRequest {
    if (!this.entityId || !this.uuid || !this.entityType || !this.tagId) {
      throw new Error("entityId, uuid, entityType and tagId are required.");
    }

    return new PostReportRequest(
      this.entityId,
      this.uuid,
      this.entityType,
      this.tagId,
      this.reason
    );
  }
}

export default PostReportRequest;
