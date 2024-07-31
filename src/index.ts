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
import ModerationClient from "./moderation/ModerationClient";
import GetReportTagsRequest from "./moderation/model/GetReportTagsRequest";
import PostReportRequest from "./moderation/model/PostReportRequest";
import CommentClient from "./comment/CommentClient";
import AddCommentRequest from "./comment/model/AddCommentRequest";
import GetAllMembersRequest from "./initiateUser/model/GetAllMembersRequest";
import ReplyCommentRequest from "./comment/model/ReplyCommentRequest";
import GetCommentRequest from "./comment/model/GetCommentRequest";
import GetCommentLikesRequest from "./comment/model/GetCommentLikesRequest";
import LikeCommentRequest from "./comment/model/LikeCommentRequest";
import DeleteCommentRequest from "./comment/model/DeleteCommentRequest";
import NotificationFeedClient from "./notificationFeed/NotificationFeedClient";
import GetNotificationFeedRequest from "./notificationFeed/model/GetNotificationFeedRequest";
import MarkReadNotificationRequest from "./notificationFeed/model/MarkReadNotificationRequest";
import EditCommentRequest from "./comment/model/EditCommentRequest";
import GetTopicsRequest from "./post/model/GetTopicsRequest";
import ValidateUserRequest from "./initiateUser/model/ValidateUserRequest";
import { GetFeedResponse } from "./universalfeed/model/GetFeedResponse";
import { IPost } from "./shared/models/post";
import { IOgTag } from "./shared/models/ogTags";
import { IUser } from "./shared/models/user";
import { IMenuItem } from "./shared/models/menuItem";
import { AddCommentResponse } from "./comment/model/AddCommentResponse";
import { GetCommentResponse } from "./comment/model/GetCommentResponse";
import { IComment } from "./shared/models/comment";
import { EditCommentResponse } from "./comment/model/EditCommentResponse";
import { IMemberRight, IMemberState } from "./shared/models/memberRights";
import { IActivities, IActivity } from "./shared/models/activity";
import { IMember } from "./initiateUser/model/GetAllMembersResponse";
import { LMFeedTopics } from "./post/model/GetTopicsResponse";
import HelperClient from "./helper/HelperClient";
import RegisterDeviceRequest from "./helper/model/RegisterDeviceRequest";
import { LMSDKCallbacks } from "./LMCallback";
import PollFeedClient from "./poll/PollClient";
import { GetPollVotesRequest } from "./poll/model/GetPollVotesRequest";
import { AddPollOptionRequest } from "./poll/model/AddPollOptionRequest";
import { SubmitPollVoteRequest } from "./poll/model/SubmitPollVoteRequest";
import Like from "./post/model/Like";
import TokenManager from "./core/services/tokenmanager";
import { TokenValues } from "./shared/tokens";
import { API } from "./shared/constants/api.constant";
import {
  AddPostResponse,
  EditPostResponse,
} from "./types/api-responses/addPostResponse";
import {
  DeletePostResponse,
  DeleteCommentResponse,
} from "./types/api-responses/deletePostResponse";
import {
  PostCommentResponse,
  PostReplyResponse,
} from "./types/api-responses/postCommentResponse";
import { GetTaggingListResponse } from "./helper/model/GetTaggingListResponse";
import { GetMemberStateResponse } from "./initiateUser/model/GetMemberStateResponse";
import { ValidateUserResponse } from "./initiateUser/model/ValidateUserResponse";
import { GetReportTagsResponse } from "./moderation/model/GetReportTagsResponse";
import { GetPostLikesResponse } from "./post/model/GetPostLikesResponse";
import { GetAllMembersResponse } from "./types/api-responses/getAllMembersResponse";
import { GetCommentDetailsResponse } from "./types/api-responses/getCommentDetailsResponse";
import { GetNotificationCountResponse } from "./types/api-responses/getNotificationCount";
import { GetNotificationResponse } from "./types/api-responses/getNotificationResponse";
import { GetOgTagResponse } from "./types/api-responses/getOgTagResponse";
import { GetPinPostResponse } from "./types/api-responses/getPinPostResponse";
import { GetPostDetailsResponse } from "./types/api-responses/getPostDetailsResponse";
import { GetTopicsResponse } from "./types/api-responses/getTopicsResponse";
import { GetUniversalFeedResponse } from "./types/api-responses/getUniversalFeed";
import { LikeCommentResponse } from "./types/api-responses/likeCommentResponse";
import { LikePostResponse } from "./types/api-responses/likePostResponse";
import { ReportObject } from "./types/models/reportTags";
import { User } from "aws-sdk/clients/appstream";
import { Activity } from "aws-sdk/clients/autoscaling";
import { Topic } from "aws-sdk/clients/iot";
import { Community } from "./types/models/community";
import { OgTag } from "./types/models/ogTag";
import { Post } from "./types/models/post";
import { Reply } from "./types/models/replies";
import { TaggingMember } from "./types/models/taggingMember";
import { Member } from "./types/models/member";
import { EditProfile, Nothing } from "./pages/user/types";
import LMResponse from "./LMResponse";

class LMFeedClient {
  private initiateUserClient: InitiateUserClient;
  private postClient: PostClient;
  private moderationClient: ModerationClient;
  private commentClient: CommentClient;
  private networkLibrary: NetworkLibrary;
  private notificationFeedClient: NotificationFeedClient;
  private feedClient: UniversalFeedClient;
  private platformCode: string | null = null;
  private versionCode: number | null = null;
  private apiKey: string | null = null;
  private helperClient: HelperClient;
  private LMSDKCallbacks: LMSDKCallbacks;

  private pollFeedClient: PollFeedClient;
  constructor() {
    // this.LMSDKCallbacks = new LMSDKCallbacks();
    this.networkLibrary = new NetworkLibrary(this.LMSDKCallbacks);
    this.initiateUserClient = new InitiateUserClient(this.networkLibrary);
    this.postClient = new PostClient(this.networkLibrary);
    this.moderationClient = new ModerationClient(this.networkLibrary);
    this.feedClient = new UniversalFeedClient(this.networkLibrary);
    this.moderationClient = new ModerationClient(this.networkLibrary);
    this.commentClient = new CommentClient(this.networkLibrary);
    this.notificationFeedClient = new NotificationFeedClient(
      this.networkLibrary
    );
    this.helperClient = new HelperClient(this.networkLibrary);
    this.pollFeedClient = new PollFeedClient(this.networkLibrary);
  }

  getNetworkLibrary() {
    return this.networkLibrary;
  }

  public static Builder(): LMFeedClient {
    return new LMFeedClient();
  }

  setPlatformCode(platformCode: string) {
    this.platformCode = platformCode;
    return this;
  }

  setVersionCode(versionCode: number) {
    this.versionCode = versionCode;
    return this;
  }
  setApiKey(apiKey: string) {
    this.apiKey = apiKey;
    return this;
  }
  public setLMSDKCallbacks(lmSdkCallbacks: LMSDKCallbacks) {
    this.LMSDKCallbacks = lmSdkCallbacks;
    this.networkLibrary.setLMSDKCallbacks(lmSdkCallbacks);
  }

  public build(): LMFeedClient {
    if (!this.platformCode) {
      throw new Error(
        "Please provide platformCode before building the LMFeedClient."
      );
    }
    if (!this.versionCode) {
      throw new Error(
        "Please provide versionCode before building the LMFeedClient."
      );
    }

    this.networkLibrary.setPlatformCode(this.platformCode);
    this.networkLibrary.setVersionCode(this.versionCode);
    this.networkLibrary.setApiKey(this.apiKey);

    return this;
  }

  public setAccessTokenInLocalStorage(token: string) {
    this.networkLibrary.setAccessTokenInLocalStorage(token);
  }

  public setRefreshTokenInLocalStorage(token: string) {
    this.networkLibrary.setRefreshTokenInLocalStorage(token);
  }
  public setApiKeyInLocalStorage(apiKey: string) {
    this.networkLibrary.setApiKeyInLocalStorage(apiKey);
  }
  public setUserInLocalStorage(user: string) {
    this.networkLibrary.setUserInLocalStorage(user);
  }
  public getUserFromLocalStorage() {
    return this.networkLibrary.getUserFromLocalStorage();
  }
  public getApiKeyFromLocalStorage() {
    return this.networkLibrary.getApiKeyFromLocalStorage();
  }

  public getAccessTokenFromLocalStorage() {
    return this.networkLibrary.getAccessTokenFromLocalStorage();
  }

  public getRefreshTokenFromLocalStorage() {
    return this.networkLibrary.getRefreshTokenFromLocalStorage();
  }

  public getAccessToken() {
    return this.networkLibrary.getAccessToken();
  }

  public getRefreshToken() {
    return this.networkLibrary.getRefreshToken();
  }

  async validateUser(validateUserRequest: ValidateUserRequest) {
    try {
      const initiateUserResponse =
        await this.initiateUserClient.validateUser(validateUserRequest);

      return initiateUserResponse;
    } catch (error) {
      console.error("Error while validating the user:", error);
      throw error;
    }
  }

  async initiateUser(initiateUserRequest: InitiateUserRequest) {
    try {
      const initiateUserResponse =
        await this.initiateUserClient.initiateUser(initiateUserRequest);

      return initiateUserResponse;
    } catch (error) {
      console.error("Error while initiating the user:", error);
      throw error;
    }
  }

  async editProfile(editProfile:EditProfile) {
    return this.initiateUserClient.editProfile(editProfile)
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
      const deletePostResponse =
        await this.postClient.deletePost(deletePostRequest);
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
      const getPostLikesResponse =
        await this.postClient.getPostLikes(getPostLikesRequest);
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

  async getTopics(request: GetTopicsRequest) {
    try {
      const getPostResponse = await this.postClient.getTopics(request);
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
      const gettaggingListResponse =
        await this.postClient.getTaggingList(request);
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
      const getReportTagsResponse =
        await this.moderationClient.getReportTags(request);
      return getReportTagsResponse;
    } catch (error) {
      console.log("Error while getting tagging list:", error);
      throw error;
    }
  }
  async postReport(request: PostReportRequest) {
    try {
      const postReportResponse =
        await this.moderationClient.postReport(request);
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

  async getCommunityConfigurations() {
    try {
      return await this.initiateUserClient.getCommunityConfigurations();
    } catch (error) {
      console.log("Error while getting configuration", error);
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

  async validateRegisterDeviceRequest(request: RegisterDeviceRequest) {
    try {
      return await this.helperClient.validateRegisterDeviceRequest(request);
    } catch (error) {
      console.log("Error while validate register device", error);
      throw error;
    }
  }
  async registerDevice() {
    try {
      return await this.helperClient.registerDevice();
    } catch (error) {
      console.log("Error while register device", error);
      throw error;
    }
  }
  async submitPollVote(request: SubmitPollVoteRequest) {
    try {
      return await this.pollFeedClient.submitPollVote(request);
    } catch (error) {
      console.log("Error while submit poll", error);
      throw error;
    }
  }
  async addPollOption(request: AddPollOptionRequest) {
    try {
      return await this.pollFeedClient.addPollOption(request);
    } catch (error) {
      console.log("Error while add poll option", error);
      throw error;
    }
  }
  async getPollVotes(request: GetPollVotesRequest) {
    try {
      return await this.pollFeedClient.getPollVotes(request);
    } catch (error) {
      console.log("Error while get poll votes", error);
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
  GetTopicsRequest,
  LMFeedTopics,
  ValidateUserRequest,
  RegisterDeviceRequest,
  LMSDKCallbacks,
  Like,
  NetworkLibrary,
  TokenValues,
  TokenManager,
  API,
  AddPostResponse,
  EditPostResponse,
  DeletePostResponse,
  DeleteCommentResponse,
  GetAllMembersResponse,
  GetCommentDetailsResponse,
  GetMemberStateResponse,
  GetNotificationCountResponse,
  GetNotificationResponse,
  GetOgTagResponse,
  GetPinPostResponse,
  GetPostDetailsResponse,
  GetPostLikesResponse,
  GetReportTagsResponse,
  GetTaggingListResponse,
  GetTopicsResponse,
  GetUniversalFeedResponse,
  ValidateUserResponse,
  LikeCommentResponse,
  LikePostResponse,
  PostCommentResponse,
  EditCommentResponse,
  PostReplyResponse,
  Activity,
  Community,
  User,
  Member,
  OgTag,
  Post,
  Reply,
  ReportObject,
  TaggingMember,
  Topic,
};
