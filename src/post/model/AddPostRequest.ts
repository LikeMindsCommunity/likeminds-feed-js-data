import Attachment from "./Attachment";

class AddPostRequest {
  // Properties of the request class
  text?: string;
  attachments: Attachment[];
  heading?: string;
  topic_ids: string[] | null;
  tempId?: string;

  // Public constructor to create the request object
  constructor(
    text: string,
    attachments: Attachment[],
    heading: string,
    topic_ids: string[],
    tempId: string
  ) {
    this.text = text;
    this.attachments = attachments;
    this.heading = heading;
    this.topic_ids = topic_ids;
    this.tempId = tempId;
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
  private heading: string | undefined;
  private topic_ids: string[] | null;
  private tempId: string;
  // Add other properties as needed

  public setText(text: string): AddPostRequestBuilder {
    this.text = text;
    return this;
  }
  public setHeading(heading: string): AddPostRequestBuilder {
    this.heading = heading;
    return this;
  }
  public setAttachments(attachments: Attachment[]): AddPostRequestBuilder {
    this.attachments = attachments;
    return this;
  }
  public setTopicIds(topicIds: string[] | null) {
    this.topic_ids = topicIds;
    return this;
  }

  public setTempId(tempId: string): AddPostRequestBuilder {
    this.tempId = tempId;
    return this;
  }

  // Build method to create the final AddPostRequest object
  public build(): AddPostRequest {
    if (!this.text && !this.attachments) {
      throw new Error("text and attachments are required.");
    }

    return new AddPostRequest(
      this.text,
      this.attachments,
      this.heading,
      this.topic_ids,
      this.tempId
    );
  }
}

export default AddPostRequest;
