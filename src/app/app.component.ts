import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, HostListener, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { ThemeServie } from './theme.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sidenavOpened = false;
  scopes?: String[];
  resizeObservable$?: Observable<Event>
  resizeSubscription$?: Subscription
  height?: number;
  width?: number;
  isNavBarOpenByDefault?: boolean;


  constructor(public themeService: ThemeServie, private authService: AuthService, private oauthService: OAuthService) {

  }
  ngOnInit(): void {
    this.setScreenSize()
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe(evt => { this.setScreenSize() })
    this.authService.loginEvent.then(() => { this.scopes = <String[]>this.oauthService.getGrantedScopes() });
  }
  setScreenSize() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    console.log("with ", this.width)
    this.isNavBarOpenByDefault = this.width > 1200;
    console.log("isNavBarOpenByDefault ", this.isNavBarOpenByDefault)

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

}


