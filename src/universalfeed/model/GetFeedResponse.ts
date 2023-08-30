// Post interface (you can define this separately if needed)
interface Post {
  id: string;
  // Add other properties for Post as needed
  // ...
}

// User interface (you can define this separately if needed)
interface User {
  id: string;
  // Add other properties for User as needed
  // ...
}

export interface GetFeedResponse {
  posts: Post[];
  users: { [key: string]: User }; // Map<string, User> equivalent in TypeScript
}
