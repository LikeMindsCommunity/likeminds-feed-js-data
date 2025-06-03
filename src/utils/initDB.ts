import {TemporaryPost} from "../moderation/enums/index"

// Global variable to store the database connection
let dbInstance: IDBDatabase | null = null;
let dbInitializationPromise: Promise<IDBDatabase> | null = null;

/**
 * Opens a connection to the IndexedDB database
 * @returns Promise that resolves to an IDBDatabase instance
 */
async function openIndexedDB(): Promise<IDBDatabase> {
  // If we already have a database instance, return it
  if (dbInstance) {
    return dbInstance;
  }

  // If we're in the process of initializing the database, return that promise
  if (dbInitializationPromise) {
    return dbInitializationPromise;
  }

  // Otherwise, create a new initialization promise
  dbInitializationPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open("FeedDB", 1);

    request.onerror = () => {
      dbInitializationPromise = null;
      reject(request.error);
    };
    
    request.onsuccess = () => {
      dbInstance = request.result;
      resolve(request.result);
    };

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      
      if (!db.objectStoreNames.contains(TemporaryPost.TEMPORARY_POST)) {
        db.createObjectStore(TemporaryPost.TEMPORARY_POST);
      }
    };
  });

  return dbInitializationPromise;
}

/**
 * Initializes the database as early as possible
 * This function should be called during application startup
 */
export function initializeDatabase(): Promise<IDBDatabase> {
  return openIndexedDB();
}

/**
 * Gets the database instance, initializing it if necessary
 * @returns Promise that resolves to an IDBDatabase instance
 */
export function getDBInstance(): Promise<IDBDatabase> {
  return openIndexedDB();
}

export default openIndexedDB;
