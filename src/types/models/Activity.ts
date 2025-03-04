import { Attachment } from "./attachment";
import { MenuItem } from "./post";

export enum ActivityActionType {
  CREATE_POST_PERMIT_ADDED = "create_post_permit_added",
  CREATE_POST_PERMIT_REMOVED = "create_post_permit_removed",
  CREATE_COMMENT_PERMIT_ADDED = "create_comment_permit_added",
  CREATE_COMMENT_PERMIT_REMOVED = "create_comment_permit_removed",
  CM_DELETED_YOUR_POST = "cm_deleted_your_post",
  CM_DELETED_YOUR_COMMENT = "cm_deleted_your_comment",
  LIKE_ON_YOUR_POST = "like_on_your_post",
  COMMENT_ON_YOUR_POST = "comment_on_your_post",
  LIKE_ON_YOUR_COMMENT = "like_on_your_comment",
  COMMENT_ON_YOUR_COMMENT = "comment_on_your_comment",
  TAGGED_YOU_ON_POST = "tagged_you_on_post",
  TAGGED_YOU_ON_COMMENT = "tagged_you_on_comment",
  ALSO_COMMENTED_ON_POST_YOU_COMMENTED = "also_commented_on_post_you_commented",
  REPOSTED_YOUR_POST = "reposted_your_post",
  LIKE_ON_POST = "like_on_post",
  LIKE_ON_COMMENT = "like_on_comment",
  COMMENT_ON_POST = "comment_on_post",
  COMMENT_ON_COMMENT = "comment_on_comment",
}

export enum ActivityEntityType {
  POST = "post",
  COMMENT = "comment",
  USER = "user",
  PENDING_POST = "pending_post",
}

export interface Activity {
  id: string;
  action: ActivityActionType;
  actionBy: string[];
  actionOn: string;
  activityEntityData: ActivityEntityData;
  activityText: string;
  createdAt: number;
  cta: string;
  entityId: string;
  entityOwnerId: string;
  entityType: ActivityEntityType;
  isRead: boolean;
  updatedAt: number;
  uuid: string;
}

export interface ActivityEntityData {
  id: string;
  attachments: Attachment[];
  commentIds: null;
  commentsCount: number;
  communityId: number;
  createdAt: number;
  deleteReason?: string;
  deletedBy?: string;
  deletedByUuid?: string;
  heading: string;
  isDeleted?: boolean;
  isEdited: boolean;
  isLiked: boolean;
  isPinned: boolean;
  isRepost: boolean;
  isRepostedByUser: boolean;
  isSaved: boolean;
  likesCount: number;
  menuItems: MenuItem[];
  repostCount: number;
  tempId: string | null;
  text: string;
  topics: string[];
  updatedAt: number;
  userId: string;
  uuid: string;
}
