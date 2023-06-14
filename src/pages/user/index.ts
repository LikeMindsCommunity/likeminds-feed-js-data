import { API } from "../../shared/constants/api.constant";
import {
  EditProfile,
  GetAllMembers,
  GetMemberChatroom,
  GetProfile,
  InitUser,
  Logout,
  MemberState,
  Search,
  USERTYPE,
} from "./types";
import httpInst from "src/core/services/base.service";

export class Member {
  initiateUser(initUser: InitUser): Promise<any> {
    const params = {
      is_guest: initUser?.isGuest,
      user_unique_id: initUser?.userUniqueId,
      user_name: initUser?.userName,
    };
    return httpInst
      .post(`${API.SDK_INITIATE}`, params)
      .then((resData: any) => {
        if (resData) {
          localStorage.setItem(
            "__community__",
            JSON.stringify(resData.data.data.community)
          );
          localStorage.setItem(
            "__likeminds_user__",
            JSON.stringify(resData.data.data.user)
          );
          localStorage.setItem(
            "__access_token_LTM__",
            resData.data.data.access_token
          );
          localStorage.setItem(
            "__refresh_token_RTM__",
            resData.data.data.refresh_token
          );
        }
        return resData.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logout(logout: Logout): Promise<any> {
    const params = {
      refresh_token: logout.refreshToken,
    };
    localStorage.clear();
    return httpInst.post(`${API.USER_LOGOUT}`, params);
  }

  getMemberState(memberState: MemberState): Promise<any> {
    return httpInst.get(
      `${API.COMMUNITY_MEMBER_STATE}?member_id=${memberState.memberId}`
    );
  }

  getProfile(getProfile: GetProfile): Promise<any> {
    return httpInst.get(
      `${API.COMMUNITY_MEMBER_PROFILE}?user_id=${getProfile.userId}`
    );
  }

  getMemberChatroom(getMemberChatroom: GetMemberChatroom): Promise<any> {
    return httpInst.get(
      `${API.COMMUNITY_MEMBER_CHATROOM}?user_id=${getMemberChatroom.userId}&state=${getMemberChatroom.state}&page=${getMemberChatroom.page}`
    );
  }

  getQuestions(): Promise<any> {
    return httpInst.get(`${API.COMMUNITY_QUESTIONS}`);
  }

  editProfile(editProfile: EditProfile): Promise<any> {
    const params = {
      user_name: editProfile.userName,
      user_unique_id: editProfile.userUniqueId,
      image_url: editProfile.imageUrl,
    };
    return httpInst.put(`${API.COMMUNITY_MEMBER_PROFILE}`, params);
  }

  searchMembers(search: Search): Promise<any> {
    return httpInst.get(
      `${API.COMMUNITY_MEMBER_SEARCH}?search=${search.search}&search_type=${search.search_type}&page=${search.page}&page_size=${search.page_size}`
    );
  }

  allMembers(userType: USERTYPE): Promise<any> {
    return httpInst.get(
      `${API.COMMUNITY_MEMBERS}?community_id=${userType.community_id}&chatroom_id=${userType.chatroom_id}&page=${userType.page}`
    );
  }

  // getAllMembers(members: Members): Promise<any> {
  //     return httpInst.get(`${API.COMMUNITY_MEMBERS}?page=${members.page}`);
  // }

  getAllMembers(getAllMembers: GetAllMembers): Promise<any> {
    if (getAllMembers.memberState) {
      return httpInst.get(
        `${API.COMMUNITY_MEMBERS}?chatroom_id=${getAllMembers.chatroomId}&member_state=${getAllMembers.memberState}&page=${getAllMembers.page}`
      );
    } else {
      return httpInst.get(
        `${API.COMMUNITY_MEMBERS}?chatroom_id=${getAllMembers.chatroomId}&page=${getAllMembers.page}`
      );
    }
  }

  dmAllMembers(userType: USERTYPE): Promise<any> {
    return httpInst.get(
      `${API.DM_ALL_MEMBERS}?community_id=${userType.community_id}&member_state=${userType.member_state}&page=${userType.page}`
    );
  }
}
