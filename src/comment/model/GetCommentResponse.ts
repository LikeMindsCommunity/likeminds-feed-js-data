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
  comment: Comment;
  users: { [key: string]: User }; // Map<string, User> equivalent in TypeScript
}
