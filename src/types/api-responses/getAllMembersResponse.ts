import { Member } from "../models/member";

export interface GetAllMembersResponse {
  data?: {
    // admins_count: number;
    members: Member[];
    membersCount: number;
    // pending_members_count: number;
    // total_filtered_members: number;
    // total_members?: number;
    totalMembers: number;
    // total_only_members: number;
  };
}
