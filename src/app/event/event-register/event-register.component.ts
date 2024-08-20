import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.css']
})
export class EventRegisterComponent implements OnInit
{
  currentStep = 1;
  eventName:string;
  registrationForm: FormGroup;
  paymentForm: FormGroup;
  consentForm: FormGroup;



  constructor(
    private fb: FormBuilder,
    private router:ActivatedRoute
  ) {
    this.registrationForm = this.fb.group({
      member1Name: ['',Validators.required ],
      member1Enrollment: ['',Validators.required ],
      member1Email: ['', [ Validators.required,Validators.email]],
      member1Mobile: ['', [Validators.required]],
      member2Name: ['',],
      member2Enrollment: ['', ],
      member2Email: ['', [Validators.email]],
      member2Mobile: ['', []]
    });


    this.consentForm = this.fb.group({
      consent: [false, Validators.requiredTrue]
    });
  }
  ngOnInit(): void {
    this.router.queryParams.subscribe(
      params=>{
        this.eventName=params['eventName'];
      }
    )
  }

 

  nextStep() {
    if (this.currentStep === 1) {
      console.log(this.registrationForm.value)
      this.currentStep = 2;
    } else if (this.currentStep === 2) {
      this.currentStep = 3;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit() {
    if (this.consentForm.valid) {
      alert('Registration Successful!');
      // Handle form submission logic
    }
  }
}

