import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {APIService} from "../../api.service";
import {catchError, map, mergeMap, of} from "rxjs";
import * as ProfileActions from "./profile.action";

@Injectable()
export class ProfileEffects {
  constructor(private actions$: Actions,
              private apiService: APIService) {
  }
  getAllProfiles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileActions.getAllProfiles),
      mergeMap(() => {
        return this.apiService.getProfile().pipe(
          map(profiles => ProfileActions.getAllProfilesSuccess({profiles: profiles})),
          catchError((error => of(ProfileActions.getAllProfilesFailure({error: error})))
          )
        )
      })
  )
})
  deleteProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileActions.deleteProfile),
      mergeMap((action) => {
        return this.apiService.deleteProfile(action.data).pipe(
          map(() => ProfileActions.deleteProfileSuccess({id: action.data})),
          catchError((error => of(ProfileActions.deleteProfileFailure({error: error})))
          )
        )
      })
  )
  })

  createProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileActions.createProfile),
      mergeMap((action) => {
        return this.apiService.createProfile(action.data).pipe(
          map(() => ProfileActions.createProfileSuccess({data: action.data})),
          catchError((error => of(ProfileActions.createProfileFailure({error: error})))
          )
        )
      })
  )
  })

  updateProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileActions.updateProfile),
      mergeMap((action) => {
        return this.apiService.updateProfile(action.data).pipe(
          map(() => ProfileActions.updateProfileSuccess({data: action.data})),
          catchError((error => of(ProfileActions.updateProfileFailure({error: error})))
          )
        )
      })
  )
  })
}







