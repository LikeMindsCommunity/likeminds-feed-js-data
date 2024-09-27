export interface Community {
  id: number;
  name: string;
  purpose: string;
  imageUrl: string;
  membersCount: number;
  type: number;
  subType: number;
  isPaid: boolean;
  autoApproval: boolean;
  gracePeriod: number;
  isDiscoverable: boolean;
  referralEnabled: boolean;
  updatedAt: number;
  feeMembership: number;
  feeEvent: number;
  feePaymentPages: number;
  branding: CommunityBranding;
  isWhitelabel: boolean;
  hideDmTab: boolean;
  isFreemiumCommunity: boolean;
  communitySettingRights: CommunitySettingRights[];
}

interface CommunitySettingRights {
  id: number;
  title: string;
  state: number;
  isSelected: boolean;
  isLocked: boolean;
}

interface CommunityBranding {
  basic: {
    primaryColour: string;
  };
  advanced: {
    headerColour: string;
    buttonsIconsColour: string;
    textLinksColour: string;
  };
}
