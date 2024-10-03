import NetworkLibrary from "../../core/services/networklibrary";
import { API } from "../../shared/constants/api.constant";
import {
  AddComment,
  AddPost,
  DecodeUrl,
  DeletePost,
  EditPost,
  Feed,
  GetComment,
  GetPost,
  LikePost,
  PinPost,
  SavePost,
} from "./types";
import { environment } from "../../environment";

export class UniversalFeed {
  public networkLibrary: NetworkLibrary;
  constructor(networkLibrary: NetworkLibrary) {
    this.networkLibrary = networkLibrary;
  }
  // Get Universal Feed
  getFeed(feed: Feed): Promise<any> {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${environment.apiUrl}${API.FEED_UNIVERSAL}?page=${feed.page}&page_size=${feed.pageSize}`
    );
  }
  //   FEED_POST
  addPost(addPost: AddPost): Promise<any> {
    const params = {
      text: addPost.text,
      attachments: addPost.attachments,
    };
    return this.networkLibrary.makeAuthenticatedRequest(
      `${environment.apiUrl}${API.FEED_POST}`,
      {
        method: "POST",
        data: params,
      }
    );
  }

  savePost(savePost: SavePost, postId: string): Promise<any> {
    const params = savePost;
    return this.networkLibrary.makeAuthenticatedRequest(
      `${environment.apiUrl}${API.FEED_POST}/${postId}/save`,
      {
        method: "PUT",
        data: params,
      }
    );
  }

  getPost(getPost: GetPost, postId: string): Promise<any> {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${environment.apiUrl}${API.FEED_POST}/${postId}?page=${getPost.page}&page_size=${getPost.pageSize}`
    );
  }

  getPostLikes(getPost: GetPost, postId: string): Promise<any> {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${environment.apiUrl}${API.FEED_POST}/${postId}/like?page=${getPost.page}&page_size=${getPost.pageSize}`
    );
  }

  likePost(likePost: LikePost, postId: string): Promise<any> {
    const params = likePost;
    return this.networkLibrary.makeAuthenticatedRequest(
      `${API.FEED_POST}/${postId}/like`,
      {
        method: "PUT",
        data: params,
      }
    );
  }

  pinPost(pinPost: PinPost, postId: string): Promise<any> {
    const params = pinPost;
    return this.networkLibrary.makeAuthenticatedRequest(
      `${environment.apiUrl}${API.FEED_POST}/${postId}/pin`,
      {
        method: "PUT",
        data: params,
      }
    );
  }

  editPost(editPost: EditPost, postId: string): Promise<any> {
    const params = {
      text: editPost.text,
      attachments: editPost.attachments,
    };
    return this.networkLibrary.makeAuthenticatedRequest(
      `${environment.apiUrl}${API.FEED_POST}/${postId}`,
      {
        method: "PUT",
        data: params,
      }
    );
  }

  addComment(addComment: AddComment, postId: string): Promise<any> {
    const params = {
      text: addComment.text,
    };
    return this.networkLibrary.makeAuthenticatedRequest(
      `${environment.apiUrl}${API.FEED_POST}/${postId}/comment`,
      {
        method: "POST",
        data: params,
      }
    );
  }

  getComment(
    getComment: GetComment,
    postId: string,
    commentId: any
  ): Promise<any> {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${environment.apiUrl}${API.FEED_POST}/${postId}/comment/${commentId}?page=${getComment.page}&page_size=${getComment.pageSize}`
    );
  }
  getCommentLikes(
    getComment: GetComment,
    postId: string,
    commentId: any
  ): Promise<any> {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${API.FEED_POST}/${postId}/comment/${commentId}/like?page=${getComment.page}&page_size=${getComment.pageSize}`
    );
  }

  likeComment(postId: string, commentId: any): Promise<any> {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${environment.apiUrl}${API.FEED_POST}/${postId}/comment/${commentId}/like`,
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
      `${environment.apiUrl}${API.FEED_POST}/${postId}/comment/${commentId}/comment`,
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
      `${environment.apiUrl}${API.FEED_POST}/${postId}/comment/${commentId}`,
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
      `${environment.apiUrl}${API.FEED_POST}/${postId}/comment/${commentId}`,
      {
        method: "DELETE",
        data: params,
      }
    );
  }

  deletePost(deletePost: DeletePost, postId: string): Promise<any> {
    const params = {
      delete_reason: deletePost.deleteReason,
    };
    return this.networkLibrary.makeAuthenticatedRequest(
      `${environment.apiUrl}${API.FEED_POST}/${postId}`,
      {
        method: "DELETE",
        data: params,
      }
    );
  }

  decodeUrl(decodeUrl: DecodeUrl): Promise<any> {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${environment.apiUrl}${API.HELPER_URL}?url=${decodeUrl.url}`
    );
  }
}
