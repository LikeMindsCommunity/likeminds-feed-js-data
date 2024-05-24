export interface GetPollVotesRequest {
  pollId: string;
  votes: string[];
  page: number;
  pageSize: number;
}
