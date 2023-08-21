export interface GetMemberStateResponse {
  created_at: number;
  edit_required: boolean;
  member: {
    custom_title: string;
    id: number;
    image_url: string;
    is_guest: boolean;
    is_owner: boolean;
    name: string;
    organisation_name: string | null;
    state: number;
    updated_at: number;
    user_unique_id: string;
  };
  member_rights: MemberRight[];
  state: number;
  tool_state: number;
}

export interface MemberRight {
  id: number;
  is_locked: boolean;
  is_selected: boolean;
  state: number;
  title: string;
  sub_title?: string;
}
