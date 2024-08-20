import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  constructor(private http:HttpClient) 
  {

   }

  private apiUrl='http://localhost:8080/otp'

  // function to generate an otp
  generateOtp(credentials:any):Observable<any>
  {
    return this.http.post(`${this.apiUrl}/send`,credentials);
  }

  verifyOtp(credentials:any):Observable<any>
  {
    let params = new HttpParams()
    .set('mobile',credentials.mobile)
    .set('otp',credentials.otp)
    .set('username',credentials.username);

    return this.http.get(`${this.apiUrl}/verify`,{params:params});
  }

  isVerified(credentials:any):Observable<any>
  {
    let params = new HttpParams()
    .set('mobile',credentials.mobile)
    .set('username',credentials.username);

    return this.http.get(`${this.apiUrl}/isverified`,{params:params});

  }
}
