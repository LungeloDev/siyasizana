import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './new.html',
  styleUrl: './new.css',
})
export class New {
  referralForm: FormGroup;

  isSubmitting = false;
  submitted = false;
  referralNumber = '';

  products = [
    'Life Cover',
    'Pension Preservation',
    'Retirement Annuity',
    'Retrenchment Planning',
    'Last Will and Testament',
    'Other',
  ];

  constructor(private fb: FormBuilder) {
    this.referralForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],

      surname: ['', [Validators.required, Validators.minLength(2)]],

      mobile: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(\+27|0)[6-8][0-9]{8}$/),
        ],
      ],

      email: [
        '',
        [
          Validators.email,
        ],
      ],

      product: ['', Validators.required],

      consentConfirmed: [
        false,
        Validators.requiredTrue,
      ],
    });
  }

  get firstName() {
    return this.referralForm.get('firstName');
  }

  get surname() {
    return this.referralForm.get('surname');
  }

  get mobile() {
    return this.referralForm.get('mobile');
  }

  get email() {
    return this.referralForm.get('email');
  }

  get product() {
    return this.referralForm.get('product');
  }

  get consentConfirmed() {
    return this.referralForm.get('consentConfirmed');
  }

  onSubmit(): void {
    if (this.referralForm.invalid) {
      this.referralForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const referral = {
      ...this.referralForm.value,

      // Temporary mock referrer
      referrerId: 'REFERRER-001',
      referrerName: 'Nomsa Dlamini',

      dateReferred: new Date(),
      status: 'Submitted',
    };

    console.log('New referral:', referral);

    /*
     * Temporary simulation.
     *
     * Later this is where we will call:
     *
     * this.referralService.createReferral(referral)
     *
     * Firebase/API will then generate the actual
     * referral record and reference number.
     */

    setTimeout(() => {
      this.referralNumber = this.generateReferralNumber();

      this.isSubmitting = false;
      this.submitted = true;

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 900);
  }

  createAnotherReferral(): void {
    this.submitted = false;
    this.referralNumber = '';

    this.referralForm.reset({
      firstName: '',
      surname: '',
      mobile: '',
      email: '',
      product: '',
      consentConfirmed: false,
    });
  }

  private generateReferralNumber(): string {
    const randomNumber = Math.floor(
      1000 + Math.random() * 9000
    );

    return `REF-${randomNumber}`;
  }
}