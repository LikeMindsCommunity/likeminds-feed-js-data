class LogoutRequest {
  deviceId?: string;

  // Public constructor to create the request object


  constructor(deviceId?: string) {
    this.deviceId = deviceId;
  }

  // Static builder method to create the request object
  public static builder(): LogoutBuilder {
    return new LogoutBuilder();
  }
}

// Builder class for LogoutRequest
export class LogoutBuilder {
  private deviceId?: string;
  // Add other properties as needed

  public setDeviceId(deviceId?: string | null): LogoutBuilder {
    this.deviceId = deviceId;
    return this;
  }

  // Build method to create the final LogoutRequest object
  public build(): LogoutRequest {
    return new LogoutRequest(this.deviceId);
  }
}

export default LogoutRequest;
