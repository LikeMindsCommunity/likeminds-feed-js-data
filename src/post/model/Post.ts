import Attachment from "./Attachment";
import { IMenuItem } from "./MenuItem";

class Post {
  // Properties of the request class
  id: string;
  text: string;
  attachments?: Attachment[];
  communityId: number;
  isLiked: boolean;
  isEdited: boolean;
  isPinned: boolean;
  // userId: string;
  likesCount: number;
  commentsCount: number;
  isSaved: boolean;
  menuItems: IMenuItem[];
  replies?: any;
  // replies?: List<Comment>?;
  createdAt: number;
  updatedAt: number;
  uuid: string;

  // Public constructor to create the request object
  constructor(
    id: string,
    text: string,
    attachments: Attachment[],
    communityId: number,
    isLiked: boolean,
    isEdited: boolean,
    isPinned: boolean,
    // userId: string,
    likesCount: number,
    commentsCount: number,
    isSaved: boolean,
    menuItems: IMenuItem[],
    replies: any,
    createdAt: number,
    updatedAt: number,
    uuid: string
  ) {
    this.id = id;
    this.text = text;
    this.attachments = attachments;
    this.communityId = communityId;
    this.isLiked = isLiked;
    this.isEdited = isEdited;
    this.isPinned = isPinned;
    // this.userId = userId;
    this.likesCount = likesCount;
    this.commentsCount = commentsCount;
    this.isSaved = isSaved;
    this.menuItems = menuItems;
    this.replies = replies;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.uuid = uuid;
  }

  // Static builder method to create the request object
  public static builder(): PostBuilder {
    return new PostBuilder();
  }
}

// Builder class for Attachment
export class PostBuilder {
  private id: string;
  private text: string;
  private attachments?: Attachment[];
  private communityId: number;
  private isLiked: boolean;
  private isEdited: boolean;
  private isPinned: boolean;
  // private userId: string;
  private likesCount: number;
  private commentsCount: number;
  private isSaved: boolean;
  private menuItems: IMenuItem[];
  private replies?: any;
  private createdAt: number;
  private updatedAt: number;
  private uuid: string;

  // Add other properties as needed

  public setid(id: string): PostBuilder {
    this.id = id;
    return this;
  }
  public settext(text: string): PostBuilder {
    this.text = text;
    return this;
  }
  public setattachments(attachments: Attachment[]): PostBuilder {
    this.attachments = attachments;
    return this;
  }
  public setcommunityId(communityId: number): PostBuilder {
    this.communityId = communityId;
    return this;
  }
  public setisLiked(isLiked: boolean): PostBuilder {
    this.isLiked = isLiked;
    return this;
  }
  public setisEdited(isEdited: boolean): PostBuilder {
    this.isEdited = isEdited;
    return this;
  }
  public setisPinned(isPinned: boolean): PostBuilder {
    this.isPinned = isPinned;
    return this;
  }
  // public setuserId(userId: string): PostBuilder {
  //   this.userId = userId;
  //   return this;
  // }
  public setlikesCount(likesCount: number): PostBuilder {
    this.likesCount = likesCount;
    return this;
  }
  public setcommentsCount(commentsCount: number): PostBuilder {
    this.commentsCount = commentsCount;
    return this;
  }
  public setisSaved(isSaved: boolean): PostBuilder {
    this.isSaved = isSaved;
    return this;
  }
  public setmenuItems(menuItems: IMenuItem[]): PostBuilder {
    this.menuItems = menuItems;
    return this;
  }
  public setreplies(replies: any): PostBuilder {
    this.replies = replies;
    return this;
  }
  public setcreatedAt(createdAt: number): PostBuilder {
    this.createdAt = createdAt;
    return this;
  }
  public setupdatedAt(updatedAt: number): PostBuilder {
    this.updatedAt = updatedAt;
    return this;
  }
  public setuuid(uuid: string): PostBuilder {
    this.uuid = uuid;
    return this;
  }

  // Build method to create the final Attachment object
  public build(): Post {
    if (!this.id) {
      throw new Error("id is required.");
    }

    return new Post(
      this.id,
      this.text,
      this.attachments,
      this.communityId,
      this.isLiked,
      this.isEdited,
      this.isPinned,
      // this.userId,
      this.likesCount,
      this.commentsCount,
      this.isSaved,
      this.menuItems,
      this.replies,
      this.createdAt,
      this.updatedAt,
      this.uuid
    );
  }
}

export default Post;
