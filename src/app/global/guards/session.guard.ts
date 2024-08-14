import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../services/session.service';

export const sessionGuard: CanActivateFn = (route, state) => {

  let sessionService=inject(SessionService);
  const router=inject(Router);
  let loginStatus:boolean=false;

  sessionService.currentStatus.subscribe(
    (status)=>{
      loginStatus=status;
    }
  )

  if(loginStatus)
  {
    return true;
  }
  else{
    router.navigate(['/events/login'])
    return false;
  }
};
