// feed-sdk/src/LMFeedClient.js
import NetworkLibrary from "./core/services/networklibrary";
import InitiateUserClient from "./initiateUser/InitiateUserClient";
import InitiateUserRequest from "./initiateUser/model/InitiateUserRequest";
import PostClient from "./post/PostClient";
import AddPostRequest from "./post/model/AddPostRequest";

class LMFeedClient {
  initiateUserClient: InitiateUserClient;
  postClient: PostClient;
  private networkLibrary: NetworkLibrary;
  private apiKey: string | null = null;
  private platformCode: string | null = null;
  private versionCode: number | null = null;

  constructor() {
    this.networkLibrary = new NetworkLibrary();
    this.initiateUserClient = new InitiateUserClient(this.networkLibrary);
    this.postClient = new PostClient(this.networkLibrary);
  }

  public static Builder(): LMFeedClient {
    return new LMFeedClient();
  }

  setApiKey(apiKey: string): LMFeedClient {
    this.apiKey = apiKey;
    return this;
  }

  setPlatformCode(platformCode: string) {
    this.platformCode = platformCode;
    return this;
  }

  setVersionCode(versionCode: number) {
    this.versionCode = versionCode;
    return this;
  }

  public build(): LMFeedClient {
    // Perform any necessary validation or configuration checks
    if (!this.apiKey || !this.platformCode || !this.versionCode) {
      throw new Error(
        "Please provide apiKey, platformCode, and versionCode before building the LMFeedClient."
      );
    }
    this.networkLibrary.setApiKey(this.apiKey); // Set the API key in the NetworkLibrary
    this.networkLibrary.setPlatformCode(this.platformCode);
    this.networkLibrary.setVersionCode(this.versionCode);
    // return new LMFeedClient(this.userName, this.uuid, this.isGuest);
    return this;
  }

  async initiateUser(initiateUserRequest: InitiateUserRequest) {
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

  async addPost(addPostRequest: AddPostRequest) {
    try {
      const addPostResponse = await this.postClient.addPost(addPostRequest);
      return addPostResponse;
    } catch (error) {
      console.log("Error while posting feed :", error);
      return error;
    }
  }
}

// export default LMFeedClient;
export { LMFeedClient as default, InitiateUserRequest, AddPostRequest };
