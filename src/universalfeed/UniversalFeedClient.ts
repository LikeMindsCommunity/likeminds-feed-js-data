// import { environment } from "../environment";
import { API } from "../shared/constants/api.constant";
import NetworkLibrary from "../core/services/networklibrary";
// import InitiateUserRequest from "../initiateUser/model/InitiateUserRequest";
// import { InitiateUserResponse } from "../initiateUser/model/InitiateUserResponse";
import GetFeedRequest from "./model/GetFeedRequest";

import { GetUniversalFeed } from "../types/api-responses/getUniversalFeedResponse";

class UniversalFeedClient {
  private networkLibrary: NetworkLibrary;

  constructor(networkInstance: NetworkLibrary) {
    this.networkLibrary = networkInstance;
  }

  // get normal feed
  async getFeed(feed: GetFeedRequest) {
    const url = feed.topicIds
      ? `${API.FEED_UNIVERSAL}?page=${feed.page}&page_size=${feed.pageSize}&topic_ids=${JSON.stringify(feed.topicIds)}`
      : `${API.FEED_UNIVERSAL}?page=${feed.page}&page_size=${feed.pageSize}`;

    const resData =
      await this.networkLibrary.makeAuthenticatedRequest<GetUniversalFeed>(url);
    return resData;
  }
}

export default UniversalFeedClient;
