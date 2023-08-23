import { IUser } from "./user.model";

// Activity interface (you can define this separately if needed)
export interface IActivity {
  Id: string;
  action: number;
  actionBy: string[];
  actionOn: string;
  activityText: string;
  createdAt: number;
  cta: string;
  entityId: string;
  entityOwnerId: string;
  entityType: number;
  isRead: boolean;
  updatedAt: number;
  activityEntityData?: any;
  uuid: string;
}

export interface IActivities {
  activities: IActivity[];
  users: { [key: string]: IUser }; // Map<string, User> equivalent in TypeScript
}
