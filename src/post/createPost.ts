import {
  SaveTemporaryPostRequest,
  LMResponse,
  GetTemporaryPostResponse,
  DeleteTemporaryPostRequest,
} from "./model/TempPost";

export class CreatePost {
  private async requestPersistentStorage(): Promise<boolean> {
    if (navigator.storage && navigator.storage.persist) {
      return await navigator.storage.persist();
    }
    return false;
  }

  async saveTemporaryPost(
    request: SaveTemporaryPostRequest
  ): Promise<LMResponse> {
    try {
      await this.requestPersistentStorage();
      const db = await this.openIndexedDB();
      const transaction = db.transaction(["temporaryPosts"], "readwrite");
      const store = transaction.objectStore("temporaryPosts");

      await new Promise<void>((resolve, reject) => {
        const addRequest = store.add(request.tempPost);
        addRequest.onsuccess = () => resolve();
        addRequest.onerror = () => reject(addRequest.error);
      });

      return { success: true };
    } catch (error) {
      return {
        success: false,
        errorMessage: "Error while saving post",
      };
    }
  }

  async getTemporaryPost(): Promise<LMResponse<GetTemporaryPostResponse>> {
    try {
      await this.requestPersistentStorage();
      const db = await this.openIndexedDB();
      const transaction = db.transaction(["temporaryPosts"], "readonly");
      const store = transaction.objectStore("temporaryPosts");

      const posts = await new Promise<any[]>((resolve, reject) => {
        const getRequest = store.getAll();
        getRequest.onsuccess = () => resolve(getRequest.result);
        getRequest.onerror = () => reject(getRequest.error);
      });

      // Get the most recent post
      const latestPost = posts[posts.length - 1] || null;

      return {
        success: true,
        data: { tempPost: latestPost },
      };
    } catch (error) {
      return {
        success: false,
        errorMessage: "Error while fetching post",
      };
    }
  }

  async deleteTemporaryPost(
    request: DeleteTemporaryPostRequest
  ): Promise<LMResponse> {
    try {
      await this.requestPersistentStorage();
      const db = await this.openIndexedDB();
      const transaction = db.transaction(["temporaryPosts"], "readwrite");
      const store = transaction.objectStore("temporaryPosts");

      await new Promise<void>((resolve, reject) => {
        const deleteRequest = store.delete(Number(request.temporaryPostId));
        deleteRequest.onsuccess = () => resolve();
        deleteRequest.onerror = () => reject(deleteRequest.error);
      });

      return { success: true };
    } catch (error){ 
      return {
        success: false,
        errorMessage: "Error while deleting post",
      };
    }
  }

  private async openIndexedDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("FeedDB", 1);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains("temporaryPosts")) {
          db.createObjectStore("temporaryPosts", { autoIncrement: true });
        }
      };
    });
  }
}
