import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {APIService} from "./api.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'API';
  profileData: any; // khai bao bien de chua du lieu tu server
  // inject APIService
  constructor(private profileService: APIService) {
    this.profileService.getProfile().subscribe((data) => {
     //binding data to the view
      this.profileData = data; // du lieu tu sever luc nay = data
      console.log(this.profileData);
    });
    this.profileData.deleteProfile(1).subscribe((data: Object) => {
      this.profileData = data;
      console.log(data);
    });
    this.profileData.createProfile({name: 'Nguyen Van A', age: 20}).subscribe((data: Object) => {
      this.profileData = data;
      console.log(data);
    });
    this.profileData.updateProfile({id: 1, name: 'Nguyen Van B', age: 21}).subscribe((data: Object) => {
      this.profileData = data;
      console.log(data);
    });


  }
}
