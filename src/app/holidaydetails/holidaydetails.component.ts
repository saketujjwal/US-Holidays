import { Component, OnInit } from '@angular/core';
import { HolidayService } from './../holiday.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-holidaydetails',
  templateUrl: './holidaydetails.component.html',
  styleUrls: ['./holidaydetails.component.css']
})
export class HolidaydetailsComponent implements OnInit {

  name;
  date;
  observed;
  publicHol;

  constructor(private activatedRoute: ActivatedRoute) { };
  ngOnInit(): void {
  this.activatedRoute.params.subscribe((params: Params) => {
        this.date = params['date'];
        this.name = params['name'];
        this.observed = params['observedDate'];
        this.publicHol = params['public'];
      });
  }

}



