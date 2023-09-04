import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Login Angular';

  public form!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.createForm();
  }

  public submit() {
    if (this.form.invalid) {
      Object.values(this.form.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    if (this.form.valid) {
      console.log('Formulario valido');
    }
  }

  private createForm(): FormGroup {
    return this.fb.group({
      usu: ['', Validators.required],
      pass: ['', Validators.required],
    });
  }

  public get validForm():any{
    return this.form.controls;
  }




}
