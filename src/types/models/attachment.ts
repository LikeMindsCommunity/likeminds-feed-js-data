import { OgTag } from "./ogTag";

export interface Attachment {
  attachmentMeta: AttachmentMeta;
  attachmentType: number;
}

export interface AttachmentMeta {
  entityId?: string;
  format: string;
  name: string;
  ogTags?: OgTag;
  size?: number;
  url: string;
  duration?: number;
  pageCount?: number;
  thumbnailUrl?: string;
}
