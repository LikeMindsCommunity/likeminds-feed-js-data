class ActivityEntityData {
  // Properties of the request class
  id: string;
  action: number;
  actionBy: string[];
  actionOn: string;
  activityText: string;
  createdAt: number;
  cta: string;
  entityId: string;
  entityOwnerId: string;
  entityType: number;
  isRead: boolean;
  updatedAt: number;
  activityEntityData?: any;
  uuid: string;

  // Public constructor to create the request object
  constructor(
    id: string,
    action: number,
    actionBy: string[],
    actionOn: string,
    activityText: string,
    createdAt: number,
    cta: string,
    entityId: string,
    entityOwnerId: string,
    entityType: number,
    isRead: boolean,
    updatedAt: number,
    activityEntityData: any,
    uuid: string,
  ) {
    this.id = id;
    this.action = action;
    this.actionBy = actionBy;
    this.actionOn = actionOn;
    this.activityText = activityText;
    this.createdAt = createdAt;
    this.cta = cta;
    this.entityId = entityId;
    this.entityOwnerId = entityOwnerId;
    this.entityType = entityType;
    this.isRead = isRead;
    this.updatedAt = updatedAt;
    this.activityEntityData = activityEntityData;
    this.uuid = uuid;
  }

  // Static builder method to create the request object
  public static builder(): ActivityEntityDataBuilder {
    return new ActivityEntityDataBuilder();
  }
}

// Builder class for Activity
export class ActivityEntityDataBuilder {
  private id: string | undefined;
  private action: number | undefined;
  private actionBy: string[] | undefined;
  private actionOn: string | undefined;
  private activityText: string | undefined;
  private createdAt: number | undefined;
  private cta: string | undefined;
  private entityId: string | undefined;
  private entityOwnerId: string | undefined;
  private entityType: number | undefined;
  private isRead: boolean | undefined;
  private updatedAt: number | undefined;
  private activityEntityData?: any | undefined;
  private uuid: string | undefined;
  // Add other properties as needed

  public setId(id: string): ActivityEntityDataBuilder {
    this.id = id;
    return this;
  }

  public setAction(action: number): ActivityEntityDataBuilder {
    this.action = action;
    return this;
  }

  public setActionBy(actionBy: string[]): ActivityEntityDataBuilder {
    this.actionBy = actionBy;
    return this;
  }

  public setActionOn(actionOn: string): ActivityEntityDataBuilder {
    this.actionOn = actionOn;
    return this;
  }

  public setActivityText(activityText: string): ActivityEntityDataBuilder {
    this.activityText = activityText;
    return this;
  }

  public setCreatedAt(createdAt: number): ActivityEntityDataBuilder {
    this.createdAt = createdAt;
    return this;
  }

  public setCta(cta: string): ActivityEntityDataBuilder {
    this.cta = cta;
    return this;
  }

  public setEntityId(entityId: string): ActivityEntityDataBuilder {
    this.entityId = entityId;
    return this;
  }

  public setEntityOwnerId(entityOwnerId: string): ActivityEntityDataBuilder {
    this.entityOwnerId = entityOwnerId;
    return this;
  }

  public setEntityType(entityType: number): ActivityEntityDataBuilder {
    this.entityType = entityType;
    return this;
  }

  public setIsRead(isRead: boolean): ActivityEntityDataBuilder {
    this.isRead = isRead;
    return this;
  }

  public setUpdatedAt(updatedAt: number): ActivityEntityDataBuilder {
    this.updatedAt = updatedAt;
    return this;
  }

  public setActivityEntityData(
    activityEntityData: any,
  ): ActivityEntityDataBuilder {
    this.activityEntityData = activityEntityData;
    return this;
  }

  public setUuid(uuid: string): ActivityEntityDataBuilder {
    this.uuid = uuid;
    return this;
  }
  // Add other methods to set other properties as needed

  // Build method to create the final Activity object
  public build(): ActivityEntityData {
    if (!this.id || !this.action || !this.actionBy) {
      throw new Error("Id, action, actionBy are required.");
    }

    return new ActivityEntityData(
      this.id,
      this.action,
      this.actionBy,
      this.actionOn,
      this.activityText,
      this.createdAt,
      this.cta,
      this.entityId,
      this.entityOwnerId,
      this.entityType,
      this.isRead,
      this.updatedAt,
      this.activityEntityData,
      this.uuid,
    );
  }
}

export default ActivityEntityData;
