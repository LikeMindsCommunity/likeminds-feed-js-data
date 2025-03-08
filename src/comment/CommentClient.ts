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
import { GetCommentLikes } from "../types/api-responses/getCommentLikesResponse";
import { DeleteComment } from "../types/api-responses/deleteCommentResponse";

class CommentClient {
  public networkLibrary: NetworkLibrary;

  constructor(instance: NetworkLibrary) {
    this.networkLibrary = instance;
  }

  public async addComment(addComment: AddCommentRequest) {
    const params = ModelConverter.requestBodyGenerator(addComment);
    return this.networkLibrary
      .makeAuthenticatedRequest<PostComment>(
        `${API.FEED_POST}/${addComment.postId}/comment`,
        {
          method: "POST",
          data: params,
          headers: {
            "x-accept-version": "v1",
          },
        }
      )
      .then((resData: any) => {
        const responseData = ModelConverter.responseBodyParser(resData);
        return responseData;
      });
  }

  public async getComment(getCommentRequest: GetCommentRequest) {
    return this.networkLibrary
      .makeAuthenticatedRequest<GetCommentDetails>(
        `${API.FEED_POST}/${getCommentRequest.postId}/comment/${getCommentRequest.commentId}?page=${getCommentRequest.page}&page_size=${getCommentRequest.pageSize}`,
        {
          method: "GET",
          headers: {
            "x-accept-version": "v1",
          },
        }
      )
      .then((resData: any) => {
        const responseData = ModelConverter.responseBodyParser(resData);
        return responseData;
      });
  }

  public async getCommentLikes(request: GetCommentLikesRequest) {
    return this.networkLibrary.makeAuthenticatedRequest<GetCommentLikes>(
      `${API.FEED_POST}/${request.postId}/comment/${request.commentId}/like?page=${request.page}&page_size=${request.pageSize}`,
      {
        method: "GET",
        headers: {
          "x-accept-version": "v1",
        },
      }
    );
  }

  public async likeComment(request: LikeCommentRequest) {
    return this.networkLibrary.makeAuthenticatedRequest<LikeComment>(
      `${API.FEED_POST}/${request.postId}/comment/${request.commentId}/like`,
      {
        method: "PUT",
        data: ModelConverter.requestBodyGenerator(request),
        headers: {
          "x-accept-version": "v1",
        },
      }
    );
  }

  public async replyComment(request: ReplyCommentRequest) {
    const params = ModelConverter.requestBodyGenerator(request);
    return this.networkLibrary.makeAuthenticatedRequest<PostComment>(
      `${API.FEED_POST}/${request.postId}/comment/${request.commentId}/comment`,
      {
        method: "POST",
        data: params,
        headers: {
          "x-accept-version": "v1",
        },
      }
    );
  }

  public async editComment(request: EditCommentRequest) {
    const params = ModelConverter.requestBodyGenerator(request);
    return this.networkLibrary.makeAuthenticatedRequest<EditComment>(
      `${API.FEED_POST}/${request.postId}/comment/${request.commentId}`,
      {
        method: "PUT",
        data: params,
        headers: {
          "x-accept-version": "v1",
        },
      }
    );
  }

  public async deleteComment(request: DeleteCommentRequest) {
    const params = ModelConverter.requestBodyGenerator(request);
    return this.networkLibrary.makeAuthenticatedRequest<DeleteComment>(
      `${API.FEED_POST}/${request.postId}/comment/${request.commentId}`,
      {
        method: "DELETE",
        data: params,
        headers: {
          "x-accept-version": "v1",
        },
      }
    );
  }
}

export default CommentClient;
