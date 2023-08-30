import { IUser } from "src/shared/models/user.model";

// Like interface (you can define this separately if needed)
interface Like {
  id: string;
  // Add other properties for Like as needed
  // ...
}

// User interface (you can define this separately if needed)
interface User {
  id: string;
  // Add other properties for User as needed
  // ...
}

export interface GetCommentLikesResponse {
  likes: Like[];
  totalCount: number;
  users: { [key: string]: IUser }; // Map<string, User> equivalent in TypeScript
}
