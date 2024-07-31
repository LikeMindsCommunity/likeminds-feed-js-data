export declare type InitUser = {
  isGuest: boolean;
  userUniqueId: string;
  userName?: string;
};

export declare type Logout = {
  refreshToken: string;
};

export declare type GetProfile = {
  uuid: string;
};
export declare type GetMemberChatroom = {
  uuid: string;
  state: any;
  page: number;
};

export declare type EditProfile = {
  userUniqueId: string;
  userName: string;
  imageUrl: string;
  name?: string;
};

export declare type Nothing = {}

export declare type GetAllMembers = {
  chatroomId?: number;
  memberState?: any;
  page: number;
};

export declare type MemberState = {
  memberId: string;
};

export declare type USERTYPE = {
  community_id: number;
  page: number;
  chatroom_id?: number;
  member_state?: number;
};
export declare type PROFILE = {
  user_id: number;
};

export declare type Members = {
  page: number;
};

export declare type Search = {
  search: string;
  search_type: string;
  page: number;
  page_size: number;
};
