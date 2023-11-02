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
import GetTaggingListRequest from "./post/model/GetTaggingListRequest";
import GetFeedRequest from "./universalfeed/model/GetFeedRequest";
import { GetFeedResponse } from "./universalfeed/model/GetFeedResponse";
import { IPost } from "./shared/models/post";
import { IOgTag } from "./shared/models/ogTags";
import { IUser } from "./shared/models/user";
import { IMenuItem } from "./shared/models/menuItem";
import ModerationClient from "./moderation/ModerationClient";
import GetReportTagsRequest from "./moderation/model/GetReportTagsRequest";
import PostReportRequest from "./moderation/model/PostReportRequest";
import CommentClient from "./comment/CommentClient";
import AddCommentRequest from "./comment/model/AddCommentRequest";
import { AddCommentResponse } from "./comment/model/AddCommentResponse";

import { GetCommentResponse } from "./comment/model/GetCommentResponse";
import { IComment } from "./shared/models/comment";

import { EditCommentResponse } from "./comment/model/EditCommentResponse";
import GetMemberStateRequest from "./initiateUser/model/GetMemberStateRequest";
import { IMemberRight, IMemberState } from "./shared/models/memberRights";

import { IActivities, IActivity } from "./shared/models/activity";

import GetAllMembersRequest from "./initiateUser/model/GetAllMembersRequest";
import { IMember } from "./initiateUser/model/GetAllMembersResponse";

import ReplyCommentRequest from "./comment/model/ReplyCommentRequest";
import GetCommentRequest from "./comment/model/GetCommentRequest";
import GetCommentLikesRequest from "./comment/model/GetCommentLikesRequest";
import LikeCommentRequest from "./comment/model/LikeCommentRequest";
import DeleteCommentRequest from "./comment/model/DeleteCommentRequest";
import DecodeUrlRequest from "./helper/model/DecodeUrlRequest";
import HelperClient from "./helper/HelperClient";

import NotificationFeedClient from "./notificationFeed/NotificationFeedClient";
import GetNotificationFeedRequest from "./notificationFeed/model/GetNotificationFeedRequest";
import MarkReadNotificationRequest from "./notificationFeed/model/MarkReadNotificationRequest";
import EditCommentRequest from "./comment/model/EditCommentRequest";

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
    this.moderationClient = new ModerationClient(this.networkLibrary);
    this.commentClient = new CommentClient(this.networkLibrary);
    this.notificationFeedClient = new NotificationFeedClient(
      this.networkLibrary
    );
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
  async getTaggingList(request: GetTaggingListRequest) {
    try {
      const gettaggingListResponse = await this.postClient.getTaggingList(
        request
      );
      return gettaggingListResponse;
    } catch (error) {
      console.log("Error while getting tagging list:", error);
      throw error;
    }
  }
  async getFeed(request: GetFeedRequest) {
    try {
      const getFeedResponse = await this.feedClient.getFeed(request);
      return getFeedResponse;
    } catch (error) {
      console.log("Error while getting tagging list:", error);
      throw error;
    }
  }
  async getReportTags(request: GetReportTagsRequest) {
    try {
      const getReportTagsResponse = await this.moderationClient.getReportTags(
        request
      );
      return getReportTagsResponse;
    } catch (error) {
      console.log("Error while getting tagging list:", error);
      throw error;
    }
  }
  async postReport(request: PostReportRequest) {
    try {
      const postReportResponse = await this.moderationClient.postReport(
        request
      );
      return postReportResponse;
    } catch (error) {
      console.log("Error while getting tagging list:", error);
      throw error;
    }
  }
  async getComments(
    postId: string,
    comment: GetCommentRequest,
    commentId: string,
    pageNo: number
  ) {
    try {
      const getCommentResponse = await this.commentClient.getComment(
        GetCommentRequest.builder()
          .setcommentId(commentId)
          .setpage(pageNo)
          .setpageSize(10)
          .setpostId(postId)
          .build(),
        postId,
        commentId
      );
      return getCommentResponse;
    } catch (error) {
      console.log("Error while getting tagging list:", error);
      throw error;
    }
  }

  async addComment(request: AddCommentRequest) {
    try {
      const postReportResponse = await this.commentClient.addComment(request);
      return postReportResponse;
    } catch (error) {
      console.log("Error while getting tagging list:", error);
      throw error;
    }
  }

  async replyComment(request: ReplyCommentRequest) {
    try {
      return await this.commentClient.replyComment(request);
    } catch (error) {
      console.log("Error while replying to comment:", error);
      throw error;
    }
  }
  async editComment(request: EditCommentRequest) {
    try {
      return await this.commentClient.editComment(request);
    } catch (error) {
      console.log("Error while editing comment:", error);
      throw error;
    }
  }

  async deleteComment(request: DeleteCommentRequest) {
    try {
      return await this.commentClient.deleteComment(request);
    } catch (error) {
      console.log("Error while deleting comment:", error);
      throw error;
    }
  }
  async likeComment(request: LikeCommentRequest) {
    try {
      return await this.commentClient.likeComment(request);
    } catch (error) {
      console.log("Error while liking comment:", error);
      throw error;
    }
  }
  async getCommentLikes(request: GetCommentLikesRequest) {
    try {
      return await this.commentClient.getCommentLikes(request);
    } catch (error) {
      console.log("Error while getting comment likes:", error);
      throw error;
    }
  }
  async getMemberState() {
    try {
      return await this.initiateUserClient.getMemberState();
    } catch (error) {
      console.log("Error while getting member state:", error);
      throw error;
    }
  }

  async getNotificationFeed(request: GetNotificationFeedRequest) {
    try {
      return await this.notificationFeedClient.getNotificationFeed(request);
    } catch (error) {
      console.log("Error while getting notification feed:", error);
      throw error;
    }
  }

  async markReadNotification(request: MarkReadNotificationRequest) {
    try {
      return await this.notificationFeedClient.markReadNotification(request);
    } catch (error) {
      console.log("Error while marking notification as read:", error);
      throw error;
    }
  }

  async getUnreadNotificationCount() {
    try {
      return await this.notificationFeedClient.getUnreadNotificationCount();
    } catch (error) {
      console.log("Error while getting unread notification count:", error);
      throw error;
    }
  }
  async getAllMembers(request: GetAllMembersRequest) {
    try {
      return await this.initiateUserClient.getAllMembers(request);
    } catch (error) {
      console.log("Error while members", error);
      throw error;
    }
  }
}

export {
  LMFeedClient,
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
  GetTaggingListRequest,
  GetFeedRequest,
  GetFeedResponse,
  IPost,
  IOgTag,
  IUser,
  IMenuItem,
  IComment,
  GetReportTagsRequest,
  PostReportRequest,
  AddCommentRequest,
  AddCommentResponse,
  GetCommentRequest,
  GetCommentResponse,
  ReplyCommentRequest,
  DeleteCommentRequest,
  EditCommentResponse,
  LikeCommentRequest,
  GetCommentLikesRequest,
  IMemberState,
  IMemberRight,
  GetNotificationFeedRequest,
  MarkReadNotificationRequest,
  IActivities,
  IActivity,
  GetAllMembersRequest,
  IMember,
  EditCommentRequest,
};
