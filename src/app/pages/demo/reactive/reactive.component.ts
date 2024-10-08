import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.scss'
})
export class ReactiveComponent {

  fb = inject(FormBuilder);

  // forms = new FormGroup({
  //   fName: new FormControl(''),
  //   gender: new FormControl('')
  // })

  forms = this.fb.group({
    fName: ['', Validators.required],
    gender: ['', Validators.required]
  })

  submit() {
    console.log(this.forms.value);
    console.log(this.forms.valid);
  }

  reset() {
    // this.forms.controls.fName.setValue('');
    // this.forms.controls.gender.setValue('');

    this.forms.setValue({
      fName: '',
      gender: ''
    })
  }

}
