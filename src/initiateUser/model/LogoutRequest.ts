class LogoutRequest {
  // Properties of the request class
  refreshToken: string;
  deviceId: string;

  // Public constructor to create the request object
  constructor(refreshToken: string, deviceId: string) {
    this.refreshToken = refreshToken;
    this.deviceId = deviceId;
  }

  // Static builder method to create the request object
  public static builder(): LogoutBuilder {
    return new LogoutBuilder();
  }
}

// Builder class for LogoutRequest
export class LogoutBuilder {
  private refreshToken: string | undefined;
  private deviceId: string | undefined;
  // Add other properties as needed

  public setRefreshToken(refreshToken: string): LogoutBuilder {
    this.refreshToken = refreshToken;
    return this;
  }

  public setDeviceId(deviceId: string): LogoutBuilder {
    this.deviceId = deviceId;
    return this;
  }

  // Build method to create the final LogoutRequest object
  public build(): LogoutRequest {
    if (!this.refreshToken || !this.deviceId) {
      throw new Error("UUID and DeviceI are required.");
    }

    return new LogoutRequest(this.refreshToken, this.deviceId);
  }
}

export default LogoutRequest;
