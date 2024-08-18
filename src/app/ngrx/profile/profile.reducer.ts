import {ProfileState} from "./profile.state";
import * as ProfileActions from './profile.action';
import {createReducer, on} from "@ngrx/store";

const initialState: ProfileState = {
  profiles: [],
  profile: null,
  isloading: false,
  error: '',
}

export const profileReducer = createReducer(
  initialState,
  on(ProfileActions.getAllProfiles, (state) => {
    return {
      ...state,
      isLoading: true,
      error: ','
    }
    }),

  on(ProfileActions.getAllProfilesSuccess, (state, {profiles}) => {
    return {
      ...state,
      profiles: profiles,
      isloading: false,
    }
    }),

  on(ProfileActions.getAllProfilesFailure, (state, error) => {
    return {
      ...state,
      isloading: false,
      error: error.error,
    }
  })
  )
