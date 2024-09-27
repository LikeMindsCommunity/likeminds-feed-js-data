import { User } from "../models/member";

export interface MemberRight {
  id: number;
  isLocked: boolean;
  isSelected: boolean;
  state: number;
  subTitle?: string;
  title: string;
}

export interface GetMemberState {
  createdAt: string;
  editRequired: boolean;
  member: User;
  memberRights: MemberRight[];
  state: number;
  toolState: number;
}
