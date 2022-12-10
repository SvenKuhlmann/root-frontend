import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService, OfferList, Offer } from '../contact/contact.service';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OAuthService } from 'angular-oauth2-oidc';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, MatListModule, FlexLayoutModule, RouterModule],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts?: OfferList;

  constructor(private contactService: ContactService, private oauthService : OAuthService) { }

  ngOnInit(): void {
    this.contactService.getJobOffers().subscribe(list => this.contacts = list);
  }

}
