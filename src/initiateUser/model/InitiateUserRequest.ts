class InitiateUserRequest {
  // Properties of the request class
  userName?: string;
  uuid?: string;
  isGuest: boolean;
  apikey: string;
  token_expiry_beta = 1;
  rtm_token_expiry_beta = 2;

  // Public constructor to create the request object
  constructor(
    userName: string | undefined,
    uuid: string | undefined,
    isGuest: boolean,
    apiKey: string
  ) {
    this.userName = userName;
    this.uuid = uuid;
    this.isGuest = isGuest;
    this.apikey = apiKey;
  }

  // Static builder method to create the request object
  public static builder(): InitiateUserRequestBuilder {
    return new InitiateUserRequestBuilder();
  }
}

// Builder class for InitiateUserRequest
export class InitiateUserRequestBuilder {
  private userName: string | undefined;
  private uuid: string | undefined;
  private isGuest: boolean | undefined;
  private apiKey: string;
  // Add other properties as needed

  public setUserName(userName: string): InitiateUserRequestBuilder {
    this.userName = userName;
    return this;
  }

  public setUUID(uuid: string): InitiateUserRequestBuilder {
    this.uuid = uuid;
    return this;
  }
  public setApiKey(apiKey: string): InitiateUserRequestBuilder {
    this.apiKey = apiKey;
    return this;
  }
  public setIsGuest(isGuest: boolean): InitiateUserRequestBuilder {
    this.isGuest = isGuest;
    return this;
  }

  // Add other methods to set other properties as needed

  // Build method to create the final InitiateUserRequest object
  public build(): InitiateUserRequest {
    // if (!this.uuid) {
    //   throw new Error("UUID is required.");
    // }

    return new InitiateUserRequest(
      this.userName,
      this.uuid,
      this.isGuest || false,
      this.apiKey
    );
  }
}

export default InitiateUserRequest;
