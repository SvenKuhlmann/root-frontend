import { Component } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { ThemeServie } from './theme.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'root_frontend';

  constructor(public themeService : ThemeServie ){

  }
}


