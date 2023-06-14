type Config = {
    xApiKey: string;
    xPlatformCode?: any;
    xVersionCode?: any;
};
export abstract class Base {
    private apiKey: string;
    private xPlatformCode: string;
    private xVersionCode: string;

    constructor(congif: Config) {
        this.apiKey = congif.xApiKey;
        this.xPlatformCode = congif.xPlatformCode;
        this.xVersionCode = congif.xVersionCode;

        const xConf = {
            xA: this.apiKey,
            xP: this.xPlatformCode,
            xV: this.xVersionCode,
        };

        localStorage.setItem('__config__', JSON.stringify(xConf));
        // console.log('xConf =>', xConf);
        // console.log('xPlatformCode ', this.xPlatformCode);
        // // console.log('xVersionCode ', this.xVersionCode);
    }

    // protected invoke<T>(endpoint: string, options?: RequestInit): Promise<T> {
    //     let headers: any;
    //     headers = {
    //         'Content-Type': 'application/json',
    //         'x-platform-code': this.xPlatformCode,
    //         'x-version-code': this.xVersionCode,
    //     };

    //     const initApi = endpoint.includes('initiate');
    //     const isRefreshRequest = endpoint.includes('refresh');
    //     const cFeed = endpoint.includes('community/feed');

    //     let url = `${this.baseUrl}${endpoint}`;

    //     if (initApi) headers['x-api-key'] = this.apiKey;

    //     if (cFeed) headers['x-accept-version'] = 'v2';
    //     if (!initApi && !isRefreshRequest) headers['Authorization'] = `Bearer ${localStorage.getItem('__access_token_LTM__')}`;

    //     const isMarkRead = endpoint.includes('mark_read');
    //     if (isMarkRead) headers['Content-Type'] = 'application/x-www-form-urlencoded';

    //     const config = { ...options, headers };

    //     // Retry api call after refresh token expired.
    //     function tryRequest(url: any, config: any) {
    //         return fetch(url, config)
    //             .then((response) => response.json())
    //             .then((response) => {
    //                 return response.data;
    //             })
    //             .catch((err) => console.log(err));
    //     }

    //     // Return response to client
    //     return fetch(url, config)
    //         .then((response) => response.json())
    //         .then((response: any) => {
    //             // Get Refresh token
    //             if (!response.success && response.error_message === 'Invalid LTM!') {
    //                 let options = {
    //                     method: 'POST',
    //                     headers: {
    //                         'Content-Type': 'application/json',
    //                         Authorization: `Bearer ${localStorage.getItem('__refresh_token_RTM__')}`,
    //                     },
    //                 };
    //                 const refreshData = fetch(`${this.baseUrl}${API.REFRESH_TOKEN_API}`, options);
    //                 refreshData
    //                     .then((response) => response.json())
    //                     .then((resData: any) => {
    //                         localStorage.setItem('__access_token_LTM__', resData.data.access_token);
    //                         headers['Authorization'] = `Bearer ${resData.data.access_token}`;
    //                         localStorage.setItem('__refresh_token_RTM__', resData.data.refresh_token);
    //                         tryRequest(url, config);
    //                     });
    //             } else if (!response.success && response.error_message === 'Invalid RTM!') localStorage.clear();
    //             else return response?.data;
    //         })
    //         .catch((err) => {
    //             throw new Error(err?.statusText);
    //         });
    // }
}
