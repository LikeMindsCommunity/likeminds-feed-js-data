import LMResponse from "src/core/services/lmresponse";
import { environment } from "src/environment";
import { API } from "src/shared/constants/api.constant";
import NetworkLibrary from "src/core/services/networklibrary";
import GetNotificationFeedRequest from "./model/GetNotificationFeedRequest";
import { GetNotificationFeedResponse } from "./model/GetNotificationFeedResponse";
import { ModelConverter } from "src/utils/ModelConverter";
import { GetUnreadNotificationCountResponse } from "./model/GetUnreadNotificationCountResponse";
import MarkReadNotificationRequest from "./model/MarkReadNotificationRequest";

class NotificationFeedClient {
  public networkLibrary: NetworkLibrary;

  constructor(instance: NetworkLibrary) {
    this.networkLibrary = instance;
  }

  public async getNotificationFeed(
    getPost: GetNotificationFeedRequest
  ): Promise<LMResponse<GetNotificationFeedResponse>> {
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.FEED_USER_ACTIVITY}`)
      .then((resData: any) => {
        const responseData: GetNotificationFeedResponse =
          ModelConverter.responseBodyParser(resData.data);
        return new LMResponse<GetNotificationFeedResponse>(
          responseData,
          null,
          true
        );
      })
      .catch((error) => {
        return new LMResponse<GetNotificationFeedResponse>(
          null,
          error.message || "An error occurred",
          false
        );
      });
  }

  public async getUnreadNotificationCount(): Promise<
    LMResponse<GetUnreadNotificationCountResponse>
  > {
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.FEED_USER_ACTIVITY_COUNT}`)
      .then((resData: any) => {
        const responseData: GetUnreadNotificationCountResponse =
          ModelConverter.responseBodyParser(resData.data);
        return new LMResponse<GetUnreadNotificationCountResponse>(
          responseData,
          null,
          true
        );
      })
      .catch((error) => {
        return new LMResponse<GetUnreadNotificationCountResponse>(
          null,
          error.message || "An error occurred",
          false
        );
      });
  }

  async markReadNotification(
    request: MarkReadNotificationRequest
  ): Promise<LMResponse<any>> {
    const params = ModelConverter.requestBodyGenerator(request);
    return this.networkLibrary
      .makeAuthenticatedRequest(
        `${API.FEED_USER_ACTIVITY}/${request.activityId}/mark_read`,
        {
          method: "POST",
          data: params,
        }
      )
      .then((resData: any) => {
        // Handle the response and return the LMResponse object
        const responseData: any = ModelConverter.responseBodyParser(
          resData.data
        );

        return new LMResponse<any>(responseData, null, true);
      })
      .catch((error) => {
        return new LMResponse<any>(
          null,
          error.message || "An error occurred",
          false
        );
      });
  }
}

export default NotificationFeedClient;
