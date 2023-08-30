class Like {
  // Properties of the request class
  id: string;
  createdAt: number;
  updatedAt: number;
  userId: string;
  uuid: string;

  // Public constructor to create the request object
  constructor(
    id: string,
    createdAt: number,
    updatedAt: number,
    userId: string,
    uuid: string
  ) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.userId = userId;
    this.uuid = uuid;
  }

  // Static builder method to create the request object
  public static builder(): LikeBuilder {
    return new LikeBuilder();
  }
}

// Builder class for Attachment
export class LikeBuilder {
  private id: string;
  private createdAt: number;
  private updatedAt: number;
  private userId: string;
  private uuid: string;
  // Add other properties as needed

  public setid(id: string): LikeBuilder {
    this.id = id;
    return this;
  }

  public setcreatedAt(createdAt: number): LikeBuilder {
    this.createdAt = createdAt;
    return this;
  }

  public setupdatedAt(updatedAt: number): LikeBuilder {
    this.updatedAt = updatedAt;
    return this;
  }

  public setuserId(userId: string): LikeBuilder {
    this.userId = userId;
    return this;
  }

  public setuuid(uuid: string): LikeBuilder {
    this.uuid = uuid;
    return this;
  }

  // Build method to create the final Attachment object
  public build(): Like {
    if (
      !this.id ||
      !this.createdAt ||
      !this.updatedAt ||
      !this.userId ||
      !this.uuid
    ) {
      throw new Error("id, page and pageSize are required.");
    }

    return new Like(
      this.id,
      this.createdAt,
      this.updatedAt,
      this.userId,
      this.uuid
    );
  }
}

export default Like;
