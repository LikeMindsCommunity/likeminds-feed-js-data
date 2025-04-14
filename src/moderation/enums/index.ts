export enum FilterType {
  POST = "post",
  COMMENT = "comment",
  REPLY = "reply",
  PENDING_POST = "pending_post",
}

// export enum LMFeedReportStatus {
//   EDIT_MEMBER_PERMISSION = 0,
//   PENDING_POST_APPROVED = 7,
//   PENDING_POST_REJECTED = 8,
//   POST_APPROVED = 9,
//   POST_REJECTED = 10,
//   COMMENT_APPROVED = 11,
//   COMMENT_REJECTED = 12,
// }
export enum LMFeedReportStatus {
  EDIT_MEMBER_PERMISSION = "EDIT_MEMBER_PERMISSION",
  PENDING_POST_APPROVED = "PENDING_POST_APPROVED",
  PENDING_POST_REJECTED = "PENDING_POST_REJECTED",
  POST_APPROVED = "POST_APPROVED",
  POST_REJECTED = "POST_REJECTED",
  COMMENT_APPROVED = "COMMENT_APPROVED",
  COMMENT_REJECTED = "COMMENT_REJECTED",
}

export enum ReportEntityType {
  CHATROOM = "chatroom",
  MEMBER = "member",
  CONVERSATION = "conversation",
  POST = "post",
  COMMENT = "comment",
  REPLY = "reply",
}
