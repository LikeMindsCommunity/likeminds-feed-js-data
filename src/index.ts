import { Base } from "./base";
import { HomeFeedClient } from "./pages/feed-room";
import { applyMixins } from "./utils";
import { UniversalFeed } from "./pages/universal-feed";
import { Member } from "./pages/user";

class LMFeedClient extends Base {}
interface LMFeedClient extends HomeFeedClient, UniversalFeed, Member {}

applyMixins(LMFeedClient, [HomeFeedClient, UniversalFeed, Member]);

export default LMFeedClient;
