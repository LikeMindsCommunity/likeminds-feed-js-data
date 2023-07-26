import LMCallback from "./LMCallback";
import InitiateUserRequest from "./initiateUser/model/InitiateUserRequest";

import { InitiateUserResponse } from "./initiateUser/model/InitiateUserResponse";

class LMFeedClient {
  private lmCallback?: LMCallback;
  static instance: any;

  private constructor(lmCallback?: LMCallback) {
    this.lmCallback = lmCallback;
    // Private constructor to prevent direct instantiation
  }

  public static getInstance(): LMFeedClient {
    if (!LMFeedClient.instance) {
      LMFeedClient.instance = new LMFeedClient();
    }
    return LMFeedClient.instance;
  }

  public withLMCallback(lmCallback: LMCallback): LMFeedClient {
    this.lmCallback = lmCallback;
    return this;
  }

  public build(): LMFeedClient {
    return new LMFeedClient(this.lmCallback);
  }

  // Exposed function to process initiate user request
  public async initiateUser(
    request: InitiateUserRequest
  ): Promise<InitiateUserResponse> {
    // Implementation of initiateUser function
    // You can call the corresponding function from your npm library here
    // For example:
    return Promise.resolve({} as InitiateUserResponse);
  }
}

export { LMFeedClient as default, InitiateUserRequest, InitiateUserResponse };
