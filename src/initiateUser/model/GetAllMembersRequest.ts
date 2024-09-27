class GetAllMembersRequest {
  // Properties of the request class
  page: number;

  // Public constructor to create the request object
  constructor(page: number) {
    this.page = page;
  }

  // Static builder method to create the request object
  public static builder(): GetAllMembersRequestBuilder {
    return new GetAllMembersRequestBuilder();
  }
}

// Builder class for GetAllMembersRequest
export class GetAllMembersRequestBuilder {
  private page: number | undefined;

  // Add other properties as needed

  public setPage(page: number): GetAllMembersRequestBuilder {
    this.page = page;
    return this;
  }

  // Add other methods to set other properties as needed

  // Build method to create the final GetAllMembersRequest object
  public build(): GetAllMembersRequest {
    return new GetAllMembersRequest(this.page);
  }
}

export default GetAllMembersRequest;
