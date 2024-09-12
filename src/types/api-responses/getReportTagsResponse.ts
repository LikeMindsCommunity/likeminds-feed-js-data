import { ReportObject } from "../models/reportTags";

export interface GetReportTagsResponse {
  data?: {
    reportTags: ReportObject[];
  };
}
