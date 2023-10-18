import LMResponse from "src/core/services/lmresponse";
import { environment } from "src/environment";
import { API } from "src/shared/constants/api.constant";
import NetworkLibrary from "src/core/services/networklibrary";
import InitiateUserRequest from "src/initiateUser/model/InitiateUserRequest";
import { InitiateUserResponse } from "src/initiateUser/model/InitiateUserResponse";
import GetNotificationFeedRequest from "./model/GetNotificationFeedRequest";
import { GetNotificationFeedResponse } from "./model/GetNotificationFeedResponse";
import { ModelConverter } from "src/utils/ModelConverter";
import MarkReadNotificationRequest from "./model/MarkReadNotificationRequest";
import { GetUnreadNotificationCountResponse } from "./model/GetUnreadNotificationCountResponse";

class NotificationFeedClient {
  public networkLibrary: NetworkLibrary;

  constructor(instance: NetworkLibrary) {
    this.networkLibrary = instance;
  }

  getNotificationFeed(
    request: GetNotificationFeedRequest,
  ): Promise<LMResponse<GetNotificationFeedResponse>> {
    return this.networkLibrary
      .makeAuthenticatedRequest(
        `${API.NOTIFICATION_FEED}?page=${request.page}&page_size=${request.pageSize}`,
      )
      .then((resData: any) => {
        const responseData = ModelConverter.responseBodyParser(resData?.data);
        return new LMResponse<GetNotificationFeedResponse>(
          responseData,
          null,
          true,
        );
      })
      .catch((error: any) => {
        return new LMResponse<GetNotificationFeedResponse>(
          null,
          error.message || "An error occoured",
          false,
        );
      });
  }

  markReadNotification(
    request: MarkReadNotificationRequest,
  ): Promise<LMResponse<any>> {
    const params = ModelConverter.requestBodyGenerator(request);
    return this.networkLibrary
      .makeAuthenticatedRequest(
        `${API.NOTIFICATION_FEED}/${request.activityId}/mark_read`,
        {
          method: "POST",
          data: params,
        },
      )
      .then((resData: any) => {
        const responseData = ModelConverter.responseBodyParser(resData?.data);
        return new LMResponse<any>(responseData, null, true);
      })
      .catch((error: any) => {
        return new LMResponse<any>(
          null,
          error.message || "An error occoured",
          false,
        );
      });
  }

  getUnreadNotificationCount(): Promise<
    LMResponse<GetUnreadNotificationCountResponse>
  > {
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.NOTIFICATION_FEED}/unread_count`)
      .then((resData: any) => {
        const responseData = ModelConverter.responseBodyParser(resData?.data);
        return new LMResponse<GetUnreadNotificationCountResponse>(
          responseData,
          null,
          true,
        );
      })
      .catch((error: any) => {
        return new LMResponse<GetUnreadNotificationCountResponse>(
          null,
          error.message || "An error occoured",
          false,
        );
      });
  }
}

export default NotificationFeedClient;
