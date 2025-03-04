import { User } from "./member";
import { ReportEntityType } from "src/moderation/enums";

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
  actionTaken?: number;
  actionTakenBy?: User;
}
