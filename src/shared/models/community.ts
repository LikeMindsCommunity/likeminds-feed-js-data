export interface ICommunity {
  autoApproval: boolean;
  branding: {
    advanced: {
      buttonsIconsColour: string;
      headerColour: string;
      textLinksColour: string;
    };
    basic: {
      primaryColour: string;
    };
  };
  communitySettingRights: {
    id: number;
    isLocked: boolean;
    isSelected: boolean;
    state: number;
    subTitle?: string;
    title: string;
  }[];
  feeEvent: number;
  feeMembership: number;
  feePaymentPages: number;
  gracePeriod: number;
  hideDmTab: boolean;
  id: number;
  imageUrl: string;
  isDiscoverable: boolean;
  isFreemiumCommunity: boolean;
  isPaid: boolean;
  isWhitelabel: boolean;
  membersCount: number;
  name: string;
  purpose: string;
  referralEnabled: boolean;
  subType: number;
  type: number;
  updatedAt: number;
  whitelabelInfo: null;
}
