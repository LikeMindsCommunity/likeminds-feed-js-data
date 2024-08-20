import { API } from "../../src/shared/constants/api.constant";
import NetworkLibrary from "../../src/core/services/networklibrary";
import AddCommentRequest from "./model/AddCommentRequest";
import GetCommentRequest from "./model/GetCommentRequest";
import GetCommentLikesRequest from "./model/GetCommentLikesRequest";
import { ModelConverter } from "../../src/utils/ModelConverter";

import ReplyCommentRequest from "./model/ReplyCommentRequest";

import { EditCommentResponse } from "../types/api-responses/postCommentResponse";
import DeleteCommentRequest from "./model/DeleteCommentRequest";
import LikeCommentRequest from "./model/LikeCommentRequest";

import EditCommentRequest from "./model/EditCommentRequest";
import {
  PostCommentResponse,
  PostReplyResponse,
} from "../types/api-responses/postCommentResponse";
import { GetCommentDetailsResponse } from "../types/api-responses/getCommentDetailsResponse";
import { GetPostLikesResponse } from "../types/api-responses/getPostLikesResponse";
import { LikeCommentResponse } from "../types/api-responses/likeCommentResponse";

class CommentClient {
  public networkLibrary: NetworkLibrary;

  constructor(instance: NetworkLibrary) {
    this.networkLibrary = instance;
  }

  addComment(addComment: AddCommentRequest): Promise<PostCommentResponse> {
    const params = ModelConverter.requestBodyGenerator(addComment);
    return this.networkLibrary
      .makeAuthenticatedRequest(
        `${API.FEED_POST}/${addComment.postId}/comment`,
        {
          method: "POST",
          data: params,
        }
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

  getComment(
    getComment: GetCommentRequest,
    postId: string,
    commentId: any
  ): Promise<GetCommentDetailsResponse> {
    return this.networkLibrary
      .makeAuthenticatedRequest(
        `${API.FEED_POST}/${postId}/comment/${commentId}?page=${getComment.page}&page_size=${getComment.pageSize}`
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
  getCommentLikes(
    request: GetCommentLikesRequest
  ): Promise<GetPostLikesResponse> {
    return this.networkLibrary
      .makeAuthenticatedRequest(
        `${API.FEED_POST}/${request.postId}/comment/${request.commentId}/like?page=${request.page}&page_size=${request.pageSize}`
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

  likeComment(request: LikeCommentRequest): Promise<LikeCommentResponse> {
    return this.networkLibrary
      .makeAuthenticatedRequest(
        `${API.FEED_POST}/${request.postId}/comment/${request.commentId}/like`,
        {
          method: "PUT",
          data: ModelConverter.requestBodyGenerator(request),
        }
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

  replyComment(request: ReplyCommentRequest): Promise<PostReplyResponse> {
    const params = ModelConverter.requestBodyGenerator(request);
    return this.networkLibrary
      .makeAuthenticatedRequest(
        `${API.FEED_POST}/${request.postId}/comment/${request.commentId}/comment`,
        {
          method: "POST",
          data: params,
        }
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

  editComment(request: EditCommentRequest): Promise<EditCommentResponse> {
    const params = ModelConverter.requestBodyGenerator(request);
    return this.networkLibrary
      .makeAuthenticatedRequest(
        `${API.FEED_POST}/${request.postId}/comment/${request.commentId}`,
        {
          method: "PUT",
          data: params,
        }
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

  deleteComment(request: DeleteCommentRequest): Promise<DeleteCommentRequest> {
    const params = ModelConverter.requestBodyGenerator(request);
    return this.networkLibrary
      .makeAuthenticatedRequest(
        `${API.FEED_POST}/${request.postId}/comment/${request.commentId}`,
        {
          method: "DELETE",
          data: params,
        }
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

export default CommentClient;
