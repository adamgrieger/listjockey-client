import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';
import { Store } from 'redux';
import { ActionsObservable, combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import { ListJockeyRoomService } from '../../../api/listjockey/services/room.service';
import { AppState } from '../../store/models';
import * as creators from '../action-creators';
import * as models from '../action-models';
import * as types from '../action-types';

@Injectable()
export class RoomEpics {

  constructor(private room: ListJockeyRoomService) { }

  public getCombinedEpics = () =>
    combineEpics(
      this.getRoom,
      this.getUsers,
      this.joinRoom,
      this.leaveRoom,
      this.addSong
    )

  public getRoom = (action$: ActionsObservable<models.RoomAction>, store: Store<AppState>) =>
    action$.ofType(types.GET_ROOM)
      .switchMap((action: models.GetRoomAction) =>
        this.room.getRoom(action.payload)
          .map(room => creators.getRoomSuccess(room))
          .catch(err => Observable.of(creators.getRoomFailure(err)))
      )

  public getUsers = (action$: ActionsObservable<models.GetUsersAction>, store: Store<AppState>) =>
    action$.ofType(types.GET_USERS)
      .switchMap((action: models.GetUsersAction) =>
        this.room.getUsers(action.payload)
          .map(users => creators.getUsersSuccess(users))
          .catch(err => Observable.of(creators.getUsersFailure(err)))
      )

  public joinRoom = (action$: ActionsObservable<models.JoinRoomAction>, store: Store<AppState>) =>
    action$.ofType(types.JOIN_ROOM)
      .switchMap((action: models.JoinRoomAction) =>
        this.room.joinRoom(action.payload.id, action.payload.username)
          .mapTo(creators.joinRoomSuccess())
          .catch(err => Observable.of(creators.joinRoomFailure(err)))
      )

  public leaveRoom = (
    action$: ActionsObservable<models.LeaveRoomAction>,
    store: Store<AppState>
  ) =>
    action$.ofType(types.LEAVE_ROOM)
      .switchMap((action: models.LeaveRoomAction) =>
        this.room.leaveRoom(action.payload.id, action.payload.username)
          .mapTo(creators.leaveRoomSuccess())
          .catch(err => Observable.of(creators.leaveRoomFailure(err)))
      )

  public addSong = (action$: ActionsObservable<models.AddSongAction>, store: Store<AppState>) =>
    action$.ofType(types.ADD_SONG)
      .switchMap((action: models.AddSongAction) =>
        this.room.addSong(action.payload, store.getState().room.current.id)
          .mapTo(creators.addSongSuccess())
          .catch(err => Observable.of(creators.addSongFailure(err)))
      )
}
