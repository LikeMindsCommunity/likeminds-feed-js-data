import NetworkLibrary from "./core/services/networklibrary";
import InitiateUserClient from "./initiateUser/InitiateUserClient";
import InitiateUserRequest from "./initiateUser/model/InitiateUserRequest";
import PostClient from "./post/PostClient";
import AddPostRequest from "./post/model/AddPostRequest";
import UniversalFeedClient from "./universalfeed/UniversalFeedClient";
import LMFeedPostAttachment from "./post/model/Attachment";
import LMFeedPostAttachmentMeta from "./post/model/AttachmentMeta";
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
import HelperClient from "./helper/HelperClient";
import RegisterDeviceRequest from "./helper/model/RegisterDeviceRequest";
import { LMSDKCallbacks } from "./LMCallback";
import PollFeedClient from "./poll/PollClient";
import { GetPollVotesRequest } from "./poll/model/GetPollVotesRequest";
import { AddPollOptionRequest } from "./poll/model/AddPollOptionRequest";
import { SubmitPollVoteRequest } from "./poll/model/SubmitPollVoteRequest";

import TokenManager from "./core/services/tokenmanager";
import { TokenValues } from "./shared/tokens";
import { API } from "./shared/constants/api.constant";
import { AddPost, EditPost } from "./types/api-responses/addPostResponse";
import {
  DeletePost,
  DeleteComment,
} from "./types/api-responses/deletePostResponse";
import {
  EditComment,
  PostComment,
  PostReply,
} from "./types/api-responses/postCommentResponse";
import { GetAllMembers } from "./types/api-responses/getAllMembersResponse";
import { GetCommentDetails } from "./types/api-responses/getCommentDetailsResponse";
import { GetNotificationCount } from "./types/api-responses/getNotificationCount";
import { GetNotification } from "./types/api-responses/getNotificationResponse";

import { GetPinPost } from "./types/api-responses/getPinPostResponse";
import { GetPostDetails } from "./types/api-responses/getPostDetailsResponse";
import { GetTopics } from "./types/api-responses/getTopicsResponse";
import { GetUniversalFeed } from "./types/api-responses/getUniversalFeedResponse";
import { LikeComment } from "./types/api-responses/likeCommentResponse";
import { LikePost } from "./types/api-responses/likePostResponse";
import { EditProfile } from "./pages/user/types";
import LMResponseType from "./LMResponse";
import { Activity, ActivityEntityData } from "./types/models/Activity";
import { Attachment, AttachmentMeta } from "./types/models/attachment";
import { Community } from "./types/models/community";
import { SdkClientInfo, User } from "./types/models/member";
import { OgTag } from "./types/models/ogTag";
import { MenuItem, Post } from "./types/models/post";
import { Reply } from "./types/models/replies";
import { ReportTag } from "./types/models/reportTags";
import { TaggingUser } from "./types/models/taggingMember";
import { Topic } from "./types/models/topic";
import { UploadMedia } from "./types/models/uploadMedia";
import { Widget } from "./types/models/widget";
import { SavePost } from "./types/api-responses/savePostResponse";
import { PostReport } from "./types/api-responses/postReportResponse";
import { MarkReadNotification } from "./types/api-responses/markReadResponse";
import {
  InitiateUser,
  ValidateUser,
} from "./types/api-responses/initiateUserResponse";
import { GetTaggingList } from "./types/api-responses/getTaggingListResponse";
import { GetReportTags } from "./types/api-responses/getReportTagsResponse";
import { GetPostLikes } from "./types/api-responses/getPostLikesResponse";
import { GetMemberState } from "./types/api-responses/getMemberStateResponse";
import { GetCommentLikes } from "./types/api-responses/getCommentLikesResponse";
import { DecodeURL } from "./types/api-responses/decodeUrlResponse";
import { FilterComment } from "./types/models/filterComment";
import { Like } from "./types/api-responses/getCommentLikesResponse";
import { MemberRight } from "./types/api-responses/getMemberStateResponse";
import { UpdateUserTopicsRequest } from "./post/model/UpdateUserTopicsRequest";
import { GetUserTopicsRequest } from "./post/model/GetUserTopicsRequest";

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
  // public isBeta: boolean | null = null;
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
  // TBD
  async validateUser(validateUserRequest: ValidateUserRequest) {
    const initiateUserResponse =
      await this.initiateUserClient.validateUser(validateUserRequest);
    return initiateUserResponse;
  }

  async initiateUser(initiateUserRequest: InitiateUserRequest) {
    const initiateUserResponse =
      await this.initiateUserClient.initiateUser(initiateUserRequest);
    return initiateUserResponse;
  }

  async editProfile(editProfile: EditProfile) {
    return this.initiateUserClient.editProfile(editProfile);
  }

  async addPost(addPostRequest: AddPostRequest) {
    const addPostResponse = await this.postClient.addPost(addPostRequest);
    return addPostResponse;
  }

  async decodeURL(decodeURLRequest: DecodeURLRequest) {
    const addPostResponse = await this.postClient.decodeUrl(decodeURLRequest);
    return addPostResponse;
  }

  async deletePost(deletePostRequest: DeletePostRequest) {
    const deletePostResponse =
      await this.postClient.deletePost(deletePostRequest);
    return deletePostResponse;
  }

  async editPost(editPostRequest: EditPostRequest) {
    const editPostResponse = await this.postClient.editPost(editPostRequest);
    return editPostResponse;
  }

  async getPostLikes(getPostLikesRequest: GetPostLikesRequest) {
    const getPostLikesResponse =
      await this.postClient.getPostLikes(getPostLikesRequest);
    return getPostLikesResponse;
  }

  async getPost(getPostRequest: GetPostRequest) {
    const getPostResponse = await this.postClient.getPost(getPostRequest);
    return getPostResponse;
  }

  async getTopics(request: GetTopicsRequest) {
    const getPostResponse = await this.postClient.getTopics(request);
    return getPostResponse;
  }

  async updateUserTopics(request: UpdateUserTopicsRequest) {
    const getPostResponse = await this.postClient.updateUserTopics(request);
    return getPostResponse;
  }

  async getUserTopics(request: GetUserTopicsRequest) {
    const getPostResponse = await this.postClient.getUserTopics(request);
    return getPostResponse;
  }

  async likePost(likePostRequest: LikePostRequest) {
    const likePostResponse = await this.postClient.likePost(likePostRequest);
    return likePostResponse;
  }

  async pinPost(request: PinPostRequest) {
    const pinPostResponse = await this.postClient.pinPost(request);
    return pinPostResponse;
  }

  async savePost(request: SavePostRequest) {
    const savePostResponse = await this.postClient.savePost(request);
    return savePostResponse;
  }

  async getTaggingList(request: GetTaggingListRequest) {
    const gettaggingListResponse =
      await this.postClient.getTaggingList(request);
    return gettaggingListResponse;
  }

  async getFeed(request: GetFeedRequest) {
    const getFeedResponse = await this.feedClient.getFeed(request);
    return getFeedResponse;
  }

  async getReportTags(request: GetReportTagsRequest) {
    const getReportTagsResponse =
      await this.moderationClient.getReportTags(request);
    return getReportTagsResponse;
  }

  async postReport(request: PostReportRequest) {
    const postReportResponse = await this.moderationClient.postReport(request);
    return postReportResponse;
  }

  async getComments(
    postId: string,
    comment: GetCommentRequest,
    commentId: string,
    pageNo: number
  ) {
    const getCommentResponse = await this.commentClient.getComment(
      GetCommentRequest.builder()
        .setCommentId(commentId)
        .setPage(pageNo)
        .setPageSize(10)
        .setPostId(postId)
        .build(),
      postId,
      commentId
    );
    return getCommentResponse;
  }

  async addComment(request: AddCommentRequest) {
    const postReportResponse = await this.commentClient.addComment(request);
    return postReportResponse;
  }

  async replyComment(request: ReplyCommentRequest) {
    return await this.commentClient.replyComment(request);
  }

  async editComment(request: EditCommentRequest) {
    return await this.commentClient.editComment(request);
  }

  async deleteComment(request: DeleteCommentRequest) {
    return await this.commentClient.deleteComment(request);
  }

  async likeComment(request: LikeCommentRequest) {
    return await this.commentClient.likeComment(request);
  }

  async getCommentLikes(request: GetCommentLikesRequest) {
    return await this.commentClient.getCommentLikes(request);
  }

  async getMemberState() {
    return await this.initiateUserClient.getMemberState();
  }

  async getNotificationFeed(request: GetNotificationFeedRequest) {
    return await this.notificationFeedClient.getNotificationFeed(request);
  }

  async markReadNotification(request: MarkReadNotificationRequest) {
    return await this.notificationFeedClient.markReadNotification(request);
  }

  async getUnreadNotificationCount() {
    return await this.notificationFeedClient.getUnreadNotificationCount();
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
    return await this.initiateUserClient.getAllMembers(request);
  }

  async validateRegisterDeviceRequest(request: RegisterDeviceRequest) {
    return await this.helperClient.validateRegisterDeviceRequest(request);
  }

  async registerDevice() {
    return await this.helperClient.registerDevice();
  }

  async submitPollVote(request: SubmitPollVoteRequest) {
    return await this.pollFeedClient.submitPollVote(request);
  }

  async addPollOption(request: AddPollOptionRequest) {
    return await this.pollFeedClient.addPollOption(request);
  }

  async getPollVotes(request: GetPollVotesRequest) {
    return await this.pollFeedClient.getPollVotes(request);
  }
}

export {
  LMFeedClient,
  InitiateUserRequest,
  AddPostRequest,
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
  GetReportTagsRequest,
  PostReportRequest,
  AddCommentRequest,
  GetCommentRequest,
  ReplyCommentRequest,
  DeleteCommentRequest,
  LikeCommentRequest,
  GetCommentLikesRequest,
  GetNotificationFeedRequest,
  MarkReadNotificationRequest,
  GetAllMembersRequest,
  EditCommentRequest,
  GetTopicsRequest,
  UpdateUserTopicsRequest,
  GetUserTopicsRequest,
  ValidateUserRequest,
  RegisterDeviceRequest,
  LMSDKCallbacks,
  NetworkLibrary,
  TokenValues,
  TokenManager,
  API,
  LMResponseType,
  // APIs
  SavePost,
  PostReport,
  PostReply,
  EditComment,
  PostComment,
  MarkReadNotification,
  LikePost,
  LikeComment,
  InitiateUser,
  ValidateUser,
  GetUniversalFeed,
  GetTopics,
  GetTaggingList,
  GetReportTags,
  GetPostLikes,
  GetPostDetails,
  GetPinPost,
  GetNotification,
  GetMemberState,
  GetCommentLikes,
  GetCommentDetails,
  GetAllMembers,
  DeletePost,
  DeleteComment,
  DecodeURL,
  AddPost,
  EditPost,
  GetNotificationCount,
  LMFeedPostAttachment,
  LMFeedPostAttachmentMeta,
  // Models
  Activity,
  ActivityEntityData,
  Attachment,
  AttachmentMeta,
  Community,
  User,
  SdkClientInfo,
  OgTag,
  Post,
  MenuItem,
  Reply,
  ReportTag,
  TaggingUser,
  Topic,
  UploadMedia,
  Widget,
  FilterComment,
  Like,
  MemberRight,
};
