import {TemporaryPost} from "../moderation/enums/index"

async function openIndexedDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("FeedDB", 1);

    request.onerror = () => {
      reject(request.error);
    };
    
    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      
      if (!db.objectStoreNames.contains(TemporaryPost.TEMPORARY_POST)) {
        db.createObjectStore(TemporaryPost.TEMPORARY_POST);
      }
    };
  });
}

export default openIndexedDB;
