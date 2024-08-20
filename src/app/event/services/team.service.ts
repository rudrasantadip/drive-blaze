import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Team } from 'src/app/dtos/teamsDto';

@Injectable({
  providedIn: 'root'
})
export class TeamService 
{

private apiUrl:string='http://localhost:8080/teams' ;
private memberUrl:string='http://localhost:8080/members';
constructor(private http:HttpClient) { }

//function to create a team
public createTeam(teamName:string,memberName:string,userName:string):Observable<any>
{
  let apiParams = new HttpParams()
  .set('teamname',teamName)
  .set('username',userName)
  .set('membername',memberName);
  return this.http.post(`${this.apiUrl}/create`,null,{params:apiParams})
  .pipe(catchError(this.handleError));
}


//function to join a team
public joinTeam(teamCode:string,userName:string,memberName:string):Observable<any>
{
  let apiParams = new HttpParams()
  .set('teamcode',teamCode)
  .set('username',userName)
  .set('membername',memberName);
  return this.http.post(`${this.apiUrl}/join`,null,{params:apiParams})
}

//function to checkk if a team has a member
public hasaTeam(userName:string):Observable<any>
{
  let apiParams = new HttpParams()
  .set('username',userName)
  return this.http.get(`${this.apiUrl}/exist`,{params:apiParams});
}


//function to get team info by teamcode
public getTeamByCode(teamCode:string):Observable<Team>
{
  let apiParams = new HttpParams()
  .set('teamcode',teamCode);
  return this.http.get<Team>(`${this.apiUrl}/info`,{params:apiParams});
}


//function to submit application
public submitApplication(formData:FormData):Observable<any>
{
  return this.http.post(`${this.apiUrl}/submit`,formData);
}


public removeMember(username:string,toremove:string,teamcode:string):Observable<any>
{
  let apiParams = new HttpParams()
  .set('username',username)
  .set('toremove',toremove)
  .set('teamcode',teamcode)
  return this.http.delete(`${this.apiUrl}/remove`,{params:apiParams});
}

public getMemberDesignation(username:string):Observable<any>
{
  let apiParams = new HttpParams()
  .set('username',username);
  return this.http.get(`${this.memberUrl}/designation`,{params:apiParams})
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
  alert('You are already part of a team');
  return throwError(() => new Error(error.error));
}


}
