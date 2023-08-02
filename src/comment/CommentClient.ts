import LMResponse from "src/core/services/lmresponse";
import { environment } from "src/environment";
import { API } from "src/shared/constants/api.constant";
import NetworkLibrary from "src/core/services/networklibrary";
import AddCommentRequest from "./model/AddCommentRequest";
import GetCommentRequest from "./model/GetCommentRequest";
import GetCommentLikesRequest from "./model/GetCommentLikesRequest";
import EditCommentRequest from "./model/EditCommentRequest";
import ReplyCommentRequest from "./model/ReplyCommentRequest";
import { EditCommentResponse } from "./model/EditCommentResponse";
import { ReplyCommentResponse } from "./model/ReplyCommentResponse";
import { ModelConverter } from "src/utils/ModelConverter";
import LikeCommentRequest from "./model/LikeCommentRequest";
import DeleteCommentRequest from "./model/DeleteCommentRequest";

class CommentClient {
  public networkLibrary = new NetworkLibrary();

  constructor() {}

  addComment(addComment: AddCommentRequest): Promise<any> {
    const params = {
      text: addComment.text,
    };
    return this.networkLibrary.makeAuthenticatedRequest(
      `${API.FEED_POST}/${addComment.postId}/comment`,
      {
        method: "POST",
        data: params,
      }
    );
  }

  async getComment(
    request: GetCommentRequest
  ): Promise<LMResponse<ReplyCommentResponse>> {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${API.FEED_POST}/${request.postId}/comment/${request.commentId}?page=${request.page}&page_size=${request.pageSize}`
    );
  }
  getCommentLikes(request: GetCommentLikesRequest): Promise<any> {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${API.FEED_POST}/${request.postId}/comment/${request.commentId}/like?page=${request.page}&page_size=${request.pageSize}`
    );
  }

  likeComment(request: LikeCommentRequest): Promise<LMResponse<any>> {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${API.FEED_POST}/${request.postId}/comment/${request.commentId}/like`,
      {
        method: "PUT",
        data: { params: "" },
      }
    );
  }

  async replyComment(
    request: ReplyCommentRequest
  ): Promise<LMResponse<ReplyCommentResponse>> {
    const params = ModelConverter.requestBodyGenerator(request);
    return this.networkLibrary
      .makeAuthenticatedRequest(
        `${API.FEED_POST}/${request.postId}/comment/${request.commentId}`,
        {
          method: "POST",
          data: params,
        }
      )
      .then((resData: any) => {
        // Handle the response and return the LMResponse object
        const responseData: any = ModelConverter.responseBodyParser(
          resData.data
        );

        return new LMResponse<ReplyCommentResponse>(responseData, null, true);
      })
      .catch((error) => {
        return new LMResponse<ReplyCommentResponse>(
          null,
          error.message || "An error occurred",
          false
        );
      });
  }

  async editComment(
    request: EditCommentRequest
  ): Promise<LMResponse<EditCommentResponse>> {
    const params = {
      text: request.text,
    };
    return this.networkLibrary.makeAuthenticatedRequest(
      `${API.FEED_POST}/${request.postId}/comment/${request.commentId}`,
      {
        method: "PUT",
        data: params,
      }
    );
  }

  deleteComment(request: DeleteCommentRequest): Promise<any> {
    const params = {
      delete_reason: request.reason,
    };
    return this.networkLibrary.makeAuthenticatedRequest(
      `${API.FEED_POST}/${request.postId}/comment/${request.commentId}`,
      {
        method: "DELETE",
        data: params,
      }
    );
  }
}

export default CommentClient;
