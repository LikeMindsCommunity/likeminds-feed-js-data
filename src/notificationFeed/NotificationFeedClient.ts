import { API } from "../shared/constants/api.constant";
import NetworkLibrary from "../core/services/networklibrary";

import GetNotificationFeedRequest from "./model/GetNotificationFeedRequest";

import { ModelConverter } from "../utils/ModelConverter";
import MarkReadNotificationRequest from "./model/MarkReadNotificationRequest";

import { GetNotification } from "../types/api-responses/getNotificationResponse";

import { GetNotificationCount } from "../types/api-responses/getNotificationCount";
import { MarkReadNotification } from "../types/api-responses/markReadResponse";

class NotificationFeedClient {
  public networkLibrary: NetworkLibrary;

  constructor(instance: NetworkLibrary) {
    this.networkLibrary = instance;
  }

  getNotificationFeed(request: GetNotificationFeedRequest) {
    return this.networkLibrary.makeAuthenticatedRequest<GetNotification>(
      `${API.NOTIFICATION_FEED}?page=${request.page}&page_size=${request.pageSize}`
    );
  }

  markReadNotification(request: MarkReadNotificationRequest) {
    const params = ModelConverter.requestBodyGenerator(request);
    return this.networkLibrary.makeAuthenticatedRequest<MarkReadNotification>(
      `${API.NOTIFICATION_FEED}/${request.activityId}/mark_read`,
      {
        method: "POST",
        data: params,
      }
    );
  }

  getUnreadNotificationCount() {
    return this.networkLibrary.makeAuthenticatedRequest<GetNotificationCount>(
      `${API.NOTIFICATION_FEED}/unread_count`
    );
  }
}

export default NotificationFeedClient;
