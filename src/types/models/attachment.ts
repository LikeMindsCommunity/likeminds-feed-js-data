import { PollMultipleSelectState, PollType } from "../../poll/enums";
import { OgTag } from "./ogTag";

export enum AttachmentType {
  IMAGE = "image",
  VIDEO = "video",
  DOCUMENT = "document",
  LINK = "link",
  CUSTOM = "custom",
  POLL = "poll",
  ARTICLE = "article",
  POST = "post",
  REPOST = "repost",
  GIF = "gif",
  REEL = "reel"
}

export interface Attachment {
  metaData: AttachmentMeta;
  type: AttachmentType;
}

export interface AttachmentMeta {
  entityId?: string; //
  format?: string; //
  name?: string; //
  ogTags?: OgTag; //
  size?: number; //
  url?: string; //
  duration?: number; //
  coverImageUrl?: string; //
  title?: string; //
  body?: string; //
  pollQuestion?: string; //
  expiryTime?: number; //
  options?: string[]; //
  multipleSelectState?: PollMultipleSelectState;
  pollType?: PollType;
  multipleSelectNumber?: number; //
  isAnonymous?: boolean; //
  allowAddOption?: boolean; //
  thumbnailUrl?: string; //
  widgetMeta?: WidgetMeta; //
  pageCount?: number; //
}

export interface WidgetMeta {
  meta: Record<string, any>;
}