import { Post } from "../../types/models/post";

export interface TempPost {
  post: Post;
}

export interface SaveTemporaryPostRequest {
  tempPost: TempPost;
}

export interface GetTemporaryPostResponse {
  tempPost: TempPost | null;
}

export interface DeleteTemporaryPostRequest {
  temporaryPostId: string;
}

export interface LMResponse<T = void> {
  success: boolean;
  errorMessage?: string;
  data?: T;
}
