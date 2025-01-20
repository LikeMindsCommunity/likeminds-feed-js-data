// import { environment } from "../environment";
import { API } from "../shared/constants/api.constant";
import NetworkLibrary from "../core/services/networklibrary";
// import InitiateUserRequest from "../initiateUser/model/InitiateUserRequest";
// import { InitiateUserResponse } from "../initiateUser/model/InitiateUserResponse";
import GetFeedRequest from "./model/GetFeedRequest";

import { GetUniversalFeed } from "../types/api-responses/getUniversalFeedResponse";
import GetPersonalisedFeedRequest from "./model/GetPersonalisedFeedRequest";

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

  // get personalised feed
  async getPersonalisedFeed(feed: GetPersonalisedFeedRequest) {
    const url = `${API.FEED_PERSONALISED}?page=${feed.page}&page_size=${feed.pageSize ? feed.pageSize : 20}&should_recompute=${feed.shouldRecompute ? feed.shouldRecompute : false}&should_reorder=${feed.shouldReorder ? feed.shouldReorder : false}`;

    const resData =
      await this.networkLibrary.makeAuthenticatedRequest<GetUniversalFeed>(url);
    return resData;
  }
}

export default UniversalFeedClient;
