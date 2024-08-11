import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  value: any;
  constructor(private router: Router) {}
  goto(url: string) {
    this.router.navigate([url]);
  }

  //login function
  login()
  {
    this.router.navigate(['/events/profile']);
  }
}
