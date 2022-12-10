import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { OAuthService } from "angular-oauth2-oidc";


@Injectable({
    providedIn: 'root',
})
export class ContactService {

    constructor(private http: HttpClient, private oauthService: OAuthService) { }

    post(jobRequest: any): Observable<any> {
        return this.http.post("/api/contact/offer", jobRequest);
    }

    getJobOffers(): Observable<OfferList> {
        var headers = new HttpHeaders().set('Authorization', `Bearer ${this.oauthService.getAccessToken()}`);
        var options = { headers: headers }
        return this.http.get<OfferList>("/api/contact/offer", options)
    }

    getOffer(id: string): Observable<Offer> {
        var headers = new HttpHeaders().set('Authorization', `Bearer ${this.oauthService.getAccessToken()}`);
        var options = { headers: headers }
        return this.http.get<Offer>("/api/contact/offer/" + id, options)
    }

}


export interface Offer {
    id: string,
    job: Job,
    employer: Employer,
    contact: Contact
}

export interface Employer {
    name: string,
    description: string,
}

export interface Job {
    title: string,
    description: string,
}

export interface Contact {
    firstName: String,
    lastName: String,
    email: String,
    telephone: String
}

export interface OfferList {
    offers: Offer[]
}