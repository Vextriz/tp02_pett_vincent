import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {
  clientForm: FormGroup;
  submittedData: any = null; 

  constructor(private fb: FormBuilder) {
    this.clientForm = this.fb.group({
      civilite: ['', Validators.required],
      nom: ['', [Validators.required, Validators.pattern("[A-Za-zÀ-ÿ\\s'-]+")]],
      prenom: ['', [Validators.required, Validators.pattern("[A-Za-zÀ-ÿ\\s'-]+")]],
      adresse: ['', Validators.required],
      cp: ['', [Validators.required, Validators.pattern("\\d{5}")]],
      ville: ['', [Validators.required, Validators.pattern("[A-Za-zÀ-ÿ\\s'-]+")]],
      tel: ['', [Validators.required, Validators.pattern("\\d{10}")]],
      email: ['', [Validators.required, Validators.email]],
      login: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm_password: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirm_password')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.clientForm.valid) {
      this.submittedData = this.clientForm.value;

      window.alert('Formulaire soumis avec succès !');
    }
  }
}
