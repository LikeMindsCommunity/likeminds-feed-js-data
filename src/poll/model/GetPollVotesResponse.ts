import { ITopic } from "src/shared/models/topic";
import { IUser } from "src/shared/models/user";
import { IWidget } from "src/shared/models/widget";

export interface IVote {
  id: string;
  users: string[];
}

export interface GetPollVotesResponse {
  topics: { [key: string]: ITopic };
  userTopics?: { [key: string]: string[] };
  users: { [key: string]: IUser };
  widget: { [key: string]: IWidget };
  votes: IVote[];
}
