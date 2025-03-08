import { User } from "../models/member";

export interface MemberRights {
  id: number;
  isLocked: boolean;
  isSelected: boolean;
  title: string;
}

export interface GetMemberRights {
  member: User;
  rights: MemberRights[];
}