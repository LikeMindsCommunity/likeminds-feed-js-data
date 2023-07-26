import LMResponse from "src/core/services/lmresponse";
import { User } from "src/shared/models/user";

interface InitiateUserResponse {
  accessToken?: string | null;
  refreshToken?: string | null;
  user?: User | null;
  community?: any | null;
  appAccess: boolean | null;
  logoutResponse?: LMResponse<null> | null;
}

export { InitiateUserResponse };
