import LMResponse from "../core/services/lmresponse";
import { API } from "../shared/constants/api.constant";
import NetworkLibrary from "../core/services/networklibrary";
import AddPostRequest from "./model/AddPostRequest";
import { ModelConverter } from "../utils/ModelConverter";
import DeletePostRequest from "./model/DeletePostRequest";
import GetPostRequest from "./model/GetPostRequest";
// import { GetPostResponse } from "./model/GetPostResponse";
import SavePostRequest from "./model/SavePostRequest";
import GetPostLikesRequest from "./model/GetPostLikesRequest";
import { GetPostLikesResponse } from "../types/api-responses/getPostLikesResponse";
import LikePostRequest from "./model/LikePostRequest";
import PinPostRequest from "./model/PinPostRequest";
import EditPostRequest from "./model/EditPostRequest";
import { EditPostResponse } from "../types/api-responses/addPostResponse";
import DecodeURLRequest from "./model/DecodeUrlRequest";
import GetTaggingListRequest from "./model/GetTaggingListRequest";
import GetTopicsRequest from "./model/GetTopicsRequest";
import { AddPostResponse } from "../types/api-responses/addPostResponse";
import { GetPostDetailsResponse } from "../types/api-responses/getPostDetailsResponse";
import { LikePostResponse } from "../types/api-responses/likePostResponse";
import { GetPinPostResponse } from "../types/api-responses/getPinPostResponse";
import { DeletePostResponse } from "../types/api-responses/deletePostResponse";
import { GetTaggingListResponse } from "../types/api-responses/getTaggingListResponse";
import { GetTopicsResponse } from "../types/api-responses/getTopicsResponse";

class PostClient {
  private networkLibrary: NetworkLibrary;

  constructor(instance: NetworkLibrary) {
    this.networkLibrary = instance;
  }

  async addPost(request: AddPostRequest): Promise<AddPostResponse> {
    const params = ModelConverter.requestBodyGenerator(request);
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.FEED_POST}`, {
        method: "POST",
        data: params,
      })
      .then((resData: any) => {
        // Handle the response and return the LMResponse object
        const responseData: AddPostResponse =
          ModelConverter.responseBodyParser(resData);

        return responseData;
      })
      .catch((error) => {
        return {
          success: false,
          errorMessage: error,
        };
      });
  }

  public async getPost(
    getPost: GetPostRequest
  ): Promise<GetPostDetailsResponse> {
    return this.networkLibrary
      .makeAuthenticatedRequest(
        `${API.FEED_POST}/${getPost.postId}?page=${getPost.page}&page_size=${getPost.pageSize}`
      )
      .then((resData: any) => {
        const responseData: GetPostDetailsResponse =
          ModelConverter.responseBodyParser(resData);
        return responseData;
      })
      .catch((error) => {
        return {
          success: false,
          errorMessage: error,
        };
      });
  }

  //   FEED_POST
  // TBD
  public async savePost(savePost: SavePostRequest): Promise<any> {
    const params = savePost;
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.FEED_POST}/${savePost.postId}/save`, {
        method: "PUT",
        data: params,
      })
      .then(() => {
        return new LMResponse<any>(null, null, true);
      })
      .catch((error) => {
        return {
          success: false,
          errorMessage: error,
        };
      });
  }

  public async getPostLikes(
    request: GetPostLikesRequest
  ): Promise<GetPostLikesResponse> {
    return this.networkLibrary
      .makeAuthenticatedRequest(
        `${API.FEED_POST}/${request.postId}/like?page=${request.page}&page_size=${request.pageSize}`
      )
      .then((resData: any) => {
        const responseData: GetPostLikesResponse =
          ModelConverter.responseBodyParser(resData);
        return responseData;
      })
      .catch((error) => {
        return {
          success: false,
          errorMessage: error,
        };
      });
  }

  public async likePost(likePost: LikePostRequest): Promise<LikePostResponse> {
    const params = ModelConverter.requestBodyGenerator(likePost);
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.FEED_POST}/${likePost.postId}/like`, {
        method: "PUT",
        data: params,
      })
      .then((res: any) => {
        return ModelConverter.responseBodyParser(res);
      })
      .catch((error) => {
        return {
          success: false,
          errorMessage: error,
        };
      });
  }

  public async pinPost(pinPost: PinPostRequest): Promise<GetPinPostResponse> {
    const params = ModelConverter.requestBodyGenerator(pinPost);
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.FEED_POST}/${pinPost.postId}/pin`, {
        method: "PUT",
        data: params,
      })
      .then((res: any) => {
        return ModelConverter.responseBodyParser(res);
      })
      .catch((error) => {
        return {
          success: false,
          errorMessage: error,
        };
      });
  }

  editPost(editPost: EditPostRequest): Promise<EditPostResponse> {
    const params = ModelConverter.requestBodyGenerator(editPost);
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.FEED_POST}/${editPost.postId}`, {
        method: "PUT",
        data: params,
      })
      .then((resData: any) => {
        const responseData: EditPostResponse =
          ModelConverter.responseBodyParser(resData);
        return responseData;
      })
      .catch((error) => {
        return {
          success: false,
          errorMessage: error,
        };
      });
  }

  deletePost(deletePost: DeletePostRequest): Promise<DeletePostResponse> {
    const params = ModelConverter.requestBodyGenerator(deletePost);
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.FEED_POST}/${deletePost.postId}`, {
        method: "DELETE",
        data: params,
      })
      .then((res: any) => {
        return ModelConverter.responseBodyParser(res);
      })
      .catch((error) => {
        return {
          success: false,
          errorMessage: error,
        };
      });
  }

  decodeUrl(decodeUrl: DecodeURLRequest): Promise<any> {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${API.HELPER_URL}?url=${decodeUrl.url}`
    );
  }
  getTaggingList(
    taggingList: GetTaggingListRequest
  ): Promise<GetTaggingListResponse> {
    return this.networkLibrary
      .makeAuthenticatedRequest(
        `${API.CHATROOM_GET_TAGGINNG_LIST}?page=${taggingList.page}&page_size=${taggingList.pageSize}&search_name=${taggingList.searchName}`
      )
      .then((resData: any) => {
        const responseData = ModelConverter.responseBodyParser(resData);
        return responseData;
      })
      .catch((error) => {
        return {
          success: false,
          errorMessage: error,
        };
      });
  }
  getPostComments(taggingList: GetTaggingListRequest): Promise<any> {
    return this.networkLibrary
      .makeAuthenticatedRequest(
        `${API.CHATROOM_GET_TAGGINNG_LIST}?page=${taggingList.page}&page_size=${taggingList.pageSize}&search_name=${taggingList.searchName}`
      )
      .then((resData: any) => {
        const responseData = ModelConverter.responseBodyParser(resData);
        return new LMResponse<any>(responseData, null, true);
      })
      .catch((error) => {
        return {
          success: false,
          errorMessage: error,
        };
      });
  }

  getTopics(request: GetTopicsRequest): Promise<GetTopicsResponse> {
    return this.networkLibrary
      .makeAuthenticatedRequest(
        request.isEnabled === null
          ? `${API.FEED_TOPIC}?page=${request.page}&page_size=${request.pageSize}&search=${request.search}&search_type=${request.searchType}`
          : `${API.FEED_TOPIC}?page=${request.page}&page_size=${request.pageSize}&search=${request.search}&search_type=${request.searchType}&is_enabled=${request.isEnabled}`
      )
      .then((resData: any) => {
        const responseData = ModelConverter.responseBodyParser(resData);
        return responseData;
      })
      .catch((error) => {
        return {
          success: false,
          errorMessage: error,
        };
      });
  }
}

export default PostClient;
