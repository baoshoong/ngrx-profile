import { Component } from '@angular/core';
import {ProfileCardComponent} from "../../components/profile-card/profile-card.component";
import {ProfileState} from "../../ngrx/profile/profile.state";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import * as ProfileActions from "../../ngrx/profile/profile.action";

@Component({
  selector: 'app-list-profile',
  standalone: true,
  imports: [
    ProfileCardComponent,
    AsyncPipe
  ],
  templateUrl: './list-profile.component.html',
  styleUrl: './list-profile.component.scss'
})
export class ListProfileComponent {
  profile$!: Observable<ProfileState>;
  constructor(private store: Store<{ profile: ProfileState }>) {
    this.profile$ = store.select('profile');
    this.store.dispatch(ProfileActions.getAllProfiles());
  }



}
