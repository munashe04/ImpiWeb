import { Component, OnInit } from '@angular/core';
import {OktaAuthService} from '@okta/okta-angular';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {
  
  isAuthenticated : boolean = false;
  userFullName : string;

  constructor(private oktaAuthServie :OktaAuthService) { }

  ngOnInit(): void {
    this.oktaAuthServie.$authenticationState.subscribe(
      (result) =>{
        this.isAuthenticated = result;
        this.getUserDetails();
      }
    );
  }
  getUserDetails(){
    if (this.isAuthenticated){
      this.oktaAuthServie.getUser().then(
        (res) => {
          this.userFullName = res.name;
        }
      )
    }
  }
  logout(){
    this.oktaAuthServie.signOut();
  }

}
