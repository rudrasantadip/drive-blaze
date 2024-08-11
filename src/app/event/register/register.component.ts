import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {


value: any;
constructor(private router:Router) {
  
}
 goto(url:string)
{
  this.router.navigate([url]);
}

}
