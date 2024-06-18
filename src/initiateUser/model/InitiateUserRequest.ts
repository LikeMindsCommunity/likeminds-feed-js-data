class InitiateUserRequest {
  // Properties of the request class
  userName?: string;
  uuid?: string;
  isGuest: boolean;
  apikey: string;
  private tokenExpiryBeta: number;
  private rtmTokenExpiryBeta: number;

  // Public constructor to create the request object
  constructor(
    userName: string | undefined,
    uuid: string | undefined,
    isGuest: boolean,
    apiKey: string,
    tokenExpiryBeta?: number,
    rtmTokenExpiryBeta?: number
  ) {
    this.userName = userName;
    this.uuid = uuid;
    this.isGuest = isGuest;
    this.apikey = apiKey;
    this.tokenExpiryBeta = tokenExpiryBeta;
    this.rtmTokenExpiryBeta = rtmTokenExpiryBeta;
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
  private tokenExpiryBeta: number;
  private rtmTokenExpiryBeta: number;
  // Add other properties as needed

  public setUserName(userName: string): InitiateUserRequestBuilder {
    this.userName = userName;
    return this;
  }

  public setTokenExpiryBeta(duration: number): InitiateUserRequestBuilder {
    this.tokenExpiryBeta = duration;
    return this;
  }
  public setRTMTokenExpiryBeta(duration: number): InitiateUserRequestBuilder {
    this.rtmTokenExpiryBeta = duration;
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
      this.apiKey,
      this.tokenExpiryBeta,
      this.rtmTokenExpiryBeta
    );
  }
}

export default InitiateUserRequest;
