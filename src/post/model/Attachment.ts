import { Attachment } from "../../types/models/attachment";
import LMFeedPostAttachmentMeta from "./AttachmentMeta";

class LMFeedPostAttachment implements Attachment {
  // Properties of the request class
  public attachmentType: number;
  public attachmentMeta: LMFeedPostAttachmentMeta;

  // Public constructor to create the request object
  constructor(
    attachmentType: number,
    attachmentMeta: LMFeedPostAttachmentMeta
  ) {
    this.attachmentType = attachmentType;
    this.attachmentMeta = attachmentMeta;
  }

  // Static builder method to create the request object
  public static builder(): AttachmentBuilder {
    return new AttachmentBuilder();
  }
}

// Builder class for Attachment
export class AttachmentBuilder {
  private attachmentType: number | undefined;
  private attachmentMeta: LMFeedPostAttachmentMeta | undefined;
  // Add other properties as needed

  public setAttachmentType(attachmentType: number): AttachmentBuilder {
    this.attachmentType = attachmentType;
    return this;
  }

  public setAttachmentMeta(
    attachmentMeta: LMFeedPostAttachmentMeta
  ): AttachmentBuilder {
    this.attachmentMeta = attachmentMeta;
    return this;
  }

  // Build method to create the final Attachment object
  public build(): LMFeedPostAttachment {
    if (!this.attachmentType || !this.attachmentMeta) {
      throw new Error("attachmentType and attachmentMeta are required.");
    }

    return new LMFeedPostAttachment(this.attachmentType, this.attachmentMeta);
  }
}

export default LMFeedPostAttachment;
