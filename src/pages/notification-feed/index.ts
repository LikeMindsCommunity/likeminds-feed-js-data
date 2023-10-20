import NetworkLibrary from "../../core/services/networklibrary";
import { API } from "../../shared/constants/api.constant";
import { HomeFeed } from "./types";
import { environment } from "../../environment";

export class HomeFeedClient {
  public networkLibrary = new NetworkLibrary();

  getNotificationFeed(homeFeed: HomeFeed): Promise<any> {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${environment.apiUrl}${API.FEEDROOM}?page=${homeFeed.page}`
    );
  }
  markReadNotification(homeFeed: HomeFeed): Promise<any> {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${environment.apiUrl}${API.FEEDROOM}?page=${homeFeed.page}`
    );
  }
  getUnreadNotificationCount(homeFeed: HomeFeed): Promise<any> {
    return this.networkLibrary.makeAuthenticatedRequest(
      `${environment.apiUrl}${API.FEEDROOM}?page=${homeFeed.page}`
    );
  }
}
