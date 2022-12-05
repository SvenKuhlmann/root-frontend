import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService, ContactList, Contact } from '../contact/contact.service';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, MatListModule, FlexLayoutModule],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts?: ContactList;

  constructor(private contactService: ContactService, private oauthService : OAuthService) { }

  ngOnInit(): void {
    console.log(this.oauthService.getIdentityClaims())
    this.contactService.getJobOffers().subscribe(list => this.contacts = list);
  }

}
