import { API } from "../shared/constants/api.constant";
import NetworkLibrary from "../core/services/networklibrary";
import AddPostRequest from "./model/AddPostRequest";
import { ModelConverter } from "../utils/ModelConverter";
import DeletePostRequest from "./model/DeletePostRequest";
import GetPostRequest from "./model/GetPostRequest";
// import { GetPostResponse } from "./model/GetPostResponse";
import SavePostRequest from "./model/SavePostRequest";
import GetPostLikesRequest from "./model/GetPostLikesRequest";
import { GetPostLikes } from "../types/api-responses/getPostLikesResponse";
import LikePostRequest from "./model/LikePostRequest";
import PinPostRequest from "./model/PinPostRequest";
import EditPostRequest from "./model/EditPostRequest";
import { EditPost } from "../types/api-responses/addPostResponse";
import DecodeURLRequest from "./model/DecodeUrlRequest";
import GetTaggingListRequest from "./model/GetTaggingListRequest";
import GetTopicsRequest from "./model/GetTopicsRequest";
import { AddPost } from "../types/api-responses/addPostResponse";
import { GetPostDetails } from "../types/api-responses/getPostDetailsResponse";
import { LikePost } from "../types/api-responses/likePostResponse";
import { GetPinPost } from "../types/api-responses/getPinPostResponse";
import { DeletePost } from "../types/api-responses/deletePostResponse";
import { GetTaggingList } from "../types/api-responses/getTaggingListResponse";
import { GetTopics } from "../types/api-responses/getTopicsResponse";
import { DecodeURL } from "../types/api-responses/decodeUrlResponse";
import { SavePost } from "../types/api-responses/savePostResponse";

class PostClient {
  private networkLibrary: NetworkLibrary;

  constructor(instance: NetworkLibrary) {
    this.networkLibrary = instance;
  }

  async addPost(request: AddPostRequest) {
    const params = ModelConverter.requestBodyGenerator(request);
    const resData = await this.networkLibrary.makeAuthenticatedRequest<AddPost>(
      `${API.FEED_POST}`,
      {
        method: "POST",
        data: params,
      }
    );

    // Handle the response and return the LMResponse object
    // const responseData: AddPostResponse =
    //   ModelConverter.responseBodyParser(resData);

    return resData;
  }
  public async getPost(getPost: GetPostRequest) {
    return await this.networkLibrary.makeAuthenticatedRequest<GetPostDetails>(
      `${API.FEED_POST}/${getPost.postId}?page=${getPost.page}&page_size=${getPost.pageSize}`
    );
  }

  public async savePost(savePost: SavePostRequest) {
    const params = savePost;
    return await this.networkLibrary.makeAuthenticatedRequest<SavePost>(
      `${API.FEED_POST}/${savePost.postId}/save`,
      {
        method: "PUT",
        data: params,
      }
    );
  }

  public async getPostLikes(request: GetPostLikesRequest) {
    return await this.networkLibrary.makeAuthenticatedRequest<GetPostLikes>(
      `${API.FEED_POST}/${request.postId}/like?page=${request.page}&page_size=${request.pageSize}`
    );
  }

  public async likePost(likePost: LikePostRequest) {
    const params = ModelConverter.requestBodyGenerator(likePost);
    return await this.networkLibrary.makeAuthenticatedRequest<LikePost>(
      `${API.FEED_POST}/${likePost.postId}/like`,
      {
        method: "PUT",
        data: params,
      }
    );
  }

  public async pinPost(pinPost: PinPostRequest) {
    const params = ModelConverter.requestBodyGenerator(pinPost);
    return await this.networkLibrary.makeAuthenticatedRequest<GetPinPost>(
      `${API.FEED_POST}/${pinPost.postId}/pin`,
      {
        method: "PUT",
        data: params,
      }
    );
  }

  public async editPost(editPost: EditPostRequest) {
    const params = ModelConverter.requestBodyGenerator(editPost);
    return await this.networkLibrary.makeAuthenticatedRequest<EditPost>(
      `${API.FEED_POST}/${editPost.postId}`,
      {
        method: "PUT",
        data: params,
      }
    );
  }

  public async deletePost(deletePost: DeletePostRequest) {
    const params = ModelConverter.requestBodyGenerator(deletePost);
    return await this.networkLibrary.makeAuthenticatedRequest<DeletePost>(
      `${API.FEED_POST}/${deletePost.postId}`,
      {
        method: "DELETE",
        data: params,
      }
    );
  }

  public async decodeUrl(decodeUrl: DecodeURLRequest) {
    return await this.networkLibrary.makeAuthenticatedRequest<DecodeURL>(
      `${API.HELPER_URL}?url=${decodeUrl.url}`
    );
  }

  public async getTaggingList(taggingList: GetTaggingListRequest) {
    return await this.networkLibrary.makeAuthenticatedRequest<GetTaggingList>(
      `${API.CHATROOM_GET_TAGGINNG_LIST}?page=${taggingList.page}&page_size=${taggingList.pageSize}&search_name=${taggingList.searchName}`
    );
  }

  // Check
  // getPostComments(taggingList: GetTaggingListRequest) {
  //   return this.networkLibrary
  //     .makeAuthenticatedRequest(
  //       `${API.CHATROOM_GET_TAGGINNG_LIST}?page=${taggingList.page}&page_size=${taggingList.pageSize}&search_name=${taggingList.searchName}`
  //     )
  //     .then((resData: any) => {
  //       const responseData = ModelConverter.responseBodyParser(resData);
  //       return new LMResponse<any>(responseData, null, true);
  //     })
  //     .catch((error) => {
  //       return {
  //         success: false,
  //         errorMessage: error,
  //       };
  //     });
  // }

  getTopics(request: GetTopicsRequest) {
    return this.networkLibrary.makeAuthenticatedRequest<GetTopics>(
      request.isEnabled === null
        ? `${API.FEED_TOPIC}?page=${request.page}&page_size=${request.pageSize}&search=${request.search}&search_type=${request.searchType}`
        : `${API.FEED_TOPIC}?page=${request.page}&page_size=${request.pageSize}&search=${request.search}&search_type=${request.searchType}&is_enabled=${request.isEnabled}`
    );
  }
}

export default PostClient;
