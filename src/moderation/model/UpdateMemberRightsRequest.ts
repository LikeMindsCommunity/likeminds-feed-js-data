import { MemberRights } from "src/types/api-responses/GetMemberRightsResponse";

class UpdateMemberRightsRequest {
  uuid: string;
  isCM: boolean;
  rights: MemberRights[];

  constructor(uuid: string, isCM: boolean, rights: MemberRights[]) {
    this.uuid = uuid;
    this.isCM = isCM;
    this.rights = rights;
  }

  public static builder(): UpdateMemberRightsRequestBuilder {
    return new UpdateMemberRightsRequestBuilder();
  }
}

class UpdateMemberRightsRequestBuilder {
  private uuid!: string;
  private isCM!: boolean;
  private rights!: MemberRights[];

  public setUuid(uuid: string): UpdateMemberRightsRequestBuilder {
    this.uuid = uuid;
    return this;
  }

  public setIsCM(isCM: boolean): UpdateMemberRightsRequestBuilder {
    this.isCM = isCM;
    return this;
  }

  public setRights(rights: MemberRights[]): UpdateMemberRightsRequestBuilder {
    this.rights = rights;
    return this;
  }

  public build(): UpdateMemberRightsRequest {
    return new UpdateMemberRightsRequest(this.uuid, this.isCM, this.rights);
  }
}

export default UpdateMemberRightsRequest;
