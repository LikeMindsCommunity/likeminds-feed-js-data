// feed-sdk/src/LMFeedClient.js
import InitiateUserClient from "./initiateUser/InitiateUserClient";
import NetworkLibrary from "src/core/services/networklibrary";
import InitiateUserRequest from "./initiateUser/model/InitiateUserRequest";

class LMFeedClient {
  networkLibrary = new NetworkLibrary();
  initiateUserClient: any;

  apiKey: string | null = null;
  platformCode: number | null = null;
  versionCode: number | null = null;

  constructor() {
    this.initiateUserClient = new InitiateUserClient();
  }

  setApiKey(apiKey: string) {
    this.apiKey = apiKey;
    this.saveConfig(); // Save config
    return this;
  }

  setPlatformCode(platformCode: number) {
    this.platformCode = platformCode;
    this.saveConfig(); // Save config
    return this;
  }

  setVersionCode(versionCode: number) {
    this.versionCode = versionCode;
    this.saveConfig(); // Save config
    return this;
  }

  build() {
    // Perform any necessary validation or configuration checks
    if (!this.apiKey || !this.platformCode || !this.versionCode) {
      throw new Error(
        "Please provide apiKey, platformCode, and versionCode before building the LMFeedClient."
      );
    }

    const client = new LMFeedClient();
    client.apiKey = this.apiKey;
    client.platformCode = this.platformCode;
    client.versionCode = this.versionCode;
    return client;
  }

  saveConfig() {
    console.log("ld api key= ", this.apiKey);
    this.networkLibrary.setApiKey(this.apiKey);
    this.networkLibrary.setPlatformCode(this.platformCode);
    this.networkLibrary.setVersionCode(this.versionCode);
  }

  async initiateUser(initiateUserRequest: any) {
    try {
      // Call the initiateUser method from InitiateUserClient
      const initiateUserResponse = await this.initiateUserClient.initiateUser(
        initiateUserRequest
      );
      return initiateUserResponse;
    } catch (error) {
      console.error("Error while initiating the user:", error);
      throw error;
    }
  }
}

// export default LMFeedClient;
export { LMFeedClient as default, InitiateUserRequest };
