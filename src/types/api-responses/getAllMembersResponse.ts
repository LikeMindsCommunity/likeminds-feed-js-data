import { Community } from "../models/community";
import { User } from "../models/member";

export interface GetAllMembers {
  adminsCount: number;
  members: User[];
  community: Community;
  membersCount: number;
  pendingMembersCount: number;
  totalFilteredMembers: number;
  totalMembers: number;
  totalOnlyMembers: number;
}
