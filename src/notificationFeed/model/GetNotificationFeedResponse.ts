// Activity interface (you can define this separately if needed)
interface Activity {
  id: string;
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

// User interface (you can define this separately if needed)
interface User {
  id: string;
  // Add other properties for User as needed
  // ...
}

export interface GetNotificationFeedResponse {
  activities: Activity[];
  users: { [key: string]: User }; // Map<string, User> equivalent in TypeScript
}
