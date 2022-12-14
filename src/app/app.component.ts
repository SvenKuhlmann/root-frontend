import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  sidenavOpened?: boolean;
  scopes?: String[];
  resizeObservable$?: Observable<Event>
  resizeSubscription$?: Subscription
  height?: number;
  width?: number;
  isNavBarOpenByDefault?: boolean;
  themes: Theme[] = [{ name: "dark-theme", label: "Dark Mode" }, { name: "light-theme", label: "Light Mode" }];
  activeTheme = this.themes[0]
  isFullToolbarShown?: boolean;
  langs=["en", "de"]
  languages: Map<string, string> = new Map([
    ['en', 'English'],
    ['de', 'German'],
  ]);

  constructor(private authService: AuthService, private oauthService: OAuthService, public translate: TranslateService) {
    translate.addLangs(["en", "de"])
    translate.setDefaultLang("en")
  }
  ngOnInit(): void {
    for (let language of this.languages.keys()) {
      if (navigator.language.startsWith(language)) {
        this.translate.use(language)
      }
    }
    this.setScreenSize()
    fromEvent(window, 'resize').subscribe(evt => { this.setScreenSize() })
    this.authService.loginEvent.then(() => { this.scopes = <String[]>this.oauthService.getGrantedScopes() });
  }
  setScreenSize() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;

    this.isFullToolbarShown = this.width > 600;

    this.isNavBarOpenByDefault = this.width > 1200;
    this.sidenavOpened = this.isNavBarOpenByDefault;
  }
  login() {
    this.oauthService.initLoginFlow();
  }
  logoff() {
    this.oauthService.logOut()
  }
  ngOnDestroy() {
    this.resizeSubscription$?.unsubscribe()
  }
  nextTheme(): Theme {
    var nextTheme = this.themes[this.themes.indexOf(this.activeTheme) + 1]
    return nextTheme == undefined ? this.themes[0] : nextTheme;
  }
}

export interface Theme {
  name: string, label: string
}


