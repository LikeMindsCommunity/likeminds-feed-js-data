import LMResponse from "src/core/services/lmresponse";
import { environment } from "src/environment";
import { API } from "src/shared/constants/api.constant";
import NetworkLibrary from "src/core/services/networklibrary";
import InitiateUserRequest from "src/initiateUser/model/InitiateUserRequest";
import { InitiateUserResponse } from "src/initiateUser/model/InitiateUserResponse";
import GetFeedRequest from "./model/GetFeedRequest";

class UniversalFeedClient {
  private networkLibrary;

  constructor(networkInstance: NetworkLibrary) {
    this.networkLibrary = networkInstance;
  }

  // get normal feed
  getFeed(feed: GetFeedRequest): Promise<any> {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${API.FEED_UNIVERSAL}?page=${feed.page}&page_size=${feed.pageSize}`
    );
  }
}

export default UniversalFeedClient;
