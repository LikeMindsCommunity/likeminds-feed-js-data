import Attachment from "./Attachment";

class EditPostRequest {
  // Properties of the request class
  postId: string;
  text?: string;
  attachments: Attachment[];
  heading?: string;
  topic_ids: string[] | null;

  // Public constructor to create the request object
  constructor(
    postId: string,
    text: string,
    attachments: Attachment[],
    heading: string,
    topic_ids: string[]
  ) {
    this.postId = postId;
    this.text = text;
    this.attachments = attachments;
    this.heading = heading;
    this.topic_ids = topic_ids;
  }

  // Static builder method to create the request object
  public static builder(): EditPostRequestBuilder {
    return new EditPostRequestBuilder();
  }
}

// Builder class for Attachment
export class EditPostRequestBuilder {
  private postId: string | undefined;
  private text?: string | undefined;
  private attachments: Attachment[] | undefined;
  private heading: string | undefined;
  private topic_ids: string[] | null;
  // Add other properties as needed

  public setpostId(postId: string): EditPostRequestBuilder {
    this.postId = postId;
    return this;
  }

  public settext(text: string): EditPostRequestBuilder {
    this.text = text;
    return this;
  }
  public setHeading(heading: string) {
    this.heading = heading;
    return this;
  }
  public setTopicIds(topicIds: string[] | null) {
    this.topic_ids = topicIds;
    return this;
  }
  public setattachments(attachments: Attachment[]): EditPostRequestBuilder {
    this.attachments = attachments;
    return this;
  }

  // Build method to create the final Attachment object
  public build(): EditPostRequest {
    if (!this.postId) {
      throw new Error("attachmentType and EditPostRequest are required.");
    }

    return new EditPostRequest(
      this.postId,
      this.text,
      this.attachments,
      this.heading,
      this.topic_ids
    );
  }
}

export default EditPostRequest;
