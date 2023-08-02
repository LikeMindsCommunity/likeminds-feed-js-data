// feed-sdk/src/LMFeedClient.js
import NetworkLibrary from "./core/services/networklibrary";
import InitiateUserClient from "./initiateUser/InitiateUserClient";
import InitiateUserRequest from "./initiateUser/model/InitiateUserRequest";
import PostClient from "./post/PostClient";
import AddPostRequest from "./post/model/AddPostRequest";
import UniversalFeedClient from "./universalfeed/UniversalFeedClient";
import Attachment from "./post/model/Attachment";
import AttachmentMeta from "./post/model/AttachmentMeta";
import DecodeURLRequest from "./post/model/DecodeUrlRequest";
import DeletePostRequest from "./post/model/DeletePostRequest";
import EditPostRequest from "./post/model/EditPostRequest";
import GetPostLikesRequest from "./post/model/GetPostLikesRequest";
import GetPostRequest from "./post/model/GetPostRequest";
import LikePostRequest from "./post/model/LikePostRequest";
import PinPostRequest from "./post/model/PinPostRequest";
import SavePostRequest from "./post/model/SavePostRequest";

class LMFeedClient {
  private initiateUserClient: InitiateUserClient;
  private postClient: PostClient;
  private networkLibrary: NetworkLibrary;
  private feedClient: UniversalFeedClient;
  private apiKey: string | null = null;
  private platformCode: string | null = null;
  private versionCode: number | null = null;

  constructor() {
    this.networkLibrary = new NetworkLibrary();
    this.initiateUserClient = new InitiateUserClient(this.networkLibrary);
    this.postClient = new PostClient(this.networkLibrary);
    this.feedClient = new UniversalFeedClient(this.networkLibrary);
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

  async initiateUser(request: InitiateUserRequest) {
    try {
      // Call the initiateUser method from InitiateUserClient
      const initiateUserResponse = await this.initiateUserClient.initiateUser(
        request
      );
      return initiateUserResponse;
    } catch (error) {
      console.error("Error while initiating the user:", error);
      throw error;
    }
  }

  async addPost(request: AddPostRequest) {
    try {
      const addPostResponse = await this.postClient.addPost(request);
      return addPostResponse;
    } catch (error) {
      console.log("Error while posting feed :", error);
      return error;
    }
  }

  async decodeURL(request: DecodeURLRequest) {
    try {
      const addPostResponse = await this.postClient.decodeUrl(request);
      return addPostResponse;
    } catch (error) {
      console.log("Error while posting feed :", error);
      return error;
    }
  }

  async deletePost(request: DeletePostRequest) {
    try {
      const deletePostResponse = await this.postClient.deletePost(request);
      return deletePostResponse;
    } catch (error) {
      console.log("Error while deleting post:", error);
      throw error;
    }
  }

  async editPost(request: EditPostRequest) {
    try {
      const editPostResponse = await this.postClient.editPost(request);
      return editPostResponse;
    } catch (error) {
      console.log("Error while editing post:", error);
      throw error;
    }
  }

  // Function for GetPostLikesRequest
  async getPostLikes(request: GetPostLikesRequest) {
    try {
      const getPostLikesResponse = await this.postClient.getPostLikes(request);
      return getPostLikesResponse;
    } catch (error) {
      console.log("Error while getting post likes:", error);
      throw error;
    }
  }

  async getPost(request: GetPostRequest) {
    try {
      const getPostResponse = await this.postClient.getPost(request);
      return getPostResponse;
    } catch (error) {
      console.log("Error while getting post:", error);
      throw error;
    }
  }

  async likePost(request: LikePostRequest) {
    try {
      const likePostResponse = await this.postClient.likePost(request);
      return likePostResponse;
    } catch (error) {
      console.log("Error while liking post:", error);
      throw error;
    }
  }

  async pinPost(request: PinPostRequest) {
    try {
      const pinPostResponse = await this.postClient.pinPost(request);
      return pinPostResponse;
    } catch (error) {
      console.log("Error while pinning post:", error);
      throw error;
    }
  }

  async savePost(request: SavePostRequest) {
    try {
      const savePostResponse = await this.postClient.savePost(request);
      return savePostResponse;
    } catch (error) {
      console.log("Error while saving post:", error);
      throw error;
    }
  }
}

// export default LMFeedClient;
export {
  LMFeedClient as default,
  InitiateUserRequest,
  AddPostRequest,
  Attachment,
  AttachmentMeta,
  DecodeURLRequest,
  DeletePostRequest,
  EditPostRequest,
  GetPostLikesRequest,
  GetPostRequest,
  LikePostRequest,
  PinPostRequest,
  SavePostRequest,
};
