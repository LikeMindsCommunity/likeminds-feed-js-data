 


interface Attachment {
    file_type: number;
    file_url: string;
    file_format?: string;
    file_size?: string;
  }
  
  interface MenuItem {
    title: string;
  }
  
  interface Post {
    _id: string;
    attachments: Attachment[];
    comments_count: number;
    community_id: number;
    created_at: number;
    is_pinned: boolean;
    is_saved: boolean;
    likes_count: number;
    menu_items: MenuItem[];
    text: string;
    updated_at: number;
    user_id: string;
  }
  
//   interface PostsData {
//     success: boolean;
//     data: {
//       posts: Post[];
//     };
//   }
  

  export declare type FeedResponse = {
    success: boolean;
    data: {
      posts: Post[];
    };
  };