export interface GetNotificationCountResponse {
  success: boolean;
  data?: {
    count: number;
  };
  errorMessage?: string | any;
}
