import { TempPost } from "../models/TempPost";

export interface GetTemporaryPostResponse {
  tempPost: TempPost | null;
}
