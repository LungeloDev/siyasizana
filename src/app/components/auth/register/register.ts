import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: '../login/login.css',
})
export class Register {
  registerForm: FormGroup;

  showPassword = false;
  showConfirmPassword = false;
  isLoading = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        surname: ['', Validators.required],
        customerNumber: ['', Validators.required],

        mobile: [
          '',
          [
            Validators.required,
            Validators.pattern(/^(\+27|0)[6-8][0-9]{8}$/),
          ],
        ],

        email: ['', [Validators.required, Validators.email]],

        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
          ],
        ],

        confirmPassword: ['', Validators.required],

        termsAccepted: [
          false,
          Validators.requiredTrue,
        ],
      },
      {
        validators: this.passwordMatchValidator,
      },
    );
  }

  passwordMatchValidator(
    control: AbstractControl,
  ): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmation =
      control.get('confirmPassword')?.value;

    return password === confirmation
      ? null
      : { passwordMismatch: true };
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword =
      !this.showConfirmPassword;
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    // TODO:
    // authService.register(this.registerForm.getRawValue())

    console.log(
      'Registration:',
      this.registerForm.getRawValue(),
    );

    setTimeout(() => {
      this.isLoading = false;
    }, 800);
  }
}