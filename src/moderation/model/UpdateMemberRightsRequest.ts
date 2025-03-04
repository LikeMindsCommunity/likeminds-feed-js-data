import { MemberRights } from "src/types/api-responses/GetMemberRightsResponse";

class UpdateMemberRightsRequest {
  uuid: string;
  isCM: boolean;
  rights: MemberRights[];
  customTitle: string;

  constructor(uuid: string, isCM: boolean, rights: MemberRights[], customTitle: string) {
    this.uuid = uuid;
    this.isCM = isCM;
    this.rights = rights;
    this.customTitle = customTitle;
  }

  public static builder(): UpdateMemberRightsRequestBuilder {
    return new UpdateMemberRightsRequestBuilder();
  }
}

class UpdateMemberRightsRequestBuilder {
  private uuid!: string;
  private isCM!: boolean;
  private rights!: MemberRights[];
  private customTitle!: string;

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

  public setCustomTitle(customTitle: string): UpdateMemberRightsRequestBuilder {
    this.customTitle = customTitle;
    return this;
  }

  public build(): UpdateMemberRightsRequest {
    return new UpdateMemberRightsRequest(this.uuid, this.isCM, this.rights, this.customTitle);
  }
}

export default UpdateMemberRightsRequest;
