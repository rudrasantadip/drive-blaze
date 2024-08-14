import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService 
{

private apiUrl:string='http://localhost:8080/teams'  
constructor(private http:HttpClient) { }

createTeam(teamName:string,memberName:string,userName:string):Observable<any>
{
  let apiParams = new HttpParams()
  .set('teamname',teamName)
  .set('username',userName)
  .set('membername',memberName);
  return this.http.post(`${this.apiUrl}/create`,null,{params:apiParams})
  .pipe(catchError(this.handleError));
}



joinTeam(teamCode:string,userName:string,memberName:string):Observable<any>
{
  let apiParams = new HttpParams()
  .set('teamcode',teamCode)
  .set('username',userName)
  .set('membername',memberName);
  return this.http.post(`${this.apiUrl}/join`,null,{params:apiParams})
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
    errorStatus=error.status
    errorMessage = `Server-side error: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(() => new Error(error.error));
}


}
