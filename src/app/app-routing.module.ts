import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { DashboardComponent } from './dashboard/dashboard.component';
// import { InvoiceShopsComponent } from './invoice-shops/invoice-shops.component';

const routes: Routes = [
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: 'dashboard', component:  DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
//   { path: 'invoice-shops', component: InvoiceShopsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
