export interface IMemberState {
  createdAt: number;
  editRequired: boolean;
  member: {
    customTitle: string;
    id: number;
    imageUrl: string;
    isGuest: boolean;
    isOwner: boolean;
    name: string;
    organisationName: string | null;
    state: number;
    updatedAt: number;
    userUniqueId: string;
  };
  memberRights: IMemberRight[];
  state: number;
  toolState: number;
}

export interface IMemberRight {
  id: number;
  isLocked: boolean;
  isSelected: boolean;
  state: number;
  title: string;
  subTitle?: string;
}
