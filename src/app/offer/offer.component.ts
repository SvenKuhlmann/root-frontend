import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ContactService, Offer } from '../contact/contact.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  offer?: Offer;
  constructor(private route: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.loadOffer(params['offerId']))
  }
  loadOffer(id: string): void {
    this.contactService.getOffer(id).subscribe(offer => this.offer = offer);
  }

}
