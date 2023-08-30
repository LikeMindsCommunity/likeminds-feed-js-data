class LinkOGTags {
  // Properties of the request class
  title?: string = null;
  image?: string = null;
  description?: string = null;
  url?: string = null;

  // Public constructor to create the request object
  constructor(title: string, image: string, description: string, url: string) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.url = url;
  }

  // Static builder method to create the request object
  public static builder(): LinkOGTagsBuilder {
    return new LinkOGTagsBuilder();
  }
}

// Builder class for Attachment
export class LinkOGTagsBuilder {
  private title?: string = null;
  private image?: string = null;
  private description?: string = null;
  private url?: string = null;

  // Add other properties as needed

  public settitle(title: string): LinkOGTagsBuilder {
    this.title = title;
    return this;
  }

  public setimage(image: string): LinkOGTagsBuilder {
    this.image = image;
    return this;
  }

  public setdescription(description: string): LinkOGTagsBuilder {
    this.description = description;
    return this;
  }

  public seturl(url: string): LinkOGTagsBuilder {
    this.url = url;
    return this;
  }

  // Build method to create the final Attachment object
  public build(): LinkOGTags {
    if (!this.title || !this.image || !this.description || !this.url) {
      throw new Error("id, page and pageSize are required.");
    }

    return new LinkOGTags(this.title, this.image, this.description, this.url);
  }
}

export default LinkOGTags;
