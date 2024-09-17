// import { environment } from "../environment";
import { API } from "../shared/constants/api.constant";
import NetworkLibrary from "../core/services/networklibrary";
// import InitiateUserRequest from "../initiateUser/model/InitiateUserRequest";
// import { InitiateUserResponse } from "../initiateUser/model/InitiateUserResponse";
import GetFeedRequest from "./model/GetFeedRequest";
import { ModelConverter } from "../utils/ModelConverter";

import { GetUniversalFeed } from "../types/api-responses/getUniversalFeed";

class UniversalFeedClient {
  private networkLibrary;

  constructor(networkInstance: NetworkLibrary) {
    this.networkLibrary = networkInstance;
  }

  // get normal feed
  getFeed(feed: GetFeedRequest): Promise<GetUniversalFeed> {
    return this.networkLibrary
      .makeAuthenticatedRequest(
        feed.topicIds
          ? `${API.FEED_UNIVERSAL}?page=${feed.page}&page_size=${
              feed.pageSize
            }&topic_ids=${JSON.stringify(feed.topicIds)}`
          : `${API.FEED_UNIVERSAL}?page=${feed.page}&page_size=${feed.pageSize}`
      )
      .then((resData: any) => {
        const responseData = ModelConverter.responseBodyParser(resData);
        return responseData;
      })
      .catch((error) => {
        return {
          success: false,
          errorMessage: error,
        };
      });
  }
}

export default UniversalFeedClient;
