import { IWidget } from "src/shared/models/widget";

export interface AddPollOptionResponse {
  widget: { [key: string]: IWidget };
}
