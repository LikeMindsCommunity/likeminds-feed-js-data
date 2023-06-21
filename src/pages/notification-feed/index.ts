import NetworkLibrary from "src/core/services/networklibrary";
import { API } from "../../shared/constants/api.constant";
import { HomeFeed } from "./types";

export class HomeFeedClient {
  public networkLibrary = new NetworkLibrary();

  getNotificationFeed(homeFeed: HomeFeed): Promise<any> {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${API.FEEDROOM}?page=${homeFeed.page}`
    );
  }
  markReadNotification(homeFeed: HomeFeed): Promise<any> {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${API.FEEDROOM}?page=${homeFeed.page}`
    );
  }
  getUnreadNotificationCount(homeFeed: HomeFeed): Promise<any> {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${API.FEEDROOM}?page=${homeFeed.page}`
    );
  }
}
