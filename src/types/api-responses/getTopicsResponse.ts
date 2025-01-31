import { Topic } from "../models/topic";
import { Widget } from "../models/widget";
export interface GetTopics {
  topics: Topic[];
  widgets: Widget,
  childTopics: Record<string, Topic[]>,
}
