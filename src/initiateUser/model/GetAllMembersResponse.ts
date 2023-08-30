export interface IMember {
  id: number;
  is_guest: boolean;
  is_owner: boolean;
  member_since: string;
  menu: IMenuAction[];
  route: string;
  title: string;
  name: string;
  member_profile_route: string;
  state: number;
  updated_at: number;
}

interface IMenuAction {
  route: string;
  title: string;
}
