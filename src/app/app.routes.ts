import { Routes } from '@angular/router';
import {ListProfileComponent} from "./page/list-profile/list-profile.component";
import {DeleteComponent} from "./page/delete/delete.component";
import {UpdateComponent} from "./page/update/update.component";
import {CreateComponent} from "./page/create/create.component";
export const routes: Routes = [
  {
    path: "profile",
    component: ListProfileComponent
  },

  {
    path: "delete",
    component: DeleteComponent
  },
  {
    path: "update",
    component: UpdateComponent
  },
  {
    path : "create",
    component: CreateComponent
  }


];
