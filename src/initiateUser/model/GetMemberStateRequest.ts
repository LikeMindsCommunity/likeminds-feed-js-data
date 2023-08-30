class GetMemberStateRequest {
  // Properties of the request class
  memberId: string;

  // Public constructor to create the request object
  constructor(memberId: string) {
    this.memberId = memberId;
  }

  // Static builder method to create the request object
  public static builder(): GetMemberStateRequestBuilder {
    return new GetMemberStateRequestBuilder();
  }
}

// Builder class for GetMemberStateRequest
export class GetMemberStateRequestBuilder {
  private memberId: string | undefined;

  // Add other properties as needed

  public setMemberId(memberId: string): GetMemberStateRequestBuilder {
    this.memberId = memberId;
    return this;
  }

  // Add other methods to set other properties as needed

  // Build method to create the final GetMemberStateRequest object
  public build(): GetMemberStateRequest {
    return new GetMemberStateRequest(this.memberId);
  }
}

export default GetMemberStateRequest;
