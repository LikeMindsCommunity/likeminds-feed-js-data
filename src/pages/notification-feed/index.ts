import { API } from "../../shared/constants/api.constant";
import { HomeFeed } from "./types";
import httpInst from "src/core/services/base.service";

export class HomeFeedClient {
  getNotificationFeed(homeFeed: HomeFeed): Promise<any> {
    return httpInst.get(`${API.FEEDROOM}?page=${homeFeed.page}`);
  }
  markReadNotification(homeFeed: HomeFeed): Promise<any> {
    return httpInst.get(`${API.FEEDROOM}?page=${homeFeed.page}`);
  }
  getUnreadNotificationCount(homeFeed: HomeFeed): Promise<any> {
    return httpInst.get(`${API.FEEDROOM}?page=${homeFeed.page}`);
  }
}
