import { Topic } from "../../types/models/topic";
import { User } from "../../types/models/member";
import { Widget } from "../../types/models/widget";

export interface Vote {
  id: string;
  users: string[];
}

export interface GetPollVotesResponse {
  topics: Record<string, Topic>;
  userTopics?: Record<string, string[]>;
  users: Record<string, User>;
  widget: Record<string, Widget>;
  votes: Vote[];
}
