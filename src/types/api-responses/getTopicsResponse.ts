import { Topic } from "../models/topic";
export interface GetTopicsResponse {
  data?: {
    topics: Topic[];
  };
}
