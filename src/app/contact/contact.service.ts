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
        return this.http.post("/api/contact/job", jobRequest);
    }

    getJobOffers(): Observable<ContactList>{
        console.log(this.oauthService.getIdentityClaims())
        var headers = new HttpHeaders().set('Authorization', `Bearer ${this.oauthService.getAccessToken()}`);
        var options = { headers: headers }
        return this.http.get<ContactList>("/api/contact/job", options)
    }
}


export interface Contact{
    jobTitle: string,
    jobDescription: string,
    employerName: string,
    employerDescription: string,
}

export interface ContactList{
    contacts: Contact[]
    jobs: Contact[]
}