import { Component } from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {ProfileCardComponent} from "../../components/profile-card/profile-card.component";
import {Observable} from "rxjs";
import {ProfileState} from "../../ngrx/profile/profile.state";
import {Store} from "@ngrx/store";
import * as ProfileActions from "../../ngrx/profile/profile.action";

@Component({
  selector: 'app-update',
  standalone: true,
    imports: [
        AsyncPipe,
        ProfileCardComponent
    ],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent {
  profile$!: Observable<ProfileState>;
  constructor( private store: Store<{ profile: ProfileState }>) {
    this.profile$ = store.select('profile');
    this.store.dispatch(ProfileActions.updateProfile());
  }

}
