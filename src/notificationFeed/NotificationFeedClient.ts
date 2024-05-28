// import { environment } from "../environment";
import { API } from "../shared/constants/api.constant";
import NetworkLibrary from "../core/services/networklibrary";
// import InitiateUserRequest from "../initiateUser/model/InitiateUserRequest";
// import { InitiateUserResponse } from "../initiateUser/model/InitiateUserResponse";
import GetNotificationFeedRequest from "./model/GetNotificationFeedRequest";

import { ModelConverter } from "../utils/ModelConverter";
import MarkReadNotificationRequest from "./model/MarkReadNotificationRequest";

import { GetNotificationResponse } from "../shared/models/api-responses/getNotificationResponse";
import { AnyArn } from "aws-sdk/clients/groundstation";
import { GetNotificationCountResponse } from "../shared/models/api-responses/getNotificationCount";

class NotificationFeedClient {
  public networkLibrary: NetworkLibrary;

  constructor(instance: NetworkLibrary) {
    this.networkLibrary = instance;
  }

  getNotificationFeed(
    request: GetNotificationFeedRequest
  ): Promise<GetNotificationResponse> {
    return this.networkLibrary
      .makeAuthenticatedRequest(
        `${API.NOTIFICATION_FEED}?page=${request.page}&page_size=${request.pageSize}`
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

  markReadNotification(request: MarkReadNotificationRequest): Promise<AnyArn> {
    const params = ModelConverter.requestBodyGenerator(request);
    return this.networkLibrary
      .makeAuthenticatedRequest(
        `${API.NOTIFICATION_FEED}/${request.activityId}/mark_read`,
        {
          method: "POST",
          data: params,
        }
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

  getUnreadNotificationCount(): Promise<GetNotificationCountResponse> {
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.NOTIFICATION_FEED}/unread_count`)
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

export default NotificationFeedClient;
