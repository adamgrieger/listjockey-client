import { Room } from '../../api/listjockey/models/rooms.models';
import { Song } from '../../api/listjockey/models/songs.models';
import { User } from '../../api/listjockey/models/users.models';
import * as types from './action-types';

export type RoomAction =
  | GetRoomAction
  | GetRoomFailureAction
  | GetRoomSuccessAction
  | GetUsersAction
  | GetUsersFailureAction
  | GetUsersSuccessAction
  | AddUserAction
  | RemoveUserAction
  | JoinRoomAction
  | JoinRoomFailureAction
  | JoinRoomSuccessAction
  | LeaveRoomAction
  | LeaveRoomFailureAction
  | LeaveRoomSuccessAction
  | AddSongAction
  | AddSongFailureAction
  | AddSongSuccessAction
  | UpdateQueueAction
  | NextSongAction
  | NextSongFailureAction
  | NextSongSuccessAction
  ;

// +----------+
// | Get Room |
// +----------+

export interface GetRoomAction {
  type: typeof types.GET_ROOM;
  payload: number;
}

export interface GetRoomFailureAction {
  type: typeof types.GET_ROOM_FAILURE;
  payload: Error;
}

export interface GetRoomSuccessAction {
  type: typeof types.GET_ROOM_SUCCESS;
  payload: Room;
}

// +-----------+
// | Get Users |
// +-----------+

export interface GetUsersAction {
  type: typeof types.GET_USERS;
  payload: number;
}

export interface GetUsersFailureAction {
  type: typeof types.GET_USERS_FAILURE;
  payload: Error;
}

export interface GetUsersSuccessAction {
  type: typeof types.GET_USERS_SUCCESS;
  payload: User[];
}

// +----------+
// | Add User |
// +----------+

export interface AddUserAction {
  type: typeof types.ADD_USER;
  payload: User;
}

// +-------------+
// | Remove User |
// +-------------+

export interface RemoveUserAction {
  type: typeof types.REMOVE_USER;
  payload: User;
}

// +-----------+
// | Join Room |
// +-----------+

export interface JoinRoomAction {
  type: typeof types.JOIN_ROOM;
  payload: {
    id: number;
    username: string;
  };
}

export interface JoinRoomFailureAction {
  type: typeof types.JOIN_ROOM_FAILURE;
  payload: Error;
}

export interface JoinRoomSuccessAction {
  type: typeof types.JOIN_ROOM_SUCCESS;
}

// +------------+
// | Leave Room |
// +------------+

export interface LeaveRoomAction {
  type: typeof types.LEAVE_ROOM;
  payload: {
    id: number;
    username: string;
  };
}

export interface LeaveRoomFailureAction {
  type: typeof types.LEAVE_ROOM_FAILURE;
  payload: Error;
}

export interface LeaveRoomSuccessAction {
  type: typeof types.LEAVE_ROOM_SUCCESS;
}

// +----------+
// | Add Song |
// +----------+

export interface AddSongAction {
  type: typeof types.ADD_SONG;
  payload: Song;
}

export interface AddSongFailureAction {
  type: typeof types.ADD_SONG_FAILURE;
  payload: Error;
}

export interface AddSongSuccessAction {
  type: typeof types.ADD_SONG_SUCCESS;
}

// +--------------+
// | Update Queue |
// +--------------+

export interface UpdateQueueAction {
  type: typeof types.UPDATE_QUEUE;
  payload: Song;
}

// +-----------+
// | Next Song |
// +-----------+

export interface NextSongAction {
  type: typeof types.NEXT_SONG;
}

export interface NextSongFailureAction {
  type: typeof types.NEXT_SONG_FAILURE;
  payload: Error;
}

export interface NextSongSuccessAction {
  type: typeof types.NEXT_SONG_SUCCESS;
}
