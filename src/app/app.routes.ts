import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { DispatcherDashboardComponent } from './dispatcher-dashboard/dispatcher-dashboard.component';
import { LogisticsManagerDashboardComponent } from './logistics-manager-dashboard/logistics-manager-dashboard.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'test', component: AdminDashboardComponent },
  { path: 'landing', component: LandingPageComponent },
  // { path: '', redirectTo: '/landing', pathMatch: 'full' },
  // { path: '**', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'orders', component: OrderListComponent },
  { path: 'orders/create', component: OrderFormComponent },
  { path: 'orders/edit/:id', component: OrderFormComponent },
  { path: 'orders/:id', component: OrderDetailComponent },
  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  { path: 'customer', component: CustomerDashboardComponent },
  { path: 'dispatch', component: DispatcherDashboardComponent },
  { path: 'manager', component: LogisticsManagerDashboardComponent },
  { path: 'admin', component: AdminDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
