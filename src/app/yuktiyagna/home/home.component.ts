import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      teamName: ['', Validators.required],
      members: this.fb.array([
        this.createMemberFormGroup(),
        this.createMemberFormGroup()
      ])
    });
  }

  createMemberFormGroup(): FormGroup {
    return this.fb.group({
      fullName: ['', Validators.required],
      collegeName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      enrollmentNumber: ['', Validators.required]
    });
  }

  get members(): FormArray {
    return this.registrationForm.get('members') as FormArray;
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      // Handle form submission logic here
    }
  }
}
