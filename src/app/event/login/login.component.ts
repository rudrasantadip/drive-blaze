import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SessionService } from 'src/app/global/services/session.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[MessageService]
})
export class LoginComponent {
  //structure to hold the  form data
  formData={
    userName:'',
    passWord:'',
    event:'Hack For Blaze 1.0'
  }


  constructor(
    private router: Router,
    private authService:AuthService,
    private sessionService:SessionService,
    private messageService:MessageService
  ) 
  {

  }

  goto(url: string) {
    this.router.navigate([url]);
  }

  //login function
  login()
  {
    this.authService.login(this.formData.userName,this.formData.passWord,'USER')
    .subscribe(
      (response)=>{
        if(response.message=='success' && response.status==true)
        {
          localStorage.setItem('username',this.formData.userName);
          this.sessionService.updateStatus(true);
          this.goto('/events/profile');
        }
        else{
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.message })
        }
      }     
    )
  }

  //function to validate the password

  validatePassword(password: string): boolean {
    if(password=='')
    {
      return false;
    }
    const minLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialCharacter;
  }
}
