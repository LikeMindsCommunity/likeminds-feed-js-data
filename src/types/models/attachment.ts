import { PollMultipleSelectState, PollType } from "../../poll/enums";
import { OgTag } from "./ogTag";

export interface Attachment {
  attachmentMeta: AttachmentMeta;
  attachmentType: number;
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
  meta?: Record<string, any> | null; //
  pageCount?: number; //
}
