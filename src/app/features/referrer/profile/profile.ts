import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  profileForm: FormGroup;

  isEditing = false;
  isSaving = false;
  saved = false;
  copied = false;

  referralCode = 'NOMSA24';

  memberSince = 'March 2024';
  customerNumber = 'THU-2400318';

  qualifyingProducts = [
    'Life Cover',
    'Retirement Annuity',
  ];

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: [
        { value: 'Nomsa', disabled: true },
        Validators.required,
      ],

      surname: [
        { value: 'Dlamini', disabled: true },
        Validators.required,
      ],

      mobile: [
        {
          value: '082 456 7812',
          disabled: true,
        },
        Validators.required,
      ],

      email: [
        {
          value: 'nomsa.dlamini@example.com',
          disabled: true,
        },
        [
          Validators.required,
          Validators.email,
        ],
      ],
    });
  }

  enableEditing(): void {
    this.isEditing = true;
    this.saved = false;

    this.profileForm.get('mobile')?.enable();
    this.profileForm.get('email')?.enable();
  }

  cancelEditing(): void {
    this.isEditing = false;

    this.profileForm.patchValue({
      mobile: '082 456 7812',
      email: 'nomsa.dlamini@example.com',
    });

    this.profileForm.disable();
  }

  saveProfile(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;

    const profile = this.profileForm.getRawValue();

    console.log('Updated profile:', profile);

    setTimeout(() => {
      this.isSaving = false;
      this.isEditing = false;
      this.saved = true;

      this.profileForm.disable();

      setTimeout(() => {
        this.saved = false;
      }, 3000);
    }, 800);
  }

  async copyReferralCode(): Promise<void> {
    try {
      await navigator.clipboard.writeText(
        this.referralCode
      );

      this.copied = true;

      setTimeout(() => {
        this.copied = false;
      }, 2000);
    } catch (error) {
      console.error(
        'Unable to copy referral code:',
        error
      );
    }
  }
}