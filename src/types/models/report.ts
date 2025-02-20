import { User } from "./member";

// export interface Report {
//     communityId: number;
//     communityName: string;
//     entityId: string;
//     id: number;
//     isClosed: boolean;
//     reportedBy: User;
//     reportedOn: number; 
//     type: number;
//     userReported: User;
//   }

export interface Tag{
    id: number;
    name: string;
  }
  
  export interface Report{
    accusedUser : User;
    entityId: string;
    id: number;
    isClosed : boolean;
    reason : string;
    reportedByUser : User;
    reportedOn: number;
    type: string;
    tag : Tag;
  }
  