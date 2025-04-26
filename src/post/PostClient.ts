import { API } from "../shared/constants/api.constant";
import NetworkLibrary from "../core/services/networklibrary";
import AddPostRequest from "./model/AddPostRequest";
import { ModelConverter } from "../utils/ModelConverter";
import DeletePostRequest from "./model/DeletePostRequest";
import GetPostRequest from "./model/GetPostRequest";
// import { GetPostResponse } from "./model/GetPostResponse";
import SavePostRequest from "./model/SavePostRequest";
import GetPostLikesRequest from "./model/GetPostLikesRequest";
import { GetPostLikes } from "../types/api-responses/getPostLikesResponse";
import LikePostRequest from "./model/LikePostRequest";
import PinPostRequest from "./model/PinPostRequest";
import EditPostRequest from "./model/EditPostRequest";
import { EditPost } from "../types/api-responses/addPostResponse";
import DecodeURLRequest from "./model/DecodeUrlRequest";
import GetTaggingListRequest from "./model/GetTaggingListRequest";
import GetTopicsRequest from "./model/GetTopicsRequest";
import { AddPost } from "../types/api-responses/addPostResponse";
import { GetPostDetails } from "../types/api-responses/getPostDetailsResponse";
import { LikePost } from "../types/api-responses/likePostResponse";
import { GetPinPost } from "../types/api-responses/getPinPostResponse";
import { DeletePost } from "../types/api-responses/deletePostResponse";
import { GetTaggingList } from "../types/api-responses/getTaggingListResponse";
import { GetTopics } from "../types/api-responses/getTopicsResponse";
import { DecodeURL } from "../types/api-responses/decodeUrlResponse";
import { SavePost } from "../types/api-responses/savePostResponse";
import HidePostRequest from "./model/HidePostRequest";
import UpdateUserTopicsRequest from "./model/UpdateUserTopicsRequest";
import GetUserTopicsRequest from "./model/GetUserTopicsRequest";
import { GetUserTopicsResponse } from "src/types/api-responses/getUserTopicsResponse";
import PostSeenRequest from "./model/PostSeenRequest";
import { PostSeen } from "../types/api-responses/postSeenResponse";
import { TempPost } from "../types/models/TempPost";
import SaveTemporaryPostRequest from "./model/SaveTemporaryPostRequest";
import DeleteTemporaryPostRequest from "./model/DeleteTemporaryPostRequest";
import { GetTemporaryPostResponse } from "../types/api-responses/GetTemporaryPostResponse";
import LMResponseType from "../LMResponse";

class PostClient {
  private networkLibrary: NetworkLibrary;

  constructor(instance: NetworkLibrary) {
    this.networkLibrary = instance;
  }

  async addPost(request: AddPostRequest) {
    const params = ModelConverter.requestBodyGenerator(request);
    const resData = await this.networkLibrary.makeAuthenticatedRequest<AddPost>(
      `${API.FEED_POST}`,
      {
        method: "POST",
        data: params,
        headers: {
          "x-accept-version": "v1",
        },
      }
    );

    // Handle the response and return the LMResponse object
    // const responseData: AddPostResponse =
    //   ModelConverter.responseBodyParser(resData);

    return resData;
  }
  public async getPost(getPost: GetPostRequest) {
    return await this.networkLibrary.makeAuthenticatedRequest<GetPostDetails>(
      `${API.FEED_POST}/${getPost.postId}?page=${getPost.page}&page_size=${getPost.pageSize}`,
      {
        method: "GET",
        headers: {
          "x-accept-version": "v1",
        },
      }
    );
  }

  public async savePost(savePost: SavePostRequest) {
    const params = savePost;
    return await this.networkLibrary.makeAuthenticatedRequest<SavePost>(
      `${API.FEED_POST}/${savePost.postId}/save`,
      {
        method: "PUT",
        data: params,
        headers: {
          "x-accept-version": "v1",
        },
      }
    );
  }

  public async getPostLikes(request: GetPostLikesRequest) {
    return await this.networkLibrary.makeAuthenticatedRequest<GetPostLikes>(
      `${API.FEED_POST}/${request.postId}/like?page=${request.page}&page_size=${request.pageSize}`,
      {
        method: "GET",
        headers: {
          "x-accept-version": "v1",
        },
      }
    );
  }

  public async likePost(likePost: LikePostRequest) {
    const params = ModelConverter.requestBodyGenerator(likePost);
    return await this.networkLibrary.makeAuthenticatedRequest<LikePost>(
      `${API.FEED_POST}/${likePost.postId}/like`,
      {
        method: "PUT",
        data: params,
        headers: {
          "x-accept-version": "v1",
        },
      }
    );
  }

  public async pinPost(pinPost: PinPostRequest) {
    const params = ModelConverter.requestBodyGenerator(pinPost);
    return await this.networkLibrary.makeAuthenticatedRequest<GetPinPost>(
      `${API.FEED_POST}/${pinPost.postId}/pin`,
      {
        method: "PUT",
        data: params,
        headers: {
          "x-accept-version": "v1",
        },
      }
    );
  }

  public async editPost(editPost: EditPostRequest) {
    const params = ModelConverter.requestBodyGenerator(editPost);
    return await this.networkLibrary.makeAuthenticatedRequest<EditPost>(
      `${API.FEED_POST}/${editPost.postId}`,
      {
        method: "PUT",
        data: params,
        headers: {
          "x-accept-version": "v1",
        },
      }
    );
  }

  public async deletePost(deletePost: DeletePostRequest) {
    const params = ModelConverter.requestBodyGenerator(deletePost);
    return await this.networkLibrary.makeAuthenticatedRequest<DeletePost>(
      `${API.FEED_POST}/${deletePost.postId}`,
      {
        method: "DELETE",
        data: params,
        headers: {
          "x-accept-version": "v1",
        },
      }
    );
  }
  public async hidePost(hidePostRequest: HidePostRequest) {
    return await this.networkLibrary.makeAuthenticatedRequest<undefined>(
      `${API.FEED_POST}/${hidePostRequest.postId}/hide`,
      {
        method: "PUT",
        headers: {
          "x-accept-version": "v1",
        },
      }
    );
  }
  public async decodeUrl(decodeUrl: DecodeURLRequest) {
    return await this.networkLibrary.makeAuthenticatedRequest<DecodeURL>(
      `${API.HELPER_URL}?url=${decodeUrl.url}`
    );
  }

  public async getTaggingList(taggingList: GetTaggingListRequest) {
    return await this.networkLibrary.makeAuthenticatedRequest<GetTaggingList>(
      `${API.CHATROOM_GET_TAGGINNG_LIST}?page=${taggingList.page}&page_size=${taggingList.pageSize}&search_name=${taggingList.searchName}`
    );
  }

  public async getTopics(request: GetTopicsRequest) {
    let requestUrl = `${API.FEED_TOPIC}?page=${request.page}&page_size=${request.pageSize}`;
    if (request.isEnabled) {
      requestUrl = requestUrl.concat(`&is_enabled=${request.isEnabled}`);
    }
    if (request.search) {
      requestUrl = requestUrl.concat(`&search=${request.search}`);
    }
    if (request.searchType) {
      requestUrl = requestUrl.concat(`&search_type=${request.searchType}`);
    }
    if (request.parentIds && request.parentIds.length > 0) {
      requestUrl = requestUrl.concat(
        `&parent_ids=${JSON.stringify(request.parentIds)}`
      );
    }
    if (request.orderBy && request.orderBy.length > 0) {
      requestUrl = requestUrl.concat(
        `&order_by=${JSON.stringify(request.orderBy)}`
      );
    }
    return this.networkLibrary.makeAuthenticatedRequest<GetTopics>(requestUrl);
  }

  public async updateUserTopics(request: UpdateUserTopicsRequest) {
    const { uuid, topicsIds } = request;

    return await this.networkLibrary
      .makeAuthenticatedRequest(`/feed/user/${uuid}/topics`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({ topic_ids: topicsIds }),
      })
      .then(() => {
        return {
          success: true,
        };
      })
      .catch((error) => {
        return {
          success: false,
          errorMessage: error,
        };
      });
  }

  public async getUserTopics(request: GetUserTopicsRequest) {
    const { uuids } = request;
    return await this.networkLibrary.makeAuthenticatedRequest<GetUserTopicsResponse>(
      `/feed/user/topics?uuids=${JSON.stringify(uuids)}`
    );
  }

  async postSeen(request: PostSeenRequest) {
    const params = ModelConverter.requestBodyGenerator(request);
    const responseData =
      await this.networkLibrary.makeAuthenticatedRequest<PostSeen>(
        `${API.POST_SEEN}`,
        {
          method: "POST",
          data: params,
        }
      );

    return responseData;
  }

  async saveTemporaryPost(request: SaveTemporaryPostRequest): Promise<LMResponseType<void>> {
    try {
      const db = await this.openIndexedDB();
      const transaction = db.transaction(["temporaryPosts"], "readwrite");
      const store = transaction.objectStore("temporaryPosts");
  
      // First, wait for the put operation
      await new Promise<void>((resolve, reject) => {
        console.log("Saving temporary post with ID:", request.tempPost.post.id);
        // Use consistent key - just the ID
        const putRequest = store.put(request.tempPost, request.tempPost.post.id);
        console.log("kar dia h save");
        console.log(request.tempPost);
        console.log(request.tempPost.post.id);
        putRequest.onsuccess = () => resolve();
        putRequest.onerror = () => reject(putRequest.error);
      });
  
      // Now wait for the transaction to complete
      await new Promise<void>((resolve, reject) => {
        transaction.oncomplete = () => {
          console.log("Transaction completed successfully");
          resolve();
        };
        transaction.onerror = () => reject(transaction.error);
      });
  
      return { success: true, errorMessage: null, data: undefined };
    } catch (error) {
      console.error("Exception in saveTemporaryPost:", error);
      return {
        success: false,
        errorMessage: error instanceof Error ? error.message : "Error while saving post",
        data: undefined,
      };
    }
  }
  
  async deleteTemporaryPost(
    request: DeleteTemporaryPostRequest
  ): Promise<LMResponseType<void>> {
    try {
      const db = await this.openIndexedDB();
      const transaction = db.transaction(["temporaryPosts"], "readwrite");
      const store = transaction.objectStore("temporaryPosts");
      
      await new Promise<void>((resolve, reject) => {
        const deleteRequest = store.delete(request.temporaryPostId);
        
        deleteRequest.onsuccess = () => resolve();
        deleteRequest.onerror = (event) => {
          console.error("Error deleting temporary post:", deleteRequest.error);
          reject(deleteRequest.error);
        };
      });
  
      return { success: true, errorMessage: null, data: undefined };
    } catch (error) {
      console.error("Exception in deleteTemporaryPost:", error);
      return {
        success: false,
        errorMessage: error instanceof Error ? error.message : "Error while deleting post",
        data: undefined,
      };
    }
  }
  
  async getTemporaryPost(): Promise<LMResponseType<GetTemporaryPostResponse>> {
    try {
      const db = await this.openIndexedDB();
      const transaction = db.transaction(["temporaryPosts"], "readonly");
      const store = transaction.objectStore("temporaryPosts");
  
      const posts = await new Promise<TempPost[]>((resolve, reject) => {
        const getRequest = store.getAll();
        getRequest.onsuccess = () => resolve(getRequest.result);
        getRequest.onerror = (event) => {
          console.error("Error fetching temporary posts:", getRequest.error);
          reject(getRequest.error);
        };
      });
  
      const latestPost = posts.length > 0 ? posts[posts.length - 1] : null;
  
      return {
        success: true,
        errorMessage: null,
        data: { tempPost: latestPost },
      };
    } catch (error) {
      console.error("Exception in getTemporaryPost:", error);
      return {
        success: false,
        errorMessage: error instanceof Error ? error.message : "Error while fetching post",
        data: { tempPost: null },
      };
    }
  }
  
  private async openIndexedDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      // Updated to version 5
      const request = indexedDB.open("FeedDB", 5);
  
      request.onerror = (event) => {
        console.error("IndexedDB open error:", request.error);
        reject(request.error);
      };
      
      request.onsuccess = (event) => {
        const db = request.result;
        console.log("Database opened successfully. Object stores:", 
                  Array.from(db.objectStoreNames));
        resolve(db);
      };
  
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        const oldVersion = event.oldVersion;
        console.log(`Database upgrade needed from ${oldVersion} to ${db.version}`);
        
        // Only create the store if it doesn't exist
        if (!db.objectStoreNames.contains("temporaryPosts")) {
          console.log("Creating temporaryPosts store");
          const store = db.createObjectStore("temporaryPosts");
        } else {
          console.log("temporaryPosts store already exists");
        }
        
        // Add transaction complete handler to log successful setup
        if (request.transaction) {
          request.transaction.oncomplete = () => {
            console.log("IndexedDB setup complete for temporaryPosts store");
          };
        }
      };
    });
  }
}
export default PostClient;
