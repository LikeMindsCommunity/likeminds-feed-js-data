import LMResponse from "../core/services/lmresponse";
import { environment } from "../environment";
import { API } from "../shared/constants/api.constant";
import NetworkLibrary from "../core/services/networklibrary";
import InitiateUserRequest from "../initiateUser/model/InitiateUserRequest";
import { InitiateUserResponse } from "../initiateUser/model/InitiateUserResponse";
import GetFeedRequest from "./model/GetFeedRequest";
import { ModelConverter } from "../utils/ModelConverter";
import { GetFeedResponse } from "./model/GetFeedResponse";

class UniversalFeedClient {
  private networkLibrary;

  constructor(networkInstance: NetworkLibrary) {
    this.networkLibrary = networkInstance;
  }

  // get normal feed
  getFeed(feed: GetFeedRequest): Promise<LMResponse<GetFeedResponse>> {
    return this.networkLibrary
      .makeAuthenticatedRequest(
        `${API.FEED_UNIVERSAL}?page=${feed.page}&page_size=${feed.pageSize}`
      )
      .then((resData: any) => {
        const responseData = ModelConverter.responseBodyParser(resData.data);
        return new LMResponse<GetFeedResponse>(responseData, null, true);
      })
      .catch((error: any) => {
        return new LMResponse<GetFeedResponse>(
          null,
          error.message || "An error occoured",
          false
        );
      });
  }
}

export default UniversalFeedClient;
