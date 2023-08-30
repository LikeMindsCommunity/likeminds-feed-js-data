import AttachmentMeta from "./AttachmentMeta";

class Attachment {
  // Properties of the request class
  attachmentType: number;
  attachmentMeta: AttachmentMeta[];
  //   attachmentMeta: List<Attachment>;

  // Public constructor to create the request object
  constructor(attachmentType: number, attachmentMeta: AttachmentMeta[]) {
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
  private attachmentMeta: AttachmentMeta[] | undefined;
  // Add other properties as needed

  public setAttachmentType(attachmentType: number): AttachmentBuilder {
    this.attachmentType = attachmentType;
    return this;
  }

  public setAttachmentMeta(
    attachmentMeta: AttachmentMeta[]
  ): AttachmentBuilder {
    this.attachmentMeta = attachmentMeta;
    return this;
  }

  // Build method to create the final Attachment object
  public build(): Attachment {
    if (!this.attachmentType || !this.attachmentMeta) {
      throw new Error("attachmentType and attachmentMeta are required.");
    }

    return new Attachment(this.attachmentType, this.attachmentMeta);
  }
}

export default Attachment;
