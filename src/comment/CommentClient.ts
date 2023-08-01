import LMResponse from "src/core/services/lmresponse";
import { environment } from "src/environment";
import { API } from "src/shared/constants/api.constant";
import NetworkLibrary from "src/core/services/networklibrary";
import InitiateUserRequest from "src/initiateUser/model/InitiateUserRequest";
import { InitiateUserResponse } from "src/initiateUser/model/InitiateUserResponse";
import AddCommentRequest from "./model/AddCommentRequest";
import GetCommentRequest from "./model/GetCommentRequest";
import GetCommentLikesRequest from "./model/GetCommentLikesRequest";

class CommentClient {
  public networkLibrary = new NetworkLibrary();

  constructor() {}

  public async initiateUser(
    request: InitiateUserRequest
  ): Promise<LMResponse<InitiateUserResponse>> {
    const params = {
      is_guest: request?.isGuest,
      user_unique_id: request?.uuid,
      user_name: request?.userName,
    };

    return this.networkLibrary
      .makeAuthenticatedRequest(`${environment.apiUrl}${API.SDK_INITIATE}`, {
        method: "POST",
        data: params,
      })
      .then((resData: any) => {
        const accessToken = resData?.data?.access_token;
        this.networkLibrary.setAccessToken(accessToken);
        const refreshToken = resData?.data?.refresh_token;
        this.networkLibrary.setRefreshToken(refreshToken);

        // Handle the response and return the LMResponse object
        const responseData: InitiateUserResponse = {
          accessToken: resData?.data?.accessToken,
          refreshToken: resData?.data?.refreshToken,
          user: resData?.data.user,
          community: resData?.data.community,
          appAccess: resData?.data.appAccess,
          hasAnswers: false,
        };

        return new LMResponse<InitiateUserResponse>(responseData, null, true);
      })
      .catch((error) => {
        return new LMResponse<InitiateUserResponse>(
          null,
          error.message || "An error occurred",
          false
        );
      });
  }

  addComment(addComment: AddCommentRequest, postId: string): Promise<any> {
    const params = {
      text: addComment.text,
    };
    return this.networkLibrary.makeAuthenticatedRequest(
      `${API.FEED_POST}/${postId}/comment`,
      {
        method: "POST",
        data: params,
      }
    );
  }

  getComment(
    getComment: GetCommentRequest,
    postId: string,
    commentId: any
  ): Promise<any> {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${API.FEED_POST}/${postId}/comment/${commentId}?page=${getComment.page}&page_size=${getComment.pageSize}`
    );
  }
  getCommentLikes(
    getComment: GetCommentLikesRequest,
    postId: string,
    commentId: any
  ): Promise<any> {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${API.FEED_POST}/${postId}/comment/${commentId}/like?page=${getComment.page}&page_size=${getComment.pageSize}`
    );
  }

  likeComment(postId: string, commentId: any): Promise<any> {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${API.FEED_POST}/${postId}/comment/${commentId}/like`,
      {
        method: "PUT",
        data: { params: "" },
      }
    );
  }

  replyComment(text: string, postId: string, commentId: any): Promise<any> {
    const params = {
      text: text,
    };
    return this.networkLibrary.makeAuthenticatedRequest(
      `${API.FEED_POST}/${postId}/comment/${commentId}/comment`,
      {
        method: "POST",
        data: params,
      }
    );
  }

  editComment(text: string, postId: string, commentId: any): Promise<any> {
    const params = {
      text: text,
    };
    return this.networkLibrary.makeAuthenticatedRequest(
      `${API.FEED_POST}/${postId}/comment/${commentId}`,
      {
        method: "PUT",
        data: params,
      }
    );
  }

  deleteComment(
    deleteReason: string,
    postId: string,
    commentId: any
  ): Promise<any> {
    const params = {
      delete_reason: deleteReason,
    };
    return this.networkLibrary.makeAuthenticatedRequest(
      `${API.FEED_POST}/${postId}/comment/${commentId}`,
      {
        method: "DELETE",
        data: params,
      }
    );
  }
}

export default CommentClient;
