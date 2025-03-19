class LogoutUserRequest {
  // Properties of the request class
  refreshToken: string;

  // Public constructor to create the request object
  constructor(refreshToken: string) {
    this.refreshToken = refreshToken;
  }

  // Static builder method to create the request object
  public static builder(): LogoutUserBuilder {
    return new LogoutUserBuilder();
  }
}

// Builder class for LogoutUserRequest
export class LogoutUserBuilder {
  private refreshToken: string | undefined;
  // Add other properties as needed

  public setRefreshToken(refreshToken: string): LogoutUserBuilder {
    this.refreshToken = refreshToken;
    return this;
  }

  // Build method to create the final LogoutUserRequest object
  public build(): LogoutUserRequest {
    if (!this.refreshToken) {
      throw new Error("UUID is required.");
    }

    return new LogoutUserRequest(this.refreshToken);
  }
}

export default LogoutUserRequest;
