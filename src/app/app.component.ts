import { Component } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { ThemeServie } from './theme.service';

export const authConfig: AuthConfig = {

  issuer: 'https://dataenv.de/realms/root',

  redirectUri: window.location.origin,

  clientId: 'root',

  scope: 'openid',

  responseType: 'code',

  requireHttps: false
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'root_frontend';

  constructor(public themeService : ThemeServie, private oauthService: OAuthService){
    oauthService.configure(authConfig);
    oauthService.loadDiscoveryDocumentAndTryLogin();
    oauthService.setupAutomaticSilentRefresh();
  }
}

