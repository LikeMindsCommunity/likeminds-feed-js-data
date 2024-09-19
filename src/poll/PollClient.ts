import { API } from "../shared/constants/api.constant";
import NetworkLibrary from "../core/services/networklibrary";
import { ModelConverter } from "../utils/ModelConverter";
import { SubmitPollVoteRequest } from "./model/SubmitPollVoteRequest";
import { AddPollOptionRequest } from "./model/AddPollOptionRequest";
import { GetPollVotesRequest } from "./model/GetPollVotesRequest";
import { AddPollOptionResponse } from "./model/AddPollOptionResponse";
import { GetPollVotesResponse } from "./model/GetPollVotesResponse";

class PollFeedClient {
  private networkLibrary: NetworkLibrary;

  constructor(networkInstance: NetworkLibrary) {
    this.networkLibrary = networkInstance;
  }

  // submit poll vote
  submitPollVote(request: SubmitPollVoteRequest) {
    return this.networkLibrary.makeAuthenticatedRequest<any>(
      `${API.POLL}/${request.pollId}/vote`,
      {
        method: "PUT",
        data: ModelConverter.requestBodyGenerator(request),
      }
    );
  }

  addPollOption(request: AddPollOptionRequest) {
    return this.networkLibrary.makeAuthenticatedRequest<AddPollOptionResponse>(
      `${API.POLL}/${request.pollId}`,
      {
        method: "PUT",
        data: ModelConverter.requestBodyGenerator(request),
      }
    );
  }

  getPollVotes(request: GetPollVotesRequest) {
    return this.networkLibrary.makeAuthenticatedRequest<GetPollVotesResponse>(
      `${API.POLL}/${request.pollId}/vote?votes=${request.votes}&page=${request.page}&page_size=${request.pageSize}`
    );
  }
}

export default PollFeedClient;
