import { IMenuItem } from "../../post/model/MenuItem";

export interface IComment {
  Id: string;
  id: string;
  isLiked: boolean;
  isEdited: boolean;
  // userId: string;
  text: string;
  level: number;
  likesCount: number;
  commentsCount: number;
  createdAt: number;
  updatedAt: number;
  replies?: Comment[]; // If 'replies' is a list of Comment objects
  // replies?: List<Comment>; // If 'replies' is a list of Comment objects using a custom 'List' type
  menuItems: IMenuItem[]; // If 'menuItems' is a list of MenuItem objects
  // menuItems: List<MenuItem>; // If 'menuItems' is a list of MenuItem objects using a custom 'List' type
  parentComment?: Comment; // If 'parentComment' is an object of Comment type
  uuid: string;
  tempId: string;
}
