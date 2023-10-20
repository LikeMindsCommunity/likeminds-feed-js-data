import LMResponse from "../../src/core/services/lmresponse";
import { environment } from "../../src/environment";
import { API } from "../../src/shared/constants/api.constant";
import NetworkLibrary from "../../src/core/services/networklibrary";
import AddCommentRequest from "./model/AddCommentRequest";
import GetCommentRequest from "./model/GetCommentRequest";
import GetCommentLikesRequest from "./model/GetCommentLikesRequest";
import { ModelConverter } from "../../src/utils/ModelConverter";
import { GetCommentResponse } from "./model/GetCommentResponse";
import { AddCommentResponse } from "./model/AddCommentResponse";
import ReplyCommentRequest from "./model/ReplyCommentRequest";
import { ReplyCommentResponse } from "./model/ReplyCommentResponse";
import { EditCommentResponse } from "./model/EditCommentResponse";
import DeleteCommentRequest from "./model/DeleteCommentRequest";
import LikeCommentRequest from "./model/LikeCommentRequest";
import { GetCommentLikesResponse } from "./model/GetCommentLikesResponse";
import EditCommentRequest from "./model/EditCommentRequest";

class CommentClient {
  public networkLibrary: NetworkLibrary;

  constructor(instance: NetworkLibrary) {
    this.networkLibrary = instance;
  }

  addComment(
    addComment: AddCommentRequest
  ): Promise<LMResponse<AddCommentResponse>> {
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
        const responseData = ModelConverter.responseBodyParser(resData.data);
        return new LMResponse<AddCommentResponse>(responseData, null, true);
      })
      .catch((error: any) => {
        return new LMResponse<AddCommentResponse>(
          null,
          error.message || "An error occoured",
          false
        );
      });
  }

  getComment(
    getComment: GetCommentRequest,
    postId: string,
    commentId: any
  ): Promise<LMResponse<GetCommentResponse>> {
    return this.networkLibrary
      .makeAuthenticatedRequest(
        `${API.FEED_POST}/${postId}/comment/${commentId}?page=${getComment.page}&page_size=${getComment.pageSize}`
      )
      .then((resData: any) => {
        const responseData = ModelConverter.responseBodyParser(resData.data);
        return new LMResponse<GetCommentResponse>(responseData, null, true);
      })
      .catch((error: any) => {
        return new LMResponse<GetCommentResponse>(
          null,
          error.message || "An error occoured",
          false
        );
      });
  }
  getCommentLikes(
    request: GetCommentLikesRequest
  ): Promise<LMResponse<GetCommentLikesResponse>> {
    return this.networkLibrary
      .makeAuthenticatedRequest(
        `${API.FEED_POST}/${request.postId}/comment/${request.commentId}/like?page=${request.page}&page_size=${request.pageSize}`
      )
      .then((resData: any) => {
        const responseData = ModelConverter.responseBodyParser(resData?.data);
        return new LMResponse<GetCommentLikesResponse>(
          responseData,
          null,
          true
        );
      })
      .catch((error: any) => {
        return new LMResponse<GetCommentLikesResponse>(
          null,
          error.message || "An error occoured",
          false
        );
      });
  }

  likeComment(request: LikeCommentRequest): Promise<LMResponse<any>> {
    return this.networkLibrary
      .makeAuthenticatedRequest(
        `${API.FEED_POST}/${request.postId}/comment/${request.commentId}/like`,
        {
          method: "PUT",
          data: ModelConverter.requestBodyGenerator(request),
        }
      )
      .then((resData: any) => {
        const responseData = ModelConverter.responseBodyParser(resData?.data);
        return new LMResponse<any>(responseData, null, true);
      })
      .catch((error: any) => {
        return new LMResponse<any>(
          null,
          error.message || "An error occoured",
          false
        );
      });
  }

  replyComment(
    request: ReplyCommentRequest
  ): Promise<LMResponse<ReplyCommentResponse>> {
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
        const responseData = ModelConverter.responseBodyParser(resData?.data);
        return new LMResponse<ReplyCommentResponse>(responseData, null, true);
      })
      .catch((error: any) => {
        return new LMResponse<ReplyCommentResponse>(
          null,
          error.message || "An error occoured",
          false
        );
      });
  }

  editComment(
    request: EditCommentRequest
  ): Promise<LMResponse<EditCommentResponse>> {
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
        const responseData = ModelConverter.responseBodyParser(resData.data);
        return new LMResponse<EditCommentResponse>(responseData, null, true);
      })
      .catch((error: any) => {
        return new LMResponse<EditCommentResponse>(
          null,
          error.message || "An error occoured",
          false
        );
      });
  }

  deleteComment(request: DeleteCommentRequest): Promise<LMResponse<any>> {
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
        const responseData = ModelConverter.responseBodyParser(resData?.data);
        return new LMResponse<any>(responseData, null, true);
      })
      .catch((error: any) => {
        return new LMResponse<any>(
          null,
          error.message || "An error occoured",
          false
        );
      });
  }
}

export default CommentClient;
