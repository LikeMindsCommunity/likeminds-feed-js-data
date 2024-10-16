import Attachment from "./Attachment";

class AddPostRequest {
  // Properties of the request class
  text?: string;
  attachments: Attachment[];
  heading?: string;
  topicIds: string[] | null;
  tempId?: string;
  onBehalfOfUuid?: string;
  isAnonymous: boolean;
  // Public constructor to create the request object
  constructor(
    text: string,
    attachments: Attachment[],
    heading: string,
    topicIds: string[],
    tempId: string,
    isAnonymous: boolean,
    onBehalfOfUUID?: string
  ) {
    this.text = text;
    this.attachments = attachments;
    this.heading = heading;
    this.topicIds = topicIds;
    this.tempId = tempId;
    this.isAnonymous = isAnonymous;
    this.onBehalfOfUuid = onBehalfOfUUID;
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
  private topicIds: string[] | null;
  private tempId: string;
  private isAnonymous: boolean = false;
  private onBehalfOfUUID?: string | undefined;
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
    this.topicIds = topicIds;
    return this;
  }

  public setOnBehalfOfUUID(uuid: string) {
    this.onBehalfOfUUID = uuid;
    return this;
  }

  public setTempId(tempId: string): AddPostRequestBuilder {
    this.tempId = tempId;
    return this;
  }

  public setIsAnonymous(isAnonymous: boolean): AddPostRequestBuilder {
    this.isAnonymous = isAnonymous;
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
      this.topicIds,
      this.tempId,
      this.isAnonymous,
      this.onBehalfOfUUID
    );
  }
}

export default AddPostRequest;
