import { User } from "./member";
import { ReportEntityType } from "src/moderation/enums";

export enum ActionTaken {
  EDIT_MEMBER_PERMISSION = 0,
  REMOVE_FROM_COMMUNITY = 1,
  LEFT_THE_COMMUNITY = 2,
  RESPONSE_DELETED_BY_CM = 3,
  RESPONSE_DELETED_BY_CREATOR = 4,
  CHATROOM_DELETED_BY_CM = 5,
  CHATROOM_DELETED_BY_CREATOR = 6,
  PENDING_POST_APPROVED = 7,
  PENDING_POST_REJECTED = 8,
  POST_APPROVED = 9,
  POST_REJECTED = 10,
  COMMENT_APPROVED = 11,
  COMMENT_REJECTED = 12,
}

export interface Tag {
  id: number;
  name: string;
}

export interface Report {
  accusedUser: User;
  closedBy?: User;
  closedOn?: number;
  entityId: string;
  id: number;
  isClosed: boolean;
  reason?: string;
  reportedByUser: User;
  reportedOn: number;
  tag?: Tag;
  type: ReportEntityType;
  actionTaken?: ActionTaken;
  actionTakenBy?: User;
}
