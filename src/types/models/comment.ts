import { Attachment } from "./attachment";

export interface Comment {
  id: string;
  attachments: Attachment[];
  commentsCount: number;
  createdAt: number;
  deleteReason: string;
  deletedBy: string;
  deletedByUuid: string;
  isDeleted: boolean;
  isEdited: boolean;
  isLiked: boolean;
  level: number;
  likesCount: number;
  menuItems: MenuItem[];
  postId: string;
  tempId: null | string;
  text: string;
  updatedAt: number;
  uuid: string;
}

export interface MenuItem {
  id: number;
  title: string;
}
