class AttachmentMeta {
  // Properties of the request class
  name?: string;
  url?: string;
  format?: string;
  size?: number;
  duration?: number;
  pageCount?: number;
  ogTags: any;
  coverImageUrl?: string;
  title?: string;
  body?: string;
  thumbnailUrl?: string;

  // ogTags: LinkOGTags
  //   attachmentMeta: List<Attachment>;

  // Public constructor to create the request object
  constructor(
    name: string,
    url: string,
    format: string,
    size: number,
    duration: number,
    pageCount: number,
    ogTags: any,
    coverImageUrl: string,
    title: string,
    body?: string,
    thumbnailUrl?: string
  ) {
    this.name = name;
    this.url = url;
    this.format = format;
    this.size = size;
    this.duration = duration;
    this.pageCount = pageCount;
    this.ogTags = ogTags;
    this.coverImageUrl = coverImageUrl;
    this.title = title;
    this.body = body;
    this.thumbnailUrl = thumbnailUrl;
  }

  // Static builder method to create the request object
  public static builder(): AttachmentMetaBuilder {
    return new AttachmentMetaBuilder();
  }
}

// Builder class for Attachment
export class AttachmentMetaBuilder {
  private name?: string | undefined;
  private url?: string | undefined;
  private format?: string | undefined;
  private size?: number | undefined;
  private duration?: number | undefined;
  private pageCount?: number | undefined;
  private ogTags: any | undefined;
  coverImageUrl?: string | undefined;
  title?: string | undefined;
  body?: string | undefined;
  thumbnailUrl?: string | undefined;
  // Add other properties as needed

  public setname(name: string): AttachmentMetaBuilder {
    this.name = name;
    return this;
  }
  public setThumbnailUrl(url: string) {
    this.thumbnailUrl = url;
    return this;
  }

  public seturl(url: string): AttachmentMetaBuilder {
    this.url = url;
    return this;
  }

  public setformat(format: string): AttachmentMetaBuilder {
    this.format = format;
    return this;
  }

  public setsize(size: number): AttachmentMetaBuilder {
    this.size = size;
    return this;
  }

  public setduration(duration: number): AttachmentMetaBuilder {
    this.duration = duration;
    return this;
  }

  public setpageCount(pageCount: number): AttachmentMetaBuilder {
    this.pageCount = pageCount;
    return this;
  }

  public setogTags(ogTags: any): AttachmentMetaBuilder {
    this.ogTags = ogTags;
    return this;
  }
  public setTitle(title: string): AttachmentMetaBuilder {
    this.title = title;
    return this;
  }
  public setBody(body: string): AttachmentMetaBuilder {
    this.body = body;
    return this;
  }
  public setCoverImageUrl(coverImageUrl: string): AttachmentMetaBuilder {
    this.coverImageUrl = coverImageUrl;
    return this;
  }

  // Build method to create the final Attachment object
  public build(): AttachmentMeta {
    // if (!this.ogTags) {
    //   throw new Error("attachmentType and attachmentMeta are required.");
    // }

    return new AttachmentMeta(
      this.name,
      this.url,
      this.format,
      this.size,
      this.duration,
      this.pageCount,
      this.ogTags,
      this.coverImageUrl,
      this.title,
      this.body,
      this.thumbnailUrl
    );
  }
}

export default AttachmentMeta;
