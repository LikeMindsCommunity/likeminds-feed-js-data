import NetworkLibrary from "../../core/services/networklibrary";
import { API } from "../../shared/constants/api.constant";
import { HomeFeed } from "./types";
import { environment } from "../../environment";

export class HomeFeedClient {
  public networkLibrary: NetworkLibrary;
  constructor(networkLibrary: NetworkLibrary) {
    this.networkLibrary = networkLibrary;
  }

  getFeedRoom(homeFeed: HomeFeed): Promise<any> {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${environment.apiUrl}${API.FEEDROOM}?page=${homeFeed.page}`
    );
  }
  getFeedOfFeedRoom(homeFeed: HomeFeed): Promise<any> {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${environment.apiUrl}${API.FEEDROOM}?page=${homeFeed.page}`
    );
  }
}
