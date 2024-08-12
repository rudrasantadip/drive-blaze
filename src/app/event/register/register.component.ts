import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {


  formData={
    userName:'',
    passWord:'',
    event:'Hack For Blaze 1.0'
  }

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


constructor(private router:Router) {
  
}
 goto(url:string)
{
  this.router.navigate([url]);
}

register()
{
  
}

}
