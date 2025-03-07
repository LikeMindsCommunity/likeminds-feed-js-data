class GetMemberRightsRequest {
    uuid: string;
    isCM: boolean;
  
    constructor(uuid: string, isCM: boolean) {
      this.uuid = uuid;
      this.isCM = isCM;
    }
  
    public static builder(): GetMemberRightsRequestBuilder {
      return new GetMemberRightsRequestBuilder();
    }
  }
  
  export class GetMemberRightsRequestBuilder {
    private uuid!: string;
    private isCM!: boolean;
  
    public setUuid(uuid: string): GetMemberRightsRequestBuilder {
      this.uuid = uuid;
      return this;
    }
  
    public setIsCM(isCM: boolean): GetMemberRightsRequestBuilder {
      this.isCM = isCM;
      return this;
    }
  
    public build(): GetMemberRightsRequest {
      return new GetMemberRightsRequest(this.uuid, this.isCM);
    }
  }
  
  export default GetMemberRightsRequest;