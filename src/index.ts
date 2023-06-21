import { Base, SDKBuilder } from "./base";
import { HomeFeedClient } from "./pages/feed-room";
import { applyMixins } from "./utils";
import { UniversalFeed } from "./pages/universal-feed";
import { Member } from "./pages/user";

class LMFeedClient extends Base {
  static xApiKey: string;
  static xPlatformCode: string;
  static xVersionCode: number;
  static xSdkSource: string;
  static setApiKey(xapikey: string): SDKBuilder {
    this.xApiKey = xapikey;
    return this;
  }

  static setPlatformCode(xplatformcode: string): SDKBuilder {
    this.xPlatformCode = xplatformcode;
    return this;
  }

  static setVersionCode(xversioncode: number): SDKBuilder {
    this.xVersionCode = xversioncode;
    return this;
  }

  static build() {
    return new LMFeedClient({
      xApiKey: this.xApiKey,
      xPlatformCode: this.xPlatformCode,
      xVersionCode: this.xVersionCode!,
      xSdkSource: this.xSdkSource,
    });
  }
}

interface LMFeedClient extends HomeFeedClient, UniversalFeed, Member {}

applyMixins(LMFeedClient, [HomeFeedClient, UniversalFeed, Member]);

export default LMFeedClient;
