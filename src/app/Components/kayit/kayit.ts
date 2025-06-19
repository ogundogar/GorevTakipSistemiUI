import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../giris/giris';
import { Router } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogContent } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-kayit',
  imports: [ReactiveFormsModule, MatButtonModule,MatDialogContent,MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule,FormsModule],
  templateUrl: './kayit.html',
  styleUrl: './kayit.css'
})
export class Kayit {
  epostaFormControl = new FormControl('', [Validators.required, Validators.email]);
  sifreFormControl = new FormControl('', [Validators.required]);
  sifreDogrulamaFormControl= new FormControl('', [Validators.required]);
  kullaniciAdiFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router) {}

  kayitEkraninaGit() {
    this.router.navigate(['/giris']);
  }

}
