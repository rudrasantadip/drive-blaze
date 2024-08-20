import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MessageService } from 'primeng/api';
import { OtpService } from '../services/otp.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService],
})
export class RegisterComponent {
  //json to handle form data
  otp: string[] = ['', '', '', '', '', ''];
  @ViewChild('validateButton') validateButton!: ElementRef<HTMLButtonElement>;

  moveToNext(event: KeyboardEvent, index: number) {
    const input = event.target as HTMLInputElement;
    if (input.value.length === 1 && index < 6) {
      const nextInput = document.querySelector(
        `.otp-input:nth-child(${index + 1})`
      ) as HTMLInputElement;
      nextInput.focus();
    }
  }

  moveToPrev(event: KeyboardEvent, index: number) {
    const input = event.target as HTMLInputElement;
    if (input.value.length === 1 && index < 6 && index >= 1) {
      const nextInput = document.querySelector(
        `.otp-input:nth-child(${index - 1})`
      ) as HTMLInputElement;
      nextInput.focus();
    }
  }

  //variable to set whether email is verified or not...
  isEmailVerified: boolean = false;

  //varaiable to set whether mobile is verified or not...
  isMobileVerified: boolean = false;
  showOtp: boolean = false; //variable to show otp section
  enableResend: boolean = false; //enables/disables the reset button
  enableVerify: boolean = true; //enables/disables the verify button
  resendText: string = 'Resend After'; //text to be shown for resend option
  countdown: number = 90; //time after which reset is enabled

  formData = {
    userName: '',
    passWord: '',
    mobile: '',
    event: 'Hack For Blaze 1.0',
  };

  // VALIDATION FUNCTIONS

  //function to validate password
  validatePassword(password: string): boolean {
    if (password == '') {
      return false;
    }
    const minLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return (
      minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialCharacter
    );
  }

  verifyEmail() {
    this.isEmailVerified = true;
  }

  //constructor
  constructor(
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService,
    private otpService: OtpService
  ) {}
  goto(url: string) {
    this.router.navigate([url]);
  }

  // Function to register an user
  register() {
    this.authService
      .register(
        this.formData.userName,
        this.formData.passWord,
        this.formData.mobile,
        'USER'
      )
      .subscribe((response) => {
        if (response.message == 'success') {
          this.goto('/events/login');
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: response.message,
          });
        }
      });
  }
}
