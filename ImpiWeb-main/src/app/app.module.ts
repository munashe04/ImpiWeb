import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatSliderModule} from '@angular/material/slider';
import { OrderItemComponent } from './orders/order-item/order-item.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import {FilterPipe} from './pipe-filter';
import { AgentComponent } from './agent/agent.component';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { LoginComponent } from './login/login.component';
import { LoginStatusComponent } from './login-status/login-status.component';

import {
  OKTA_CONFIG,
  OktaAuthModule,
  OktaCallbackComponent

} from '@okta/okta-angular';

import appConfig from './app-config';
import { Router, RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HomepageComponent } from './homepage/homepage.component';

const oktaConfig = Object.assign({
  onAuthRequired : (oktaAuth,injector) =>{
    const router = injector.get(Router);

    router.navigate(['/login']);
  }
},appConfig.oidc);

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderItemComponent,
    HomeComponent,
    FilterPipe,
    AgentComponent,
    AgentDetailsComponent,
    LoginComponent,
    LoginStatusComponent,
    LandingPageComponent,
    HomepageComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatTableModule,
    MatSliderModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    //RouterModule.forRoot(routes),
    OktaAuthModule,
    Ng2SearchPipeModule,
  ],
  providers: [{provide:OKTA_CONFIG,useValue :oktaConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
