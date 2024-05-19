import { PollMultiSelectState, PollType } from "src/poll/enums";

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
  pollQuestion?: string;
  expiryTime?: number;
  pollOptions?: string[];
  multiSelectState?: PollMultiSelectState;
  pollType?: PollType;
  multiSelectNo?: number;
  isAnonymous?: boolean;
  allowAddOption?: boolean;

  // ogTags: LinkOGTags
  // attachmentMeta: List<Attachment>;

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
    pollQuestion: string,
    expiryTime: number,
    pollOptions: string[],
    multiSelectState: PollMultiSelectState,
    pollType: PollType,
    multiSelectNo: number = 1,
    isAnonymous: boolean = false,
    allowAddOption: boolean = false,
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
    this.pollQuestion = pollQuestion;
    this.expiryTime = expiryTime;
    this.pollOptions = pollOptions;
    this.multiSelectState = multiSelectState;
    this.pollType = pollType;
    this.multiSelectNo = multiSelectNo;
    this.isAnonymous = isAnonymous;
    this.allowAddOption = allowAddOption;
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
  private title?: string | undefined;
  coverImageUrl?: string | undefined;
  body?: string | undefined;
  thumbnailUrl?: string | undefined;
  pollQuestion?: string | undefined;
  expiryTime?: number | undefined;
  pollOptions?: string[] | undefined;
  multiSelectState?: PollMultiSelectState | undefined;
  pollType?: PollType | undefined;
  multiSelectNo?: number | undefined;
  isAnonymous?: boolean | undefined;
  allowAddOption?: boolean | undefined;
  // Add other properties as needed

  public setname(name: string): AttachmentMetaBuilder {
    this.name = name;
    return this;
  }

  public setThumbnailUrl(url: string): AttachmentMetaBuilder {
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

  public setPollQuestion(pollQuestion: string): AttachmentMetaBuilder {
    this.pollQuestion = pollQuestion;
    return this;
  }

  public setExpiryTime(expiryTime: number): AttachmentMetaBuilder {
    this.expiryTime = expiryTime;
    return this;
  }

  public setPollOptions(pollOptions: string[]): AttachmentMetaBuilder {
    this.pollOptions = pollOptions;
    return this;
  }

  public setMultiSelectState(
    multiSelectState: PollMultiSelectState
  ): AttachmentMetaBuilder {
    this.multiSelectState = multiSelectState;
    return this;
  }

  public setPollType(pollType: PollType): AttachmentMetaBuilder {
    this.pollType = pollType;
    return this;
  }

  public setMultiSelectNo(multiSelectNo: number): AttachmentMetaBuilder {
    this.multiSelectNo = multiSelectNo;
    return this;
  }

  public setIsAnonymous(isAnonymous: boolean): AttachmentMetaBuilder {
    this.isAnonymous = isAnonymous;
    return this;
  }

  public setAllowAddOption(allowAddOption: boolean): AttachmentMetaBuilder {
    this.allowAddOption = allowAddOption;
    return this;
  }

  // Build method to create the final AttachmentMeta object
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
      this.pollQuestion,
      this.expiryTime,
      this.pollOptions,
      this.multiSelectState,
      this.pollType,
      this.multiSelectNo,
      this.isAnonymous,
      this.allowAddOption,
      this.body,
      this.thumbnailUrl
    );
  }
}

export default AttachmentMeta;
