import httpInst from "src/core/services/base.service";
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

export class UniversalFeed {
  // Get Universal Feed
  getFeed(feed: Feed): Promise<any> {
    return httpInst.get(
      `${API.FEED_UNIVERSAL}?page=${feed.page}&page_size=${feed.pageSize}`
    );
  }
  //   FEED_POST
  addPost(addPost: AddPost): Promise<any> {
    const params = {
      text: addPost.text,
      attachments: addPost.attachments,
    };
    return httpInst.post(`${API.FEED_POST}`, params);
  }

  savePost(savePost: SavePost, postId: string): Promise<any> {
    const params = savePost;
    return httpInst.put(`${API.FEED_POST}/${postId}/save`, params);
  }

  getPost(getPost: GetPost, postId: string): Promise<any> {
    return httpInst.get(
      `${API.FEED_POST}/${postId}?page=${getPost.page}&page_size=${getPost.pageSize}`
    );
  }

  getPostLikes(getPost: GetPost, postId: string): Promise<any> {
    return httpInst.get(
      `${API.FEED_POST}/${postId}/like?page=${getPost.page}&page_size=${getPost.pageSize}`
    );
  }

  likePost(likePost: LikePost, postId: string): Promise<any> {
    const params = likePost;
    return httpInst.put(`${API.FEED_POST}/${postId}/like`, params);
  }

  pinPost(pinPost: PinPost, postId: string): Promise<any> {
    const params = pinPost;
    return httpInst.put(`${API.FEED_POST}/${postId}/pin`, params);
  }

  editPost(editPost: EditPost, postId: string): Promise<any> {
    const params = {
      text: editPost.text,
      attachments: editPost.attachments,
    };
    return httpInst.put(`${API.FEED_POST}/${postId}`, params);
  }

  addComment(addComment: AddComment, postId: string): Promise<any> {
    const params = {
      text: addComment.text,
    };
    return httpInst.post(`${API.FEED_POST}/${postId}/comment`, params);
  }

  getComment(
    getComment: GetComment,
    postId: string,
    commentId: any
  ): Promise<any> {
    return httpInst.get(
      `${API.FEED_POST}/${postId}/comment/${commentId}?page=${getComment.page}&page_size=${getComment.pageSize}`
    );
  }
  getCommentLikes(
    getComment: GetComment,
    postId: string,
    commentId: any
  ): Promise<any> {
    return httpInst.get(
      `${API.FEED_POST}/${postId}/comment/${commentId}/like?page=${getComment.page}&page_size=${getComment.pageSize}`
    );
  }

  likeComment(postId: string, commentId: any): Promise<any> {
    return httpInst.put(`${API.FEED_POST}/${postId}/comment/${commentId}/like`);
  }

  replyComment(text: string, postId: string, commentId: any): Promise<any> {
    const params = {
      text: text,
    };
    return httpInst.post(
      `${API.FEED_POST}/${postId}/comment/${commentId}/comment`,
      params
    );
  }

  editComment(text: string, postId: string, commentId: any): Promise<any> {
    const params = {
      text: text,
    };
    return httpInst.put(
      `${API.FEED_POST}/${postId}/comment/${commentId}`,
      params
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
    return httpInst.delete(`${API.FEED_POST}/${postId}/comment/${commentId}`, {
      data: params,
    });
  }

  deletePost(deletePost: DeletePost, postId: string): Promise<any> {
    const params = {
      delete_reason: deletePost.deleteReason,
    };
    return httpInst.delete(`${API.FEED_POST}/${postId}`, { data: params });
  }

  decodeUrl(decodeUrl: DecodeUrl): Promise<any> {
    return httpInst.get(`${API.HELPER_URL}?url=${decodeUrl.url}`);
  }
}
