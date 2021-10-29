import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersComponent} from './orders/orders.component';
import {OrderItemComponent} from './orders/order-item/order-item.component';
import { HomeComponent } from './home/home.component';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { AgentComponent } from './agent/agent.component';
import { LoginComponent } from './login/login.component';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { title } from 'process';

const routes: Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: 'orders', component: OrdersComponent},
  { path: 'landing-page', component: LandingPageComponent},
  { path: 'order-item', component: OrderItemComponent },
  //{ path: 'home', component: HomeComponent},
  { path: 'home', component: HomepageComponent , canActivate : [OktaAuthGuard] },
  { path: 'agents', component: AgentComponent },
  { path: 'agent-details', component: AgentDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/callback', component: HomepageComponent },
  { path: 'logout/callback', component: LandingPageComponent },
  { path: '**',redirectTo : '/landing-page' ,pathMatch: 'full' },
  
 // { path: 'login/callback', component: OktaCallbackComponent },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
