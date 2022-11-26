import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from './auth.service';
import { ThemeServie } from './theme.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  sidenavOpened = false;
  scopes?: String[]


  constructor(public themeService: ThemeServie, private authService: AuthService, private oauthService: OAuthService) {

  }
  ngOnInit(): void {
    this.authService.loginEvent.then(() => {this.scopes = <String[]>this.oauthService.getGrantedScopes()});
  }

  login(){
    this.oauthService.initLoginFlow();
  }
  logoff(){
    this.oauthService.logOut()
  }
}


