import { PollMultipleSelectState, PollType } from "src/poll/enums";
import { AttachmentMeta, WidgetMeta } from "../../types/models/attachment";

class LMFeedPostAttachmentMeta implements AttachmentMeta {
  // Properties of the request class
  name?: string;
  url?: string;
  format?: string;
  size?: number;
  duration?: number;
  pageCount?: number;
  ogTags?: any;
  coverImageUrl?: string;
  title?: string;
  body?: string;
  thumbnailUrl?: string;
  pollQuestion?: string;
  expiryTime?: number;
  options?: string[];
  multipleSelectState?: PollMultipleSelectState;
  pollType?: PollType;
  multipleSelectNumber?: number;
  isAnonymous?: boolean;
  allowAddOption?: boolean;
  entityId?: string;
  widgetMeta?: WidgetMeta;

  // Public constructor to create the request object
  constructor(
    name?: string,
    url?: string,
    format?: string,
    size?: number,
    duration?: number,
    pageCount?: number,
    ogTags?: any,
    coverImageUrl?: string,
    title?: string,
    pollQuestion?: string,
    expiryTime?: number,
    options?: string[],
    multipleSelectState?: PollMultipleSelectState,
    pollType?: PollType,
    multipleSelectNumber?: number,
    isAnonymous?: boolean,
    allowAddOption?: boolean,
    body?: string,
    thumbnailUrl?: string,
    entityId?: string,
    widgetMeta?: WidgetMeta
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
    this.options = options;
    this.multipleSelectState = multipleSelectState;
    this.pollType = pollType;
    this.multipleSelectNumber = multipleSelectNumber;
    this.isAnonymous = isAnonymous;
    this.allowAddOption = allowAddOption;
    this.body = body;
    this.thumbnailUrl = thumbnailUrl;
    this.entityId = entityId;
    this.widgetMeta = widgetMeta;
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
  options?: string[] | undefined;
  multipleSelectState?: PollMultipleSelectState | undefined;
  pollType?: PollType | undefined;
  multipleSelectNumber?: number | undefined;
  isAnonymous?: boolean | undefined;
  allowAddOption?: boolean | undefined;
  entityId?: string | undefined;
  widgetMeta?: WidgetMeta
  // Add other properties as needed

  public setName(name: string): AttachmentMetaBuilder {
    this.name = name;
    return this;
  }

  public setThumbnailUrl(url: string): AttachmentMetaBuilder {
    this.thumbnailUrl = url;
    return this;
  }

  public setUrl(url: string): AttachmentMetaBuilder {
    this.url = url;
    return this;
  }

  public setFormat(format: string): AttachmentMetaBuilder {
    this.format = format;
    return this;
  }

  public setSize(size: number): AttachmentMetaBuilder {
    this.size = size;
    return this;
  }

  public setDuration(duration: number): AttachmentMetaBuilder {
    this.duration = duration;
    return this;
  }

  public setPageCount(pageCount: number): AttachmentMetaBuilder {
    this.pageCount = pageCount;
    return this;
  }

  public setOgTags(ogTags: any): AttachmentMetaBuilder {
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

  public setOptions(options: string[]): AttachmentMetaBuilder {
    this.options = options;
    return this;
  }

  public setMultipleSelectState(
    multipleSelectState: PollMultipleSelectState
  ): AttachmentMetaBuilder {
    this.multipleSelectState = multipleSelectState;
    return this;
  }

  public setPollType(pollType: PollType): AttachmentMetaBuilder {
    this.pollType = pollType;
    return this;
  }

  public setMultipleSelectNumber(
    multipleSelectNumber: number
  ): AttachmentMetaBuilder {
    this.multipleSelectNumber = multipleSelectNumber;
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

  public setEntityId(entityId: string): AttachmentMetaBuilder {
    this.entityId = entityId;
    return this;
  }

  public setWidgetMeta(widgetMeta: WidgetMeta | null): AttachmentMetaBuilder {
    this.widgetMeta = widgetMeta;
    return this;
  }
  // Build method to create the final AttachmentMeta object
  public build(): AttachmentMeta {
    // if (!this.ogTags) {
    //   throw new Error("attachmentType and attachmentMeta are required.");
    // }
    return new LMFeedPostAttachmentMeta(
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
      this.options,
      this.multipleSelectState,
      this.pollType,
      this.multipleSelectNumber,
      this.isAnonymous,
      this.allowAddOption,
      this.body,
      this.thumbnailUrl,
      this.entityId,
      this.widgetMeta
    );
  }
}

export default LMFeedPostAttachmentMeta;
