import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() {
    // tslint:disable-next-line:quotemark
    $("#tema").addClass("hold-transition skin-blue sidebar-mini");
  }

  ngOnInit() {
  }

}
