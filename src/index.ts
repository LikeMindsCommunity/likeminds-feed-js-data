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
import ModerationClient from "./moderation/ModerationClient";
import GetReportTagsRequest from "./moderation/model/GetReportTagsRequest";
import PostReportRequest from "./moderation/model/PostReportRequest";
import CommentClient from "./comment/CommentClient";
import AddCommentRequest from "./comment/model/AddCommentRequest";
import EditCommentRequest from "./comment/model/EditCommentRequest";
import ReplyCommentRequest from "./comment/model/ReplyCommentRequest";
import GetCommentRequest from "./comment/model/GetCommentRequest";
import GetCommentLikesRequest from "./comment/model/GetCommentLikesRequest";
import LikeCommentRequest from "./comment/model/LikeCommentRequest";
import DeleteCommentRequest from "./comment/model/DeleteCommentRequest";
import DecodeUrlRequest from "./helper/model/DecodeUrlRequest";
import HelperClient from "./helper/HelperClient";
import GetTaggingListRequest from "./helper/model/GetTaggingListRequest";
import NotificationFeedClient from "./notificationFeed/NotificationFeedClient";
import GetNotificationFeedRequest from "./notificationFeed/model/GetNotificationFeedRequest";
import MarkReadNotificationRequest from "./notificationFeed/model/MarkReadNotificationRequest";

class LMFeedClient {
  private initiateUserClient: InitiateUserClient;
  private postClient: PostClient;
  private moderationClient: ModerationClient;
  private commentClient: CommentClient;
  private helperClient: HelperClient;
  private networkLibrary: NetworkLibrary;
  private notificationFeedClient: NotificationFeedClient;
  private feedClient: UniversalFeedClient;
  private apiKey: string | null = null;
  private platformCode: string | null = null;
  private versionCode: number | null = null;

  constructor() {
    this.networkLibrary = new NetworkLibrary();
    this.initiateUserClient = new InitiateUserClient(this.networkLibrary);
    this.postClient = new PostClient(this.networkLibrary);
    this.moderationClient = new ModerationClient(this.networkLibrary);
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

  async decodeURL(decodeURLRequest: DecodeURLRequest) {
    try {
      const addPostResponse = await this.postClient.decodeUrl(decodeURLRequest);
      return addPostResponse;
    } catch (error) {
      console.log("Error while posting feed :", error);
      return error;
    }
  }

  async deletePost(deletePostRequest: DeletePostRequest) {
    try {
      const deletePostResponse = await this.postClient.deletePost(
        deletePostRequest
      );
      return deletePostResponse;
    } catch (error) {
      console.log("Error while deleting post:", error);
      throw error;
    }
  }

  async editPost(editPostRequest: EditPostRequest) {
    try {
      const editPostResponse = await this.postClient.editPost(editPostRequest);
      return editPostResponse;
    } catch (error) {
      console.log("Error while editing post:", error);
      throw error;
    }
  }

  // Function for GetPostLikesRequest
  async getPostLikes(getPostLikesRequest: GetPostLikesRequest) {
    try {
      const getPostLikesResponse = await this.postClient.getPostLikes(
        getPostLikesRequest
      );
      return getPostLikesResponse;
    } catch (error) {
      console.log("Error while getting post likes:", error);
      throw error;
    }
  }

  async getPost(getPostRequest: GetPostRequest) {
    try {
      const getPostResponse = await this.postClient.getPost(getPostRequest);
      return getPostResponse;
    } catch (error) {
      console.log("Error while getting post:", error);
      throw error;
    }
  }

  async likePost(likePostRequest: LikePostRequest) {
    try {
      const likePostResponse = await this.postClient.likePost(likePostRequest);
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

  async getReportTags(getReportTagsRequest: GetReportTagsRequest) {
    try {
      const savePostResponse = await this.moderationClient.getReportTags(
        getReportTagsRequest
      );
      return savePostResponse;
    } catch (error) {
      console.log("Error while saving post:", error);
      throw error;
    }
  }

  async postReport(postReportRequest: PostReportRequest) {
    try {
      const postReportResponse = await this.moderationClient.postReport(
        postReportRequest
      );
      return postReportResponse;
    } catch (error) {
      console.log("Error while saving post:", error);
      throw error;
    }
  }

  async addComment(addCommentRequest: AddCommentRequest) {
    try {
      const addCommentResponse = await this.commentClient.addComment(
        addCommentRequest
      );
      return addCommentResponse;
    } catch (error) {
      console.log("Error while saving post:", error);
      throw error;
    }
  }
  async editComment(editCommentRequest: EditCommentRequest) {
    try {
      const editCommentResponse = await this.commentClient.editComment(
        editCommentRequest
      );
      return editCommentResponse;
    } catch (error) {
      console.log("Error while saving post:", error);
      throw error;
    }
  }

  async replyComment(replyCommentRequest: ReplyCommentRequest) {
    try {
      const replyCommentResponse = await this.commentClient.replyComment(
        replyCommentRequest
      );
      return replyCommentResponse;
    } catch (error) {
      console.log("Error while saving post:", error);
      throw error;
    }
  }

  async getComment(getCommentRequest: GetCommentRequest) {
    try {
      const replyCommentResponse = await this.commentClient.getComment(
        getCommentRequest
      );
      return replyCommentResponse;
    } catch (error) {
      console.log("Error while saving post:", error);
      throw error;
    }
  }
  async getCommentLikes(getCommentLikesRequest: GetCommentLikesRequest) {
    try {
      const getCommentLikesResponse = await this.commentClient.getCommentLikes(
        getCommentLikesRequest
      );
      return getCommentLikesResponse;
    } catch (error) {
      console.log("Error while saving post:", error);
      throw error;
    }
  }

  async likeComment(likeCommentRequest: LikeCommentRequest) {
    try {
      const likeCommentResponse = await this.commentClient.likeComment(
        likeCommentRequest
      );
      return likeCommentResponse;
    } catch (error) {
      console.log("Error while saving post:", error);
      throw error;
    }
  }

  async deleteComment(deleteCommentRequest: DeleteCommentRequest) {
    try {
      const deleteCommentResponse = await this.commentClient.deleteComment(
        deleteCommentRequest
      );
      return deleteCommentResponse;
    } catch (error) {
      console.log("Error while saving post:", error);
      throw error;
    }
  }

  async decodeUrl(decodeUrlRequest: DecodeUrlRequest) {
    try {
      const decodeUrlResponse = await this.helperClient.decodeUrl(
        decodeUrlRequest
      );
      return decodeUrlResponse;
    } catch (error) {
      console.log("Error while saving post:", error);
      throw error;
    }
  }

  async getTaggingList(getTaggingListRequest: GetTaggingListRequest) {
    try {
      const getTaggingListResponse = await this.helperClient.getTaggingList(
        getTaggingListRequest
      );
      return getTaggingListResponse;
    } catch (error) {
      console.log("Error while saving post:", error);
      throw error;
    }
  }
  async getNotificationFeed(
    getNotificationFeedRequest: GetNotificationFeedRequest
  ) {
    try {
      const getNotificationFeedResponse =
        await this.notificationFeedClient.getNotificationFeed(
          getNotificationFeedRequest
        );
      return getNotificationFeedResponse;
    } catch (error) {
      console.log("Error while saving post:", error);
      throw error;
    }
  }
  async getUnreadNotificationCount() {
    try {
      const getUnreadNotificationCountResponse =
        await this.notificationFeedClient.getUnreadNotificationCount();
      return getUnreadNotificationCountResponse;
    } catch (error) {
      console.log("Error while saving post:", error);
      throw error;
    }
  }
  async markReadNotification(
    markReadNotificationRequest: MarkReadNotificationRequest
  ) {
    try {
      const markReadNotificationResponse =
        await this.notificationFeedClient.markReadNotification(
          markReadNotificationRequest
        );
      return markReadNotificationResponse;
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
