import { TempPost } from "../../types/models/TempPost";

class SaveTemporaryPostRequest {
  tempPost: TempPost;
  constructor(tempPost: TempPost) {
    this.tempPost = tempPost;
  }

  public static builder(): SaveTemporaryPostRequestBuilder {
    return new SaveTemporaryPostRequestBuilder();
  }
}

export class SaveTemporaryPostRequestBuilder {
  private tempPost?: TempPost;

  public setTempPost(tempPost: TempPost): SaveTemporaryPostRequestBuilder {
    this.tempPost = tempPost;
    return this;
  }

  public build(): SaveTemporaryPostRequest {
    if (!this.tempPost) {
      throw new Error("tempPost is required.");
    }

    return new SaveTemporaryPostRequest(this.tempPost);
  }
}

export default SaveTemporaryPostRequest;
