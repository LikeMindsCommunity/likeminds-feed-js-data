import { Activity } from "../models/Activity";
import { User } from "../models/member";
import { Topic } from "../models/topic";

export interface GetNotification {
  activities: Activity[];
  // topics: { [key: string]: Topic };
  topics: Record<string, Topic>;
  // users: { [key: string]: User };
  users: Record<string, User>;
}
