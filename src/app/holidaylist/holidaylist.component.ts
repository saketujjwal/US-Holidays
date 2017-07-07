import { Component, OnInit } from '@angular/core';
import { HolidayService } from './../holiday.service';
import { forEachChild } from 'typescript';
import _ from 'lodash';

@Component({
  selector: 'app-holidaylist',
  templateUrl: './holidaylist.component.html',
  styleUrls: ['./holidaylist.component.css']
})
export class HolidaylistComponent implements OnInit {

  title = 'app';
  holidayList = [];
  errorMsg = 'Unable to fetch';
  isError = false;
  holidays = [];

  constructor(private holidayService: HolidayService) {};
  ngOnInit(): void {
    this.holidayService.getHolidays(null).subscribe(
      (data) => {
        this.holidayList = data.holidays;
        _.forEach(this.holidayList, function(val, key) {
              _.forEach( this.holidayList[key], function(obj){
              this.holidays.push(obj);
              }.bind(this))
        }.bind(this))
      },
      (error) => {
        this.errorMsg = 'Unable to fetch';
        this.isError = true;
      }
    )
  }
}
