import { Component, OnInit } from '@angular/core';
import {OktaAuthService} from '@okta/okta-angular';
import * as OktaSignIn from '@okta/okta-signin-widget';

import Appconfig from '../app-config'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  oktaSignin : any
  isAuthenticated: boolean;

  constructor(private oktaAuthService : OktaAuthService) {
   // this.oktaAuthService.$authenticationState.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
    this.oktaSignin = new OktaSignIn({
      logo:' C:\Users\rumbi\OneDrive\Desktop\impi-web-master\logo.jpg',
      features: {
        registration :true
      },
      baseUrl :Appconfig.oidc.issuer.split('/oauth2')[0],
      clientId :Appconfig.oidc.clientId,
      redirectUri : Appconfig.oidc.redirectUri,
      authParams : {
        pkce : true,
        issuer : Appconfig.oidc.issuer,
        scopes :Appconfig.oidc.scopes
      }
    });
   }

   ngOnInit():void {
    this.oktaSignin.remove();
   // this.oktaAuthService.isAuthenticated().then((auth) => {
    //  this.isAuthenticated = auth;
   // };
  


    this.oktaSignin.renderEl({
      el : '#okta-sign-in-widget'},
      (response) =>{
        if (response.status === 'SUCCESS'){
          this.oktaAuthService.signInWithRedirect();
        }
      },
      (error) => {
        throw error;
      }
    );
  }

}
