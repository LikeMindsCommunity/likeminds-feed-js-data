import LMResponse from "src/core/services/lmresponse";
import { environment } from "src/environment";
import { API } from "src/shared/constants/api.constant";
import NetworkLibrary from "src/core/services/networklibrary";
import InitiateUserRequest from "src/initiateUser/model/InitiateUserRequest";
import { InitiateUserResponse } from "src/initiateUser/model/InitiateUserResponse";
import AddPostRequest from "./model/AddPostRequest";
import { ModelConverter } from "src/utils/ModelConverter";
import { IAddPostResponse } from "./model/AddPostResponse";
import DeletePostRequest from "./model/DeletePostRequest";
import GetPostRequest from "./model/GetPostRequest";
import { GetPostResponse } from "./model/GetPostResponse";
import SavePostRequest from "./model/SavePostRequest";
import GetPostLikesRequest from "./model/GetPostLikesRequest";
import { GetPostLikesResponse } from "./model/GetPostLikesResponse";
import LikePostRequest from "./model/LikePostRequest";
import PinPostRequest from "./model/PinPostRequest";
import EditPostRequest from "./model/EditPostRequest";
import { EditPostResponse } from "./model/EditPostResponse";
import DecodeURLRequest from "./model/DecodeUrlRequest";

class PostClient {
  private networkLibrary: NetworkLibrary;

  constructor(instance: NetworkLibrary) {
    this.networkLibrary = instance;
  }

  async addPost(
    request: AddPostRequest
  ): Promise<LMResponse<IAddPostResponse>> {
    console.log("DL Request s=> ", request);

    const params = ModelConverter.requestBodyGenerator(request);
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.FEED_POST}`, {
        method: "POST",
        data: params,
      })
      .then((resData: any) => {
        // Handle the response and return the LMResponse object
        const responseData: IAddPostResponse =
          ModelConverter.responseBodyParser(resData.data);

        return new LMResponse<IAddPostResponse>(responseData, null, true);
      })
      .catch((error) => {
        return new LMResponse<IAddPostResponse>(
          null,
          error.message || "An error occurred",
          false
        );
      });
  }

  public async getPost(
    getPost: GetPostRequest
  ): Promise<LMResponse<GetPostResponse>> {
    return this.networkLibrary
      .makeAuthenticatedRequest(
        `${API.FEED_POST}/${getPost.postId}?page=${getPost.page}&page_size=${getPost.pageSize}`
      )
      .then((resData: any) => {
        const responseData: GetPostResponse = ModelConverter.responseBodyParser(
          resData.data
        );
        return new LMResponse<GetPostResponse>(responseData, null, true);
      })
      .catch((error) => {
        return new LMResponse<GetPostResponse>(
          null,
          error.message || "An error occurred",
          false
        );
      });
  }

  //   FEED_POST
  // TBD
  public async savePost(savePost: SavePostRequest): Promise<LMResponse<any>> {
    const params = savePost;
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.FEED_POST}/${savePost.postId}/save`, {
        method: "PUT",
        data: params,
      })
      .then(() => {
        return new LMResponse<any>(null, null, true);
      })
      .catch((error: any) => {
        return new LMResponse<any>(
          null,
          error.message || "An error occoured",
          false
        );
      });
  }

  public async getPostLikes(
    request: GetPostLikesRequest
  ): Promise<LMResponse<GetPostLikesResponse>> {
    return this.networkLibrary
      .makeAuthenticatedRequest(
        `${API.FEED_POST}/${request.postId}/like?page=${request.page}&page_size=${request.pageSize}`
      )
      .then((resData: any) => {
        const responseData: GetPostLikesResponse =
          ModelConverter.responseBodyParser(resData.data);
        return new LMResponse<GetPostLikesResponse>(responseData, null, true);
      })
      .catch((error: any) => {
        return new LMResponse<GetPostLikesResponse>(
          null,
          error.message || "An error occoured",
          false
        );
      });
  }

  public async likePost(likePost: LikePostRequest): Promise<LMResponse<any>> {
    const params = ModelConverter.requestBodyGenerator(likePost);
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.FEED_POST}/${likePost.postId}/like`, {
        method: "PUT",
        data: params,
      })
      .then(() => {
        return new LMResponse<any>({}, null, true);
      })
      .catch((error: any) => {
        return new LMResponse<any>(
          null,
          error.message || "An error occoured",
          false
        );
      });
  }

  public async pinPost(pinPost: PinPostRequest): Promise<LMResponse<any>> {
    const params = ModelConverter.requestBodyGenerator(pinPost);
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.FEED_POST}/${pinPost.postId}/pin`, {
        method: "PUT",
        data: params,
      })
      .then(() => {
        return new LMResponse<any>({}, null, true);
      })
      .catch((error: any) => {
        return new LMResponse<any>(
          null,
          error.message || "An error occoured",
          false
        );
      });
  }

  editPost(editPost: EditPostRequest): Promise<LMResponse<EditPostResponse>> {
    const params = ModelConverter.requestBodyGenerator(editPost);
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.FEED_POST}/${editPost.postId}`, {
        method: "PUT",
        data: params,
      })
      .then((resData: any) => {
        const responseData: EditPostResponse =
          ModelConverter.responseBodyParser(resData.data);
        return new LMResponse<EditPostResponse>(responseData, null, true);
      })
      .catch((error: any) => {
        return new LMResponse<EditPostResponse>(
          null,
          error.message || "An error occoured",
          false
        );
      });
  }

  deletePost(deletePost: DeletePostRequest): Promise<LMResponse<any>> {
    const params = ModelConverter.requestBodyGenerator(deletePost);
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.FEED_POST}/${deletePost.postId}`, {
        method: "DELETE",
        data: params,
      })
      .then(() => {
        return new LMResponse<any>({}, null, true);
      })
      .catch((error: any) => {
        return new LMResponse<any>(
          null,
          error.message || "An error occoured",
          false
        );
      });
  }

  decodeUrl(decodeUrl: DecodeURLRequest): Promise<any> {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${API.HELPER_URL}?url=${decodeUrl.url}`
    );
  }
}

export default PostClient;
