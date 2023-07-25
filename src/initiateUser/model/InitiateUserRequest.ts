// InitiateUserRequest.ts

export class InitiateUserRequest {
  public apiKey: string;
  public deviceId: string;
  public uuid: string;
  public userName: string;
  public isGuest: boolean;

  constructor(builder: InitiateUserRequestBuilder) {
    this.apiKey = builder.apiKey;
    this.deviceId = builder.deviceId;
    this.uuid = builder.uuid;
    this.userName = builder.userName;
    this.isGuest = builder.isGuest;
  }
}

export class InitiateUserRequestBuilder {
  public apiKey: string;
  public deviceId: string;
  public uuid: string;
  public userName: string;
  public isGuest: boolean;

  public withApiKey(apiKey: string): InitiateUserRequestBuilder {
    this.apiKey = apiKey;
    return this;
  }

  public withDeviceId(deviceId: string): InitiateUserRequestBuilder {
    this.deviceId = deviceId;
    return this;
  }

  public withUuid(uuid: string): InitiateUserRequestBuilder {
    this.uuid = uuid;
    return this;
  }

  public withUserName(userName: string): InitiateUserRequestBuilder {
    this.userName = userName;
    return this;
  }

  public withIsGuest(isGuest: boolean): InitiateUserRequestBuilder {
    this.isGuest = isGuest;
    return this;
  }

  public build(): InitiateUserRequest {
    return new InitiateUserRequest(this);
  }
}
