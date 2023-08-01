import Attachment from "src/post/model/Attachment";
import { IMenuItem } from "src/post/model/MenuItem";
import { IComment } from "./comment.model";

export interface Post {
  id: string;
  text: string;
  attachments?: Attachment[];
  communityId: number;
  isLiked: boolean;
  isEdited: boolean;
  isPinned: boolean;
  userId: string;
  likesCount: number;
  commentsCount: number;
  isSaved: boolean;
  menuItems: IMenuItem[];
  replies?: IComment[]; // Uncomment this line if 'replies' is of type List<Comment>
  // replies?: any; // Comment out this line if 'replies' is of type List<Comment>
  createdAt: number;
  updatedAt: number;
  uuid: string;
}
