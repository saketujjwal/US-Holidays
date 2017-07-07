import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HolidaydetailsComponent } from './holidaydetails/holidaydetails.component';
import { HolidaylistComponent } from './holidaylist/holidaylist.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list',     component: HolidaylistComponent },
  { path: 'details',     component: HolidaydetailsComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
