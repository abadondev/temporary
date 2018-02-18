import { Component, OnInit, ViewChild } from '@angular/core';

import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';
import * as wjOlap from 'wijmo/wijmo.angular2.olap';

//import { WjFlexGrid } from 'wijmo/wijmo.angular2.grid';
//import { WjPivotGrid } from 'wijmo/wijmo.angular2.olap';

@Component({

  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],

})
export class PopupComponent implements OnInit {

  @ViewChild('thePanel') thePanel: any;


  rawData = [
    {id: 1, model: "Audi", color: "red"},
    {id: 2, model: "BMW", color: "black"},
    {id: 3, model: "Audi", color: "yellow"},
    {id: 4, model: "Fiat", color: "orange"},
    {id: 5, model: "Audi", color: "gray"},
    {id: 6, model: "Tesla", color: "pink"}

  ];
  constructor() { }

  ngOnInit() {

  }

}
