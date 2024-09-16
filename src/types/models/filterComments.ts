import { Attachment } from "./attachment";
import { IMenuItem } from "../../post/model/MenuItem"


export interface FilterComment {
  Id: string;
  id: string;
  attachments: Attachment[];
  commentsCount: number;
  communityId: number;
  createdAt: number;
  isEdited: boolean;
  isLiked: boolean;
  level: number;
  likesCount: number;
  menuItems: IMenuItem[];
  postId: string;
  tempId: string | null;
  text: string;
  updatedAt: number;
  userId: string;
  uuid: string;
}