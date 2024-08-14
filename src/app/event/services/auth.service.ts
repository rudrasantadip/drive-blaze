import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl:string='http://localhost:8080/auth';

  constructor(private http:HttpClient) 
  {

  }

  // login function
  login(username:string,password:string,role:string):Observable<any>
  {
    //headers
      const headers = new HttpHeaders(
        {
          'Authorization':btoa(`${username}:${password}:${role}`), //encoding to base64,
          'Content-Type':'text/plain'
        }
      )
      return this.http.get<any>(`${this.apiUrl}/login`,{headers})
      .pipe(catchError(this.handleError));
  }

  //function to register
  register(username:string,password:string,role:string):Observable<any>
  {
    return this.http.post<any>(`${this.apiUrl}/register`,
      {
        'username':username,
        'password':password,
         'role':'role'
      })
      .pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    let errorStatus:any=null;
    let errorResponse:any=null;
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side error
      errorResponse=error.error;
      errorStatus=error.status
      errorMessage = `Server-side error: ${error.status}\nMessage: ${error.message}`;

      alert(errorResponse.message)
    }
    return throwError(() => new Error(error.message));
  }

 
}
