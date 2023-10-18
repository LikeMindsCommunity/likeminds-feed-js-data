class AddCommentRequest {
  // Properties of the request class
  id: string;
  isLiked: boolean;
  isEdited: boolean;
  userId: string;
  text: string;
  level: number;
  likesCount: number;
  commentsCount: number;
  createdAt: number;
  updatedAt: number;
  replies?: any;
  menuItems: any;
  parentComment?: any;
  uuid: string;
  // replies: List<Comment>?;
  // menuItems: List<MenuItem>;
  // parentComment: Comment?;

  // Public constructor to create the request object
  constructor(
    id: string,
    isLiked: boolean,
    isEdited: boolean,
    userId: string,
    text: string,
    level: number,
    likesCount: number,
    commentsCount: number,
    createdAt: number,
    updatedAt: number,
    replies: any,
    menuItems: any,
    parentComment: any,
    uuid: string,
  ) {
    this.id = id;
    this.isLiked = isLiked;
    this.isEdited = isEdited;
    this.userId = userId;
    this.text = text;
    this.level = level;
    this.likesCount = likesCount;
    this.commentsCount = commentsCount;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.replies = replies;
    this.menuItems = menuItems;
    this.parentComment = parentComment;
    this.uuid = uuid;
  }

  // Static builder method to create the request object
  public static builder(): AddCommentRequestBuilder {
    return new AddCommentRequestBuilder();
  }
}

// Builder class for AddCommentRequest
export class AddCommentRequestBuilder {
  private id: string | undefined;
  private isLiked: boolean | undefined;
  private isEdited: boolean | undefined;
  private userId: string | undefined;
  private text: string | undefined;
  private level: number | undefined;
  private likesCount: number | undefined;
  private commentsCount: number | undefined;
  private createdAt: number | undefined;
  private updatedAt: number | undefined;
  private replies: any | undefined;
  private menuItems?: any | undefined;
  private parentComment?: any | undefined;
  private uuid: string | undefined;
  // Add other properties as needed

  public setid(id: string): AddCommentRequestBuilder {
    this.id = id;
    return this;
  }

  public setisLiked(isLiked: boolean): AddCommentRequestBuilder {
    this.isLiked = isLiked;
    return this;
  }

  public setisEdited(isEdited: boolean): AddCommentRequestBuilder {
    this.isEdited = isEdited;
    return this;
  }

  public setuserId(userId: string): AddCommentRequestBuilder {
    this.userId = userId;
    return this;
  }

  public settext(text: string): AddCommentRequestBuilder {
    this.text = text;
    return this;
  }

  public setlevel(level: number): AddCommentRequestBuilder {
    this.level = level;
    return this;
  }
  public setlikesCount(likesCount: number): AddCommentRequestBuilder {
    this.likesCount = likesCount;
    return this;
  }

  public setcommentsCount(commentsCount: number): AddCommentRequestBuilder {
    this.commentsCount = commentsCount;
    return this;
  }

  public setcreatedAt(createdAt: number): AddCommentRequestBuilder {
    this.createdAt = createdAt;
    return this;
  }

  public setupdatedAt(updatedAt: number): AddCommentRequestBuilder {
    this.updatedAt = updatedAt;
    return this;
  }

  public setreplies(replies: string): AddCommentRequestBuilder {
    this.replies = replies;
    return this;
  }
  public setmenuItems(menuItems: string): AddCommentRequestBuilder {
    this.menuItems = menuItems;
    return this;
  }
  public setparentComment(parentComment: string): AddCommentRequestBuilder {
    this.parentComment = parentComment;
    return this;
  }
  public setuuid(uuid: string): AddCommentRequestBuilder {
    this.uuid = uuid;
    return this;
  }

  // Build method to create the final AddCommentRequest object
  public build(): AddCommentRequest {
    if (
      !this.id ||
      !this.isLiked ||
      !this.isEdited ||
      !this.userId ||
      !this.text ||
      !this.level ||
      !this.likesCount ||
      !this.commentsCount ||
      !this.createdAt ||
      !this.updatedAt ||
      !this.menuItems ||
      !this.uuid
    ) {
      throw new Error("id and text are required.");
    }

    return new AddCommentRequest(
      this.id,
      this.isLiked,
      this.isEdited,
      this.userId,
      this.text,
      this.level,
      this.likesCount,
      this.commentsCount,
      this.createdAt,
      this.updatedAt,
      this.replies,
      this.menuItems,
      this.parentComment,
      this.uuid,
    );
  }
}

export default AddCommentRequest;
