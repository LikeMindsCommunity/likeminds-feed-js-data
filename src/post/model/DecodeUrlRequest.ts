class DecodeURLRequest {
  // Public properties of the request class
  url: string;

  // Public constructor to create the request object
  constructor(url: string) {
    this.url = url;
  }

  // Static builder method to create the request object
  public static builder(): DecodeURLRequestBuilder {
    return new DecodeURLRequestBuilder();
  }
}

// Builder class for DecodeURLRequest
export class DecodeURLRequestBuilder {
  private url: string | undefined;

  public setURL(url: string): DecodeURLRequestBuilder {
    this.url = url;
    return this;
  }

  // Build method to create the final DecodeURLRequest object
  public build(): DecodeURLRequest {
    if (!this.url) {
      throw new Error("URL is required.");
    }

    return new DecodeURLRequest(this.url);
  }
}

export default DecodeURLRequest;
