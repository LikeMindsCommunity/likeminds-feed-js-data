import NetworkLibrary from "../../core/services/networklibrary";
import { API } from "../../shared/constants/api.constant";
import { HomeFeed } from "./types";
import { environment } from "../../environment";

export class HomeFeedClient {
  public networkLibrary: NetworkLibrary;
  constructor(networkInstance: NetworkLibrary) {
    this.networkLibrary = networkInstance;
  }

  getNotificationFeed(homeFeed: HomeFeed) {
    return this.networkLibrary.makeAuthenticatedRequest<any>(
      `${environment.apiUrl}${API.FEEDROOM}?page=${homeFeed.page}`,
      {
        method: "GET",
        headers: {
          "x-accept-version": "v1",
        },
      }
    );
  }
  markReadNotification(homeFeed: HomeFeed) {
    return this.networkLibrary.makeAuthenticatedRequest<any>(
      `${environment.apiUrl}${API.FEEDROOM}?page=${homeFeed.page}`
    );
  }
  getUnreadNotificationCount(homeFeed: HomeFeed) {
    return this.networkLibrary.makeAuthenticatedRequest<any>(
      `${environment.apiUrl}${API.FEEDROOM}?page=${homeFeed.page}`
    );
  }
}
