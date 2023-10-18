class Activity {
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
  isRead: Boolean;
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
    isRead: Boolean,
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
  public static builder(): ActivityBuilder {
    return new ActivityBuilder();
  }
}

// Builder class for Activity
export class ActivityBuilder {
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

  public setId(id: string): ActivityBuilder {
    this.id = id;
    return this;
  }

  public setAction(action: number): ActivityBuilder {
    this.action = action;
    return this;
  }

  public setActionBy(actionBy: string[]): ActivityBuilder {
    this.actionBy = actionBy;
    return this;
  }

  public setActionOn(actionOn: string): ActivityBuilder {
    this.actionOn = actionOn;
    return this;
  }

  public setActivityText(activityText: string): ActivityBuilder {
    this.activityText = activityText;
    return this;
  }

  public setCreatedAt(createdAt: number): ActivityBuilder {
    this.createdAt = createdAt;
    return this;
  }

  public setCta(cta: string): ActivityBuilder {
    this.cta = cta;
    return this;
  }

  public setEntityId(entityId: string): ActivityBuilder {
    this.entityId = entityId;
    return this;
  }

  public setEntityOwnerId(entityOwnerId: string): ActivityBuilder {
    this.entityOwnerId = entityOwnerId;
    return this;
  }

  public setEntityType(entityType: number): ActivityBuilder {
    this.entityType = entityType;
    return this;
  }

  public setIsRead(isRead: boolean): ActivityBuilder {
    this.isRead = isRead;
    return this;
  }

  public setUpdatedAt(updatedAt: number): ActivityBuilder {
    this.updatedAt = updatedAt;
    return this;
  }

  public setActivityEntityData(activityEntityData: any): ActivityBuilder {
    this.activityEntityData = activityEntityData;
    return this;
  }

  public setUuid(uuid: string): ActivityBuilder {
    this.uuid = uuid;
    return this;
  }
  // Add other methods to set other properties as needed

  // Build method to create the final Activity object
  public build(): Activity {
    if (!this.id || !this.action || !this.actionBy) {
      throw new Error("Id, action, actionBy are required.");
    }

    return new Activity(
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

export default Activity;
