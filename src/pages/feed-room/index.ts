import NetworkLibrary from "src/core/services/networklibrary";
import { API } from "../../shared/constants/api.constant";
import { HomeFeed } from "./types";
import { environment } from "src/environment";

export class HomeFeedClient {
  public networkLibrary = new NetworkLibrary();

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
