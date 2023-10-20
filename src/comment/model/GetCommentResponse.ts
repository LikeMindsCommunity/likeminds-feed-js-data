import { IComment } from "../../shared/models/comment";
import { IUser } from "../../shared/models/user";

// Comment interface (you can define this separately if needed)
interface Comment {
  id: string;
  // Add other properties for Comment as needed
  // ...
}

// User interface (you can define this separately if needed)
interface User {
  id: string;
  // Add other properties for User as needed
  // ...
}

export interface GetCommentResponse {
  comment: IComment;
  users: { [key: string]: IUser }; // Map<string, User> equivalent in TypeScript
}
