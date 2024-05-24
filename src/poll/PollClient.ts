import LMResponse from "../core/services/lmresponse";
import { API } from "../shared/constants/api.constant";
import NetworkLibrary from "../core/services/networklibrary";
import { ModelConverter } from "../utils/ModelConverter";
import { SubmitPollVoteRequest } from "./model/SubmitPollVoteRequest";
import { AddPollOptionRequest } from "./model/AddPollOptionRequest";
import { GetPollVotesRequest } from "./model/GetPollVotesRequest";
import { AddPollOptionResponse } from "./model/AddPollOptionResponse";
import { GetPollVotesResponse } from "./model/GetPollVotesResponse";

class PollFeedClient {
  private networkLibrary;

  constructor(networkInstance: NetworkLibrary) {
    this.networkLibrary = networkInstance;
  }

  // submit poll vote
  submitPollVote(request: SubmitPollVoteRequest): Promise<LMResponse<any>> {
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.POLL}/${request.pollId}/vote`, {
        method: "PUT",
        data: ModelConverter.requestBodyGenerator(request),
      })
      .then((resData: any) => {
        const responseData = ModelConverter.responseBodyParser(resData.data);
        return new LMResponse<any>(responseData, null, true);
      })
      .catch((error: any) => {
        return new LMResponse<any>(
          null,
          error.message || "An error occoured",
          false
        );
      });
  }

  // add poll option
  addPollOption(request: AddPollOptionRequest): Promise<LMResponse<any>> {
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.POLL}/${request.pollId}`, {
        method: "PUT",
        data: ModelConverter.requestBodyGenerator(request),
      })
      .then((resData: any) => {
        const responseData = ModelConverter.responseBodyParser(resData.data);
        return new LMResponse<AddPollOptionResponse>(responseData, null, true);
      })
      .catch((error: any) => {
        return new LMResponse<AddPollOptionResponse>(
          null,
          error.message || "An error occoured",
          false
        );
      });
  }

  // get poll votes
  getPollVotes(request: GetPollVotesRequest): Promise<LMResponse<any>> {
    return this.networkLibrary
      .makeAuthenticatedRequest(`${API.POLL}/${request.pollId}/vote?votes=${request.votes}&page=${request.page}&page_size=${request.pageSize}`)
      .then((resData: any) => {
        const responseData = ModelConverter.responseBodyParser(resData.data);
        return new LMResponse<GetPollVotesResponse>(responseData, null, true);
      })
      .catch((error: any) => {
        return new LMResponse<GetPollVotesResponse>(
          null,
          error.message || "An error occoured",
          false
        );
      });
  }
}

export default PollFeedClient;
