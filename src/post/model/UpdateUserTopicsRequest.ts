export interface UpdateUserTopicsRequest {
  uuid: string;
  topicsIds: Record<string, boolean>;
}
