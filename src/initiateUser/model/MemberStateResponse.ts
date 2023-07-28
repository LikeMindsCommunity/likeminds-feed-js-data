import { ManagementRightPermissionData } from "./ManagementRightPermissionData";

export interface MemberStateResponse {
  id: number;
  state: number;
  userUniqueId: string;
  customTitle?: string;
  imageUrl: string;
  isGuest: boolean;
  isOwner: boolean;
  name: string;
  organisationName?: string;
  managerRights?: ManagementRightPermissionData[];
  memberRights: ManagementRightPermissionData[];
  updatedAt: number;
  uuid: string;
}
