class InitiateUserRequest {
  // Properties of the request class
  public username: string;
  public email: string;
  // Add other properties as needed

  // Public constructor to create the request object
  constructor(username: string, email: string) {
    this.username = username;
    this.email = email;
  }

  // Static builder method to create the request object
  public static builder(): InitiateUserRequestBuilder {
    return new InitiateUserRequestBuilder();
  }
}

// Builder class for InitiateUserRequest
export class InitiateUserRequestBuilder {
  private username: string | undefined;
  private email: string | undefined;
  // Add other properties as needed

  public withUsername(username: string): InitiateUserRequestBuilder {
    this.username = username;
    return this;
  }

  public withEmail(email: string): InitiateUserRequestBuilder {
    this.email = email;
    return this;
  }

  // Add other methods to set other properties as needed

  // Build method to create the final InitiateUserRequest object
  public build(): InitiateUserRequest {
    if (!this.username || !this.email) {
      throw new Error("Username and email are required.");
    }

    return new InitiateUserRequest(this.username, this.email);
  }
}

export default InitiateUserRequest;
