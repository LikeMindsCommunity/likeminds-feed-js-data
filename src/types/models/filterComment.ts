import { Attachment } from "./attachment";
import { MenuItem } from "./post";

export interface FilterComment {
  id: string;
  attachments: Attachment[];
  commentsCount: number;
  communityId: number;
  createdAt: number;
  isEdited: boolean;
  isLiked: boolean;
  level: number;
  likesCount: number;
  menuItems: MenuItem[];
  postId: string;
  tempId: string | null;
  text: string;
  updatedAt: number;
  userId: string;
  uuid: string;
}
