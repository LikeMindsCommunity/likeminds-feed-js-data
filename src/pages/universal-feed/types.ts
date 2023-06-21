export declare type Feed = {
  page: number;
  pageSize: number;
};

export declare type AddPost = {
  text: string;
  attachments: any;
};

export declare type SavePost = {
  postId: string;
};
export declare type LikePost = {
  postId: string;
};
export declare type PinPost = {
  postId: string;
};

export declare type EditPost = {
  text: string;
  attachments: any;
};

export declare type GetPost = {
  page: number;
  pageSize: number;
};
export declare type DeletePost = {
  deleteReason: string;
};

export declare type DecodeUrl = {
  url: string;
};

export declare type AddComment = {
  text: string;
};

export declare type GetComment = {
  page: number;
  pageSize: number;
};
