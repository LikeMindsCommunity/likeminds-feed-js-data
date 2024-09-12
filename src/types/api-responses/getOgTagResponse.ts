import { OgTag } from "../models/ogTag";

export interface GetOgTagResponse {
  data?: {
    og_tags: OgTag;
  };
}
