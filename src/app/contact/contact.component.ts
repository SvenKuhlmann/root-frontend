import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { ContactService, JobRequest } from './contact.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslateModule, ReactiveFormsModule, FlexLayoutModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  jobForm = new FormGroup({
    description: new FormControl(''),
  });
  

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.jobForm.getRawValue())
    this.contactService.post(this.jobForm.getRawValue() as JobRequest).subscribe();
  }

}
