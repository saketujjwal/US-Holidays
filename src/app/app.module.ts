import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomMaterialModules } from './custommaterial.modules ';
import { HolidayService } from './holiday.service';
import { HolidaydetailsComponent } from './holidaydetails/holidaydetails.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HolidaylistComponent } from './holidaylist/holidaylist.component';

@NgModule({
  declarations: [
    AppComponent,
    HolidaydetailsComponent,
    HolidaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    CustomMaterialModules
  ],
  providers: [HolidayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
