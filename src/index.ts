// LMFeedClient.ts

import axios from "axios";
import { InitiateUserRequest } from "./initiateUser/model/InitiateUserRequest";
import LMResponse from "./core/services/lmresponse";
import { InitiateUserResponse } from "./initiateUser/model/InitiateUserResponse";
import { InitiateUserClient } from "./initiateUser/InitiateUserClient";

export class LMFeedClient {
  private baseUrl: string;
  private static instance: LMFeedClient;
    private InitiateUserClient: InitiateUserClient; // Assuming you have an InitiateUserClient class

  private constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public static getInstance(baseUrl?: string): LMFeedClient {
    if (!LMFeedClient.instance) {
      if (!baseUrl) {
        throw new Error('Base URL is required.');
      }
      LMFeedClient.instance = new LMFeedClient(baseUrl);
    }
    return LMFeedClient.instance;
  }

  public async getFeed(): Promise<any> {
    const url = `${this.baseUrl}/feed`;
    // Make an HTTP request to fetch the feed data
    // You can use a library like axios or fetch for making the request
    // Here's an example using axios
    const response = await axios.get(url);
    return response.data;
  }

    public async initiateUser(initiateUserRequest: InitiateUserRequest): Promise<LMResponse<InitiateUserResponse>> {
    return this.InitiateUserClient.initiateUser(initiateUserRequest);
  }

  // public async initiateUser(initiateUserRequest: InitiateUserRequest): Promise<LMResponse<InitiateUserResponse>> {
  //   const url = `${this.baseUrl}/initiateUser`;
  //   // Make an HTTP request to initiate the user
  //   // You can use a library like axios or fetch for making the request
  //   // Here's an example using axios
  //   const response = await axios.post(url, initiateUserRequest);
  //   return response.data;
  // }
}


// // LMFeedClient.ts

// import axios from "axios";
// import LMResponse from "./core/services/lmresponse";
// import { InitiateUserClient } from './initiateUser/InitiateUserClient';
// import { InitiateUserRequest } from "./initiateUser/model/InitiateUserRequest";
// import { InitiateUserResponse } from "./initiateUser/model/InitiateUserResponse";

// export class LMFeedClient {
//   private baseUrl: string;
//   private InitiateUserClient: InitiateUserClient; // Assuming you have an InitiateUserClient class
//   private static instance: LMFeedClient;


//   constructor(baseUrl: string) {
//     this.baseUrl = baseUrl;
//     this.InitiateUserClient = new InitiateUserClient(); // Create an instance of InitiateUserClient
//   }

//   // public static getInstance(baseUrl?: string): LMFeedClient {
//   //   if (!LMFeedClient.instance) {
//   //     if (!baseUrl) {
//   //       throw new Error('Base URL is required.');
//   //     }
//   //     LMFeedClient.instance = new LMFeedClient(baseUrl);
//   //   }
//   //   return LMFeedClient.instance;
//   // }

//   public async getFeed(): Promise<any> {
//     const url = `${this.baseUrl}/feed`;
//     // Make an HTTP request to fetch the feed data
//     // You can use a library like axios or fetch for making the request
//     // Here's an example using axios
//     const response = await axios.get(url);
//     return response.data;
//   }

//   public async initiateUser(initiateUserRequest: InitiateUserRequest): Promise<LMResponse<InitiateUserResponse>> {
//     return this.InitiateUserClient.initiateUser(initiateUserRequest);
//   }

//   public static builder(): LMFeedClientBuilder {
//     return new LMFeedClientBuilder();
//   }
// }

// export class LMFeedClientBuilder {
//   private baseUrl: string;

//   constructor() {
//     // Set default values if needed
//     this.baseUrl = '';
//   }

//   public withBaseUrl(baseUrl: string): LMFeedClientBuilder {
//     this.baseUrl = baseUrl;
//     return this;
//   }

//   public build(): LMFeedClient {
//     if (!this.baseUrl) {
//       throw new Error('Base URL is required.');
//     }
//     return new LMFeedClient(this.baseUrl);
//   }
// }

