import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { ContactService } from '../contact/contact.service';

@Component({
  selector: 'app-job-offer-form',
  standalone: true,
  imports: [CommonModule, MatDividerModule, TranslateModule, ReactiveFormsModule, FlexLayoutModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './job-offer-form.component.html',
  styleUrls: ['./job-offer-form.component.scss']
})
export class JobOfferFormComponent implements OnInit {

  jobForm = new FormGroup({
    jobTitle: new FormControl(''),
    jobDescription: new FormControl(''),
    employerName: new FormControl(''),
    employerDescription: new FormControl(''),
  });
  

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.jobForm.getRawValue())
    this.contactService.post(this.jobForm.getRawValue()).subscribe();
  }
}
