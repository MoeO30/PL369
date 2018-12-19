import { Component, OnInit } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { DatabaseComponentService, DatabaseService } from 'src/app/services/service.index';

declare var $: any;

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styles: []
})
export class DatabaseComponent implements OnInit {

  btnUpJson: boolean; // boton de importar JSON
  stopProgress: boolean = false;
  StopUpload: string;
  ProgressCount: number = 0;
  menu: any;
  menucount: number;
  submenucount: number;
  fileup: any;
  NameFile: string;
  text_area: string;
  btn: any;

  constructor(public data: DatabaseComponentService, public dataconnect: DatabaseService, public papa: Papa) { }

  ngOnInit() {
    this.cargarFile();
  }



  cargarFile() {

    this.menucount = Object.keys(this.data.MenuDataBase).length;
    for (let x = 0; x < this.menucount; x++) {

      const intervalo = setInterval(() => {
        this.submenucount = Object.keys(this.data.MenuDataBase[x].submenu).length;
        for (let y = 0; y < this.submenucount; y++) {
          console.log(x, y);

          this.fileup = `#${this.data.MenuDataBase[x].submenu[y].id_file}`;
          this.btn = this.data.MenuDataBase[x].submenu[y].btn;
          console.log(this.fileup);

          $(this.fileup).fileinput({
            theme: 'fas',
            language: 'es',
            uploadUrl: '#',
            browseClass: this.btn,
            overwriteInitial: false,
            validateInitialCount: true,
            initialPreviewAsData: true, // identify if you are sending preview data only and not the markup
            allowedFileExtensions: ['jpg', 'png', 'gif', 'csv'],
          });
        }
        clearInterval(intervalo);
      }, 2500);
    }



    $('#file-5').fileinput({
      overwriteInitial: false,
      validateInitialCount: true,

    }).on('filebeforedelete', function () {

    }).on('filedeleted', function () {

  });





  }


  // funcion para convertir csv en json para su importacion
  convertcsv(x, filees, textarea) {
    filees = `#${filees}`;
    this.NameFile = filees;
    textarea = `#${textarea}`;

    console.log(filees, textarea);
    if ($(filees).val().length > 0) {
      const file = $(filees)[0].files[0];
      this.papa.parse(file, {
        header: true,
        // dynamicTyping: true,
        encoding: 'UTF-8',
        // encoding: 'UISO-8859-1',
        complete: function (results) {
          // console.log(results);
          this.UsJson = results;
          $(textarea).val(JSON.stringify(this.UsJson.data));
          // console.log(JSON.stringify(this.UsJson));
        }
      });
      this.btnUpJson = true;
    } else {
      $(textarea).val(' ');
    }
  }

  clearTextUsJSON(textarea, page, progress, x, y) {
    textarea = `#${textarea}`;
    progress = `#${progress}`;
    this.data.MenuDataBase[x].submenu[y].msg_proceso = 'preparando archivo....';
    this.progress(progress, x, y);
    let text = $(textarea).val();
    text = text.replace(/�/g, 'Ñ'); // REMPLAZAR LAS Ñ
    $(textarea).val(text);
    const datos = $(textarea).val(); // ENVIA EL JSON PARA SER INSERTADO
    this.uploadDataBase(datos, page, textarea);
  }


  uploadDataBase(datos, page, textarea) {

    if (page === 'usuarios') {
      this.dataconnect.getUploadUS(datos).subscribe((data: any) => {
        if (data[0].res === 'ok') {
          // console.log('proceso terminado');
          this.StopUpload = 'proceso terminado';
        }
        $(textarea).val(' '); // BORRA EL TEXT AREA;
        this.btnUpJson = false;
      });
    }

    if (page === 'MetaR') {
      this.dataconnect.getUploadMetaRegular(datos).subscribe((data: any) => {
        if (data[0].res === 'ok') {
          this.StopUpload = 'proceso terminado';
        }
        $(textarea).val(' '); // BORRA EL TEXT AREA;
        this.btnUpJson = false;
      });
    }

    if (page === 'LogroMevyt') {
      this.dataconnect.getUploadLogroRegular(datos).subscribe((data: any) => {
        console.log(data);
        if (data[0].res === 'ok') {
          this.StopUpload = 'proceso terminado';
        }
        $(textarea).val(' '); // BORRA EL TEXT AREA;
        this.btnUpJson = false;
      });
    }
    if (page === 'LOGRO-ALF') {
     this.dataconnect.getUploadLogroAlfa(datos).subscribe((data: any) => {
      console.log(data);
      if (data[0].res === 'ok') {
        this.StopUpload = 'proceso terminado';
      }
       $(textarea).val(' '); // BORRA EL TEXT AREA;
       this.btnUpJson = false;
     });
    }

    if (page === 'LOGRO-PEC') {
      this.dataconnect.getUploadLogroPEC(datos).subscribe((data: any) => {
        console.log(data);
        if (data[0].res === 'ok') {
          this.StopUpload = 'proceso terminado';
        }
        $(textarea).val(' '); // BORRA EL TEXT AREA;
        this.btnUpJson = false;
      });
    }


  }

  // cargando barra de proceso
  progress(progress, x, y) {
    console.log(progress);
    this.data.MenuDataBase[x].submenu[y].msg_proceso = 'subiendo archivo espere por favor.......' ;
    const intervalo = setInterval(() => {

      if (this.StopUpload === 'proceso terminado') {
        this.data.MenuDataBase[x].submenu[y].msg_proceso = '¡ El archivo se cargo correctamente !';
        this.ProgressCount = 100;
        $(progress).css({ 'width': `${this.ProgressCount}%` });
        this.clearProgres(progress, x, y);
        clearInterval(intervalo);
      } else {

       if (this.ProgressCount === 100) {
         this.ProgressCount = -10;
         $(progress).css({'width': `${this.ProgressCount}%`});
       } else {
        this.ProgressCount++;
        $(progress).css({ 'width': `${this.ProgressCount}%` });
      }
      }
    }, 150);
  }

  // limpiando barra de proceso
  clearProgres(progress, x, y) {
    const intervalo = setInterval(() => {
      this.ProgressCount = 0;
      $(progress).css({ 'width': `${this.ProgressCount}%`});
      this.StopUpload = '';
      this.data.MenuDataBase[x].submenu[y].msg_proceso = '';

      $(this.NameFile).fileinput('clear');
      clearInterval(intervalo);
    }, 2500);
  }

  contraer( modulo, btn, collapsed, x, y) {
    console.log(collapsed);
    modulo = `#${modulo}`;
    btn = `#${btn}`;
    if (collapsed === false) {

      this.data.MenuDataBase[x].submenu[y].btncollapsed = true;

      $(modulo).removeClass('collapsed-box');
      $(btn).removeClass('fa fa-plus').addClass('fa fa-minus');

    } else {
      this.data.MenuDataBase[x].submenu[y].btncollapsed = false;
      $(btn).removeClass('fa fa-minus').addClass('fa fa-plus');
      $(modulo).addClass('collapsed-box');
    }

    //  $(modulo).boxWidget('collapse');

    // $( modulo + ' [data-widget=\'collapse\']').click(function () {
    //   const box = $(this).parents('.box').first();
    //   if (!box.hasClass('collapsed-box')) {
    //     console.log('collapsing ' + modulo);
    //   } else {
    //     console.log('expanding' + modulo);
    //     $(modulo).boxWidget('collapse');
    //   }
    // });

  }

  // contraer(modulo) {
  //   modulo = `#${modulo}`;
  //   $(modulo).boxWidget('collapse');
  // }

}

