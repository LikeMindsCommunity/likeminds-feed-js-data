export enum FilterType {
  POST = "post",
  COMMENT = "comment",
  REPLY = "reply",
  PENDING_POST = "pending_post",
}

export enum LMFeedReportStatus {
  EDIT_MEMBER_PERMISSION = 0,
  PENDING_POST_APPROVED = 7,
  PENDING_POST_REJECTED = 8,
  POST_APPROVED = 9,
  POST_REJECTED = 10,
  COMMENT_APPROVED = 11,
  COMMENT_REJECTED = 12,
}

export enum ReportEntityType {
  CHATROOM = "chatroom",
  MEMBER = "member",
  CONVERSATION = "conversation",
  POST = "post",
  COMMENT = "comment",
  REPLY = "reply"
}
