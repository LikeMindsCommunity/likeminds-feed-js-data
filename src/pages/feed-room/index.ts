import { API } from "../../shared/constants/api.constant";
import { HomeFeed } from "./types";
import httpInst from "src/core/services/base.service";

export class HomeFeedClient {
  getFeedRoom(homeFeed: HomeFeed): Promise<any> {
    return httpInst.get(`${API.FEEDROOM}?page=${homeFeed.page}`);
  }
  getFeedOfFeedRoom(homeFeed: HomeFeed): Promise<any> {
    return httpInst.get(`${API.FEEDROOM}?page=${homeFeed.page}`);
  }
}
