import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

// tao service de lay date tu server
export class APIService {
  apiUrl = 'http://localhost:3000/profile/'

  constructor(private http: HttpClient) {}
  getProfile(){
    return this.http.get(`${this.apiUrl}`)
  }
  deleteProfile(id: any){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
  createProfile(data: any){
    return this.http.post(this.apiUrl, data)
  }
  updateProfile(data: any){
    return this.http.put(`${this.apiUrl}/${data.id}`, data)
  }
}
