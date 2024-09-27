class DecodeUrlRequest {
  // Properties of the request class
  url: string;

  // Public constructor to create the request object
  constructor(url: string) {
    this.url = url;
  }

  // Static builder method to create the request object
  public static builder(): DecodeUrlRequestBuilder {
    return new DecodeUrlRequestBuilder();
  }
}

// Builder class for DecodeUrlRequest
export class DecodeUrlRequestBuilder {
  private url: string | undefined;
  // Add other properties as needed

  public setUrl(url: string): DecodeUrlRequestBuilder {
    this.url = url;
    return this;
  }

  // Build method to create the final DecodeUrlRequest object
  public build(): DecodeUrlRequest {
    if (!this.url) {
      throw new Error("UUID and DeviceI are required.");
    }

    return new DecodeUrlRequest(this.url);
  }
}

export default DecodeUrlRequest;
