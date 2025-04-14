// NetworkLibrary
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import LMResponse from "./lmresponse";
import TokenManager from "./tokenmanager";
import { environment } from "src/environment";
import { LMSDKCallbacks } from "../../LMCallback";
import { TokenValues } from "../../shared/tokens";
import LMResponseType from "../../LMResponse";

class NetworkLibrary {
  private tokenManager: TokenManager;

  private xApiKey: string | null;

  private lmSdkCallbacks: LMSDKCallbacks | null;

  constructor(lmSdkCallbacks: LMSDKCallbacks) {
    this.lmSdkCallbacks = lmSdkCallbacks;
    this.tokenManager = new TokenManager(lmSdkCallbacks);
  }

  public setAccessToken(accessToken: string) {
    this.tokenManager.setAccessToken(accessToken);
  }
  public setRefreshToken(refreshToken: string) {
    this.tokenManager.setRefreshToken(refreshToken);
  }

  public getAccessToken() {
    return this.tokenManager.getAccessToken();
  }

  public getRefreshToken() {
    return this.tokenManager.getRefreshToken();
  }

  public onRefreshAccessToken() {
    return this.tokenManager.refreshAccessToken();
  }

  public setUserInLocalStorage(user: string) {
    localStorage.setItem(TokenValues.LOCAL_USER, user);
  }
  public setApiKeyInLocalStorage(apiKey: string) {
    localStorage.setItem(TokenValues.LOCAL_API_KEY, apiKey);
  }

  public setAccessTokenInLocalStorage(token: string) {
    localStorage.setItem(TokenValues.LOCAL_ACCESS_TOKEN, token);
  }

  public setRefreshTokenInLocalStorage(token: string) {
    localStorage.setItem(TokenValues.LOCAL_REFRESH_TOKEN, token);
  }

  public getAccessTokenFromLocalStorage() {
    return localStorage.getItem(TokenValues.LOCAL_ACCESS_TOKEN);
  }

  public getRefreshTokenFromLocalStorage() {
    return localStorage.getItem(TokenValues.LOCAL_REFRESH_TOKEN);
  }

  public getApiKeyFromLocalStorage() {
    return localStorage.getItem(TokenValues.LOCAL_API_KEY);
  }
  public getUserFromLocalStorage() {
    return localStorage.getItem(TokenValues.LOCAL_USER);
  }

  public setPlatformCode(platFormCode: string) {
    this.tokenManager.setPlatformCode(platFormCode);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public setVersionCode(versionCode: any) {
    this.tokenManager.setVersionCode(versionCode);
  }

  // Api Key
  public setApiKey(xApiKey: string) {
    this.xApiKey = xApiKey;
  }
  public getApiKey() {
    return this.xApiKey;
  }
  public setLMSDKCallbacks(callback: LMSDKCallbacks) {
    this.lmSdkCallbacks = callback;
    this.tokenManager.setLMSdkCallbacks(callback);
  }

  // Clears all authentication and user-related data from localStorage.
  public clearLocalStorage() {
    localStorage.removeItem(TokenValues.LOCAL_ACCESS_TOKEN);
    localStorage.removeItem(TokenValues.LOCAL_REFRESH_TOKEN);
    localStorage.removeItem(TokenValues.LOCAL_USER);
    localStorage.removeItem(TokenValues.LOCAL_API_KEY);
    this.tokenManager.clearTokenManager();
  }

  private async makeRequest<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    const baseUrl: string = environment.apiUrl;
    const requestUrl = baseUrl + url;
    axios.interceptors.response.use(undefined, async function (error) {

      const config = error.config;


      // Check if the error is due to network issues or specific status codes
      const retriableStatusCodes = [500, 502, 503, 504, 408, 429];
      const isNetworkError = error?.message === "Network Error"
      const isRetriableStatusCode = retriableStatusCodes.includes(error?.response?.status);


      if (!isNetworkError && !isRetriableStatusCode) {
        // If not a network error or retriable status code, reject immediately
        return Promise.reject(error);
      }

      config._retry = true; // Mark as retried
      config.retryCount = config.retryCount || 0;

      const MAX_RETRIES = 3;
      const RETRY_DELAY = 1000; // Base delay in ms

      if (config.retryCount < MAX_RETRIES) {
        config.retryCount += 1;
        const delay = RETRY_DELAY * 2 ** (config.retryCount - 1); // Exponential backoff
        await new Promise((resolve) => setTimeout(resolve, delay));
        return axios(config); // Retry the request
      }

      return Promise.reject(error);
    })

    return axios.request<T>({ url: requestUrl, ...config });
  }

  public async makeAuthenticatedRequest<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<LMResponse<T>> {
    const requestConfig: AxiosRequestConfig = {
      ...config,
      headers: {
        ...config?.headers,
        "x-sdk-source": "feed",
      },
    };
    const initApi = url.includes("initiate");
    requestConfig.headers["Content-Type"] = "application/json";
    requestConfig.headers["x-version-code"] =
      this.tokenManager.getVersionCode();

    const device = url.includes("user/device/push");
    if (!device)
      requestConfig.headers["x-platform-code"] =
        this.tokenManager.getPlatformCode();

    const cFeed = url.includes("community/feed");
    if (cFeed) requestConfig.headers["x-accept-version"] = "v2";

    const isMarkRead = url.includes("mark_read");
    if (isMarkRead)
      requestConfig.headers["Content-Type"] =
        "application/x-www-form-urlencoded";

    // Add the access token to the request headers
    // if (this.tokenManager.getAccessToken && !initApi) {
    if (
      this.tokenManager.getAccessToken() &&
      this.tokenManager.getAccessToken().length
    ) {
      requestConfig.headers["Authorization"] =
        `Bearer ${this.tokenManager.getAccessToken()}`;
    }

    // Add the apiKey in initiate api to the request headers
    if (initApi && config.method === "POST") {
      if (this.tokenManager.getPlatformCode() === "rt") {
        if (this.xApiKey && this.xApiKey.length) {
          requestConfig.headers["x-api-key"] = this.xApiKey;
        } else {
          throw "Please provide the Api Key";
        }
      } else {
        requestConfig.headers["x-api-key"] = this.xApiKey;
      }
    }

    try {
      const response = await this.makeRequest<T>(url, requestConfig);
      return new LMResponse<T>(response.data as LMResponseType<T>, null, true);
    } catch (error) {
      if (error?.response && error?.response?.status === 401) {
        // Access token expired, refresh the token and retry the request
        if (url.includes("user/refresh")) {
          const { accessToken, refreshToken } =
            await this.lmSdkCallbacks.onRefreshTokenExpired();

          this.tokenManager.setAccessToken(accessToken);
          this.tokenManager.setRefreshToken(refreshToken);

          this.setAccessTokenInLocalStorage(accessToken);
          this.setRefreshTokenInLocalStorage(refreshToken);
        } else {
          await this.tokenManager.refreshAccessToken();
        }

        // Update the Authorization header with the new access token
        const updatedConfig = { ...requestConfig };
        updatedConfig.headers["Authorization"] =
          `Bearer ${this.tokenManager.getAccessToken()}`;

        // Retry the request
        return this.makeRequest<T>(url, updatedConfig)
          .then((refreshedResponse) => {
            return new LMResponse<T>(
              refreshedResponse.data as LMResponseType<T>,
              null,
              true
            );
          })
          .catch((error) => {
            console.log(error);
            if (error?.response && error?.response?.status >= 500) {
              return new LMResponse<T>(undefined, error.message, false);
            }
          });
      }

      if (error?.response && error?.response?.status >= 500) {
        return new LMResponse<T>(undefined, error.message, false);
      }
      throw error;
    }
  }
}

export default NetworkLibrary;
