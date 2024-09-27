class MarkReadNotificationRequest {
  // Properties of the request class
  activityId: string;

  // Public constructor to create the request object
  constructor(activityId: string) {
    this.activityId = activityId;
  }

  // Static builder method to create the request object
  public static builder(): MarkReadNotificationRequestBuilder {
    return new MarkReadNotificationRequestBuilder();
  }
}

// Builder class for MarkReadNotificationRequest
export class MarkReadNotificationRequestBuilder {
  private activityId: string | undefined;
  // Add other properties as needed

  public setActivityId(activityId: string): MarkReadNotificationRequestBuilder {
    this.activityId = activityId;
    return this;
  }

  // Build method to create the final MarkReadNotificationRequest object
  public build(): MarkReadNotificationRequest {
    if (!this.activityId) {
      throw new Error("activityId is required.");
    }

    return new MarkReadNotificationRequest(this.activityId);
  }
}

export default MarkReadNotificationRequest;
