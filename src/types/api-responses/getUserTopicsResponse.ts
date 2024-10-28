import { User } from "../models/member";
import { Topic } from "../models/topic";
import { Widget } from "../models/widget";

interface UserTopics {
  [userId: string]: string[];
}

interface Users {
  [userId: string]: User;
}

export interface GetUserTopicsResponse {
  topics: {
    [topicId: string]: Topic;
  };
  userTopics: UserTopics;
  users: Users;
  widgets: Widget;
}
