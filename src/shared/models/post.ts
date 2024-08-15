import Attachment from "../../post/model/Attachment";
import { IMenuItem } from "../../post/model/MenuItem";
import { IComment } from "./comment";

export interface IPost {
  Id: string;
  id: string;
  text: string;
  attachments?: Attachment[];
  communityId: number;
  isLiked: boolean;
  isEdited: boolean;
  isPinned: boolean;
  // userId: string;
  likesCount: number;
  commentsCount: number;
  isSaved: boolean;
  menuItems: IMenuItem[];
  replies?: IComment[]; // Uncomment this line if 'replies' is of type List<Comment>
  // replies?: any; // Comment out this line if 'replies' is of type List<Comment>
  createdAt: number;
  updatedAt: number;
  uuid: string;
  topics: string[];
  tempId: string;
}
