import { ReportEntityType } from "../enums";

class PostReportRequest {
  entityId: string;
  accusedUuid: string;
  entityType: ReportEntityType;
  tagId: number;
  reason?: string;

  constructor(
    entityId: string,
    accusedUuid: string,
    entityType: ReportEntityType,
    tagId: number,
    reason?: string,
  ) {
    this.entityId = entityId;
    this.accusedUuid = accusedUuid;
    this.entityType = entityType;
    this.tagId = tagId;
    this.reason = reason;
  }

  public static builder(): PostReportBuilder {
    return new PostReportBuilder();
  }
}

export class PostReportBuilder {
  private entityId?: string;
  private accusedUuid?: string;
  private entityType?: ReportEntityType;
  private tagId?: number;
  private reason?: string;

  public setEntityId(entityId: string): PostReportBuilder {
    this.entityId = entityId;
    return this;
  }

  public setAccusedUUID(accusedUuid: string): PostReportBuilder {
    this.accusedUuid = accusedUuid;
    return this;
  }

  public setEntityType(entityType: ReportEntityType): PostReportBuilder {
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

  public build(): PostReportRequest {
    if (!this.entityId || !this.accusedUuid || this.entityType === undefined || this.tagId === undefined) {
      throw new Error("entityId, accusedUUID, entityType, and tagId are required.");
    }

    return new PostReportRequest(
      this.entityId,
      this.accusedUuid,
      this.entityType,
      this.tagId,
      this.reason,
    );
  }
}

export default PostReportRequest;
