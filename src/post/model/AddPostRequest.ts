import Attachment from "./Attachment";

class AddPostRequest {
  // Properties of the request class
  text: string;
  attachments: Attachment[];

  // Public constructor to create the request object
  constructor(text: string, attachments: Attachment[]) {
    this.text = text;
    this.attachments = attachments;
  }

  // Static builder method to create the request object
  public static builder(): AddPostRequestBuilder {
    return new AddPostRequestBuilder();
  }
}

// Builder class for AddPostRequest
export class AddPostRequestBuilder {
  private text: string | undefined;
  private attachments: Attachment[] | undefined;
  // Add other properties as needed

  public setText(text: string): AddPostRequestBuilder {
    this.text = text;
    return this;
  }

  public setAttachments(attachments: Attachment[]): AddPostRequestBuilder {
    this.attachments = attachments;
    return this;
  }

  // Build method to create the final AddPostRequest object
  public build(): AddPostRequest {
    if (!this.text && !this.attachments) {
      throw new Error("text and attachments are required.");
    }

    return new AddPostRequest(this.text, this.attachments);
  }
}

export default AddPostRequest;
