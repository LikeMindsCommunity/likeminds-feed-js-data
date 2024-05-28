import { IWidget } from "src/shared/models/widget";
import { IUser } from "../../shared/models/user";
import Attachment from "./Attachment";
import { IMenuItem } from "./MenuItem";
import { ITopic } from "src/shared/models/topic";

interface IPost {
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
  replies?: Comment[]; // Uncomment this line if 'replies' is of type List<Comment>
  createdAt: number;
  updatedAt: number;
  uuid: string;
}

// User interface (you can define this separately if needed)

export interface IAddPostResponse {
  post: IPost;
  users: { [key: string]: IUser }; // Map<string, User> equivalent in TypeScript
  topics: ITopic;
  widget: IWidget;
}
