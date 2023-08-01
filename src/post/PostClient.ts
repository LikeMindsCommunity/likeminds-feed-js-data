import LMResponse from "src/core/services/lmresponse";
import { environment } from "src/environment";
import { API } from "src/shared/constants/api.constant";
import NetworkLibrary from "src/core/services/networklibrary";
import InitiateUserRequest from "src/initiateUser/model/InitiateUserRequest";
import { InitiateUserResponse } from "src/initiateUser/model/InitiateUserResponse";
import AddPostRequest from "./model/AddPostRequest";
import { ModelConverter } from "src/utils/ModelConverter";
import { AddPostResponse } from "./model/AddPostResponse";

class PostClient {
  public networkLibrary: NetworkLibrary;

  constructor(instance: NetworkLibrary) {
    this.networkLibrary = instance;
  }

  public async addPost(
    request: AddPostRequest
  ): Promise<LMResponse<AddPostResponse>> {
    console.log("DL Request s=> ", request);

    const params = ModelConverter.requestBodyGenerator(request);
    return this.networkLibrary
      .makeAuthenticatedRequest(`${environment.apiUrl}${API.SDK_INITIATE}`, {
        method: "POST",
        data: params,
      })
      .then((resData: any) => {
        // Handle the response and return the LMResponse object
        const responseData: AddPostResponse = ModelConverter.responseBodyParser(
          resData.data
        );

        return new LMResponse<AddPostResponse>(responseData, null, true);
      })
      .catch((error) => {
        return new LMResponse<AddPostResponse>(
          null,
          error.message || "An error occurred",
          false
        );
      });
  }
}

export default PostClient;
