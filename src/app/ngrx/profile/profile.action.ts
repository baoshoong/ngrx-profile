import {createAction, props} from "@ngrx/store";
import {Profile} from "../../models/profile.model";

export const getAllProfiles = createAction(
  '[Profile] Get All Profiles');

export const getAllProfilesSuccess = createAction(
  '[Profile] Get All Profiles Success'
  , props<{ profiles: Profile[] }>());

export const getAllProfilesFailure = createAction(
  '[Profile] Get All Profiles Failure',
  props<{ error: string }>());


// xoa profile
export const deleteProfile = createAction(
  '[Profile] Delete Profile',);

export const deleteProfileSuccess = createAction(
  '[Profile] Delete Profile Success',
  props<{ id: string }>());

export const deleteProfileFailure = createAction(
  '[Profile] Delete Profile Failure',
  props<{ error: string }>());

// tao profile
export const createProfile = createAction(
  '[Profile] Create Profile',
  props<{ data: Profile }>());

export const createProfileSuccess = createAction(
  '[Profile] Create Profile Success',
  props<{ data: Profile }>());

export const createProfileFailure = createAction(
  '[Profile] Create Profile Failure',
  props<{ error: string }>());

// update profile
export const updateProfile = createAction(
  '[Profile] Update Profile',
  props<{ data: Profile }>());
export const updateProfileSuccess = createAction(
  '[Profile] Update Profile Success',
  props<{ data: Profile }>());
export const updateProfileFailure = createAction(
  '[Profile] Update Profile Failure',
  props<{ error: string }>());

