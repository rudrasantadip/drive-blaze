import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  //structure to hold the  form data
  formData={
    userName:'',
    passWord:'',
    event:'Hack For Blaze 1.0'
  }


  constructor(private router: Router) {}
  goto(url: string) {
    this.router.navigate([url]);
  }

  //login function
  login()
  {
    console.log(this.formData);
    // this.router.navigate(['/events/profile']);
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
