import { Injectable } from "@angular/core";
import { AuthConfig, OAuthService } from "angular-oauth2-oidc";

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    public theme: string = "dark-theme";

    scopes?: String[]
    loginEvent: Promise<boolean>;

    constructor(private oauthService: OAuthService) {
        oauthService.configure(authConfig);
        this.loginEvent = oauthService.loadDiscoveryDocumentAndTryLogin()
        oauthService.setupAutomaticSilentRefresh();
    }


}

export const authConfig: AuthConfig = {

    issuer: 'https://dataenv.de/realms/root',

    redirectUri: window.location.origin,

    clientId: 'root',

    scope: 'openid root-project-edit roles',

    responseType: 'code',

    requireHttps: false
}