import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/service.index';

declare var jQuery: any;
declare var $: any;


@Component({
  selector: 'app-altausuario',
  templateUrl: './altausuario.component.html',
  styleUrls: ['./altausuario.component.css']
})
export class AltausuarioComponent implements OnInit {

  constructor(private select_us: PagesService) {
  this.select_us.sel_usuarios();
   }

  ngOnInit() {
      $(function() {
        $('#example1').DataTable();
        $('#example2').DataTable({
          paging: true,
          lengthChange: false,
          searching: false,
          ordering: true,
          info: true,
          autoWidth: false
        });
      });
  }

}
