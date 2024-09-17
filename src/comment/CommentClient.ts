import { API } from "../../src/shared/constants/api.constant";
import NetworkLibrary from "../../src/core/services/networklibrary";
import AddCommentRequest from "./model/AddCommentRequest";
import GetCommentRequest from "./model/GetCommentRequest";
import GetCommentLikesRequest from "./model/GetCommentLikesRequest";
import { ModelConverter } from "../../src/utils/ModelConverter";

import ReplyCommentRequest from "./model/ReplyCommentRequest";

import { EditComment } from "../types/api-responses/postCommentResponse";
import DeleteCommentRequest from "./model/DeleteCommentRequest";
import LikeCommentRequest from "./model/LikeCommentRequest";

import EditCommentRequest from "./model/EditCommentRequest";
import { PostComment } from "../types/api-responses/postCommentResponse";
import { GetCommentDetails } from "../types/api-responses/getCommentDetailsResponse";

import { LikeComment } from "../types/api-responses/likeCommentResponse";
import { GetCommentLikesResponse } from "./model/GetCommentLikesResponse";
import { ReplyCommentResponse } from "./model/ReplyCommentResponse";

class CommentClient {
  public networkLibrary: NetworkLibrary;

  constructor(instance: NetworkLibrary) {
    this.networkLibrary = instance;
  }

  addComment(addComment: AddCommentRequest) {
    const params = ModelConverter.requestBodyGenerator(addComment);
    return this.networkLibrary
      .makeAuthenticatedRequest<PostComment>(
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

  getComment(getComment: GetCommentRequest, postId: string, commentId: any) {
    return this.networkLibrary
      .makeAuthenticatedRequest<GetCommentDetails>(
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
  getCommentLikes(request: GetCommentLikesRequest) {
    return this.networkLibrary
      .makeAuthenticatedRequest<GetCommentLikesResponse>(
        `${API.FEED_POST}/${request.postId}/comment/${request.commentId}/like?page=${request.page}&page_size=${request.pageSize}`
      )
      .then((resData: any) => {
        return resData;
      })
      .catch((error) => {
        return {
          success: false,
          errorMessage: error,
        };
      });
  }

  likeComment(request: LikeCommentRequest) {
    return this.networkLibrary
      .makeAuthenticatedRequest<LikeComment>(
        `${API.FEED_POST}/${request.postId}/comment/${request.commentId}/like`,
        {
          method: "PUT",
          data: ModelConverter.requestBodyGenerator(request),
        }
      )
      .then((resData: any) => {
        return resData;
      })
      .catch((error) => {
        return {
          success: false,
          errorMessage: error,
        };
      });
  }

  replyComment(request: ReplyCommentRequest) {
    const params = ModelConverter.requestBodyGenerator(request);
    return this.networkLibrary
      .makeAuthenticatedRequest<ReplyCommentResponse>(
        `${API.FEED_POST}/${request.postId}/comment/${request.commentId}/comment`,
        {
          method: "POST",
          data: params,
        }
      )
      .then((resData) => {
        return resData;
      })
      .catch((error) => {
        return {
          success: false,
          errorMessage: error,
        };
      });
  }

  editComment(request: EditCommentRequest) {
    const params = ModelConverter.requestBodyGenerator(request);
    return this.networkLibrary
      .makeAuthenticatedRequest<EditComment>(
        `${API.FEED_POST}/${request.postId}/comment/${request.commentId}`,
        {
          method: "PUT",
          data: params,
        }
      )
      .then((resData) => {
        return resData;
      })
      .catch((error) => {
        return {
          success: false,
          errorMessage: error,
        };
      });
  }

  deleteComment(request: DeleteCommentRequest) {
    const params = ModelConverter.requestBodyGenerator(request);
    return this.networkLibrary
      .makeAuthenticatedRequest<undefined>(
        `${API.FEED_POST}/${request.postId}/comment/${request.commentId}`,
        {
          method: "DELETE",
          data: params,
        }
      )
      .then((resData) => {
        return resData;
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
