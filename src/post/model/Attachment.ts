import { Attachment, AttachmentType } from "../../types/models/attachment";
import LMFeedPostAttachmentMeta from "./AttachmentMeta";

class LMFeedPostAttachment implements Attachment {
  // Properties of the request class
  public type: AttachmentType;
  public metaData: LMFeedPostAttachmentMeta;

  // Public constructor to create the request object
  constructor(type: AttachmentType, metaData: LMFeedPostAttachmentMeta) {
    this.type = type;
    this.metaData = metaData;
  }

  // Static builder method to create the request object
  public static builder(): AttachmentBuilder {
    return new AttachmentBuilder();
  }
}

// Builder class for Attachment
export class AttachmentBuilder {
  private type: AttachmentType | undefined;
  private metaData: LMFeedPostAttachmentMeta | undefined;
  // Add other properties as needed

  public setType(type: AttachmentType): AttachmentBuilder {
    this.type = type;
    return this;
  }

  public setMetadata(metaData: LMFeedPostAttachmentMeta): AttachmentBuilder {
    this.metaData = metaData;
    return this;
  }

  // Build method to create the final Attachment object
  public build(): LMFeedPostAttachment {
    if (!this.type || !this.metaData) {
      throw new Error("type and metadata are required.");
    }
    return new LMFeedPostAttachment(this.type, this.metaData);
  }
}

export default LMFeedPostAttachment;
