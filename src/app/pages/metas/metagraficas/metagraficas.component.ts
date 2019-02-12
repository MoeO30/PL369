import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MetalogroService } from '../../../services/pages/metalogro.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-metagraficas',
  templateUrl: './metagraficas.component.html',
  styles: []
})
export class MetagraficasComponent implements OnInit, OnDestroy {
  dataSourceAlfa: any;
  dataSourceInicial: any;
  dataSourceIntermedio: any;
  dataSourceAvanzado: any;
  tabla: any;
  chartConfig: any;

  TAlfas: any;
  TInicial: any;
  TIntermedio: any;
  TAvanzado: any;
  TAnual: any;

  TLAlfas: any;
  TLInicial: any;
  TLIntermedio: any;
  TLAvanzado: any;
  TLAnual: any;

  mesNombre: any;

  @ViewChild(DataTableDirective)
  TUsuarios: DataTableDirective;
  dtOptions: DataTables.Settings[] = [];
  dtTriggerMeta: Subject<any> = new Subject();
  dtTriggerLogro: Subject<any> = new Subject();
  dtTriggerComparativo: Subject<any> = new Subject();

  metaMes: any[] = [];
  logroMes: any[] = [];
  MetaLogroMes: any = [];
  alfas: any = [];
  inicial: any = [];
  intermedio: any = [];
  avanzado: any = [];
  nodo: any;

  categoryAlfas: any = [];
  dataMetaAlfas: any = [];
  dataLogroAlfas: any = [];

  categoryInicial: any = [];
  dataMetaInicial: any = [];
  dataLogroInicial: any = [];

  categoryIntermedio: any = [];
  dataMetaIntermedio: any = [];
  dataLogroIntermedio: any = [];

  categoryAvanzado: any = [];
  dataMetaAvanzado: any = [];
  dataLogroAvanzado: any = [];

  constructor(public meta: MetalogroService) {
    this.chartConfig = {
      width: '100%',
      height: '600',
      type: 'mscolumn3d',
      dataFormat: 'json'
    };
  }

  ngOnInit() {
    // this.dataSource = this.data;
    // this.table();
    this.dtOptions[0] = {
      paging: false,
      lengthChange: true,
      lengthMenu: [12],
      searching: true,
      ordering: false,
      info: false,
      autoWidth: false,
      responsive: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json'
      }
    };
    this.dtOptions[1] = {
      paging: false,
      lengthChange: true,
      lengthMenu: [12],
      searching: true,
      ordering: false,
      info: false,
      autoWidth: false,
      responsive: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json'
      }
    };
    this.dtOptions[2] = {
      paging: false,
      lengthChange: true,
      lengthMenu: [12],
      searching: true,
      ordering: false,
      info: false,
      autoWidth: false,
      responsive: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json'
      }
    };
  }

  ngOnDestroy() {
    this.dtTriggerLogro.unsubscribe();
    this.dtTriggerMeta.unsubscribe();
    this.dtTriggerComparativo.unsubscribe();
  }

  cargarTBMeta() {
    const intervalo = setInterval(() => {
      // proceso
      clearInterval(intervalo); // deterner intervalo
      this.meta.getTablaMeta().subscribe(data => {
        this.metaMes = data;
        console.log(this.metaMes);

        this.TAlfas = this.metaMes
          .filter(item => item.alfa)
          .map(item => parseFloat(item.alfa))
          .reduce((sum, current) => sum + current);

        this.TInicial = this.metaMes
          .filter(item => item.inicial)
          .map(item => parseFloat(item.inicial))
          .reduce((sum, current) => sum + current);

        this.TIntermedio = this.metaMes
          .filter(item => item.intermedio)
          .map(item => parseFloat(item.intermedio))
          .reduce((sum, current) => sum + current);

        this.TAvanzado = this.metaMes
          .filter(item => item.avanzado)
          .map(item => parseFloat(item.avanzado))
          .reduce((sum, current) => sum + current);

        this.TAnual = this.metaMes
          .filter(item => item.total)
          .map(item => parseFloat(item.total))
          .reduce((sum, current) => sum + current);

        this.dtTriggerMeta.next();
      });
    }, 150);
  }

  cargarTBLogro() {
    const intervalo = setInterval(() => {
      this.meta.getTablaLogro().subscribe((data: any) => {
        this.logroMes = data;
        console.log(this.logroMes);

        this.TLAlfas = this.logroMes
          .filter(item => item.alfa)
          .map(item => parseFloat(item.alfa))
          .reduce((sum, current) => sum + current);

        this.TLInicial = this.logroMes
          .filter(item => item.inicial)
          .map(item => parseFloat(item.inicial))
          .reduce((sum, current) => sum + current);

        this.TLIntermedio = this.logroMes
          .filter(item => item.intermedio)
          .map(item => parseFloat(item.intermedio))
          .reduce((sum, current) => sum + current);

        this.TLAvanzado = this.logroMes
          .filter(item => item.avanzado)
          .map(item => parseFloat(item.avanzado))
          .reduce((sum, current) => sum + current);

        this.TLAnual = this.logroMes
          .filter(item => item.total)
          .map(item => parseFloat(item.total))
          .reduce((sum, current) => sum + current);

        this.dtTriggerLogro.next();
        this.cargarMetaLogro();
      });

      clearInterval(intervalo); // deterner intervalo
    }, 150);
  }
  cargarMetaLogro() {
    this.MetaLogroMes = [];
    this.categoryAlfas = [];
    this.dataMetaAlfas = [];
    this.dataLogroAlfas = [];

    this.categoryInicial = [];
    this.dataMetaInicial = [];
    this.dataLogroInicial = [];

    this.categoryIntermedio = [];
    this.dataMetaIntermedio = [];
    this.dataLogroIntermedio = [];

    this.categoryAvanzado = [];
    this.dataMetaAvanzado = [];
    this.dataLogroAvanzado = [];

    for (let index = 0; index <= 11; index++) {
      this.mesNombre = moment()
        .months(index)
        .format('MMMM');
      // console.log(this.mesNombre);

      this.nodo = {
        MetaAlfa: this.metaMes[index].alfa,
        LogroAlfa: this.logroMes[index].alfa,
        MetaInicial: this.metaMes[index].inicial,
        LogroInicial: this.logroMes[index].inicial,
        MetaIntermedio: this.metaMes[index].intermedio,
        LogroIntermedio: this.logroMes[index].intermedio,
        MetaAvanzado: this.metaMes[index].avanzado,
        LogroAvanzado: this.metaMes[index].avanzado,
        mes: this.mesNombre
      };

      this.MetaLogroMes.push(this.nodo);
      //  graficas
      this.categoryAlfas.push({ label: this.mesNombre });
      this.dataMetaAlfas.push({ value: this.metaMes[index].alfa });
      this.dataLogroAlfas.push({ value: this.logroMes[index].alfa });

      this.categoryInicial.push({ label: this.mesNombre });
      this.dataMetaInicial.push({ value: this.metaMes[index].inicial });
      this.dataLogroInicial.push({ value: this.logroMes[index].inicial });

      this.categoryIntermedio.push({ label: this.mesNombre });
      this.dataMetaIntermedio.push({ value: this.metaMes[index].intermedio });
      this.dataLogroIntermedio.push({ value: this.logroMes[index].intermedio });

      this.categoryAvanzado.push({ label: this.mesNombre });
      this.dataMetaAvanzado.push({ value: this.metaMes[index].avanzado });
      this.dataLogroAvanzado.push({ value: this.logroMes[index].avanzado });
    }

    this.graficaAlfas();
    this.graficaInicial();
    this.graficaIntermedio();
    this.graficaAvanzado();
  }

  graficaAlfas() {
    const nodoGrafica = {
      chart: {
        caption: 'COMPARATIVO META-LOGRO ALFA',
        subcaption: '2018',
        xaxisname: 'Meses',
        yaxisname: 'Total META - LOGRO',
        formatnumberscale: '1',
        theme: 'fusion',
        drawcrossline: '1'
      },
      categories: [
        {
          category: this.categoryAlfas
        }
      ],
      dataset: [
        {
          seriesname: 'META',
          data: this.dataMetaAlfas
        },
        {
          seriesname: 'LOGRO',
          data: this.dataLogroAlfas
        }
      ]
    };
    this.dataSourceAlfa = nodoGrafica;
  }

  graficaInicial() {
    const nodoGrafica = {
      chart: {
        caption: 'COMPARATIVO META-LOGRO INICIAL',
        subcaption: '2018',
        xaxisname: 'Meses',
        yaxisname: 'Total META - LOGRO',
        formatnumberscale: '1',
        theme: 'fusion',
        drawcrossline: '1'
      },
      categories: [
        {
          category: this.categoryInicial
        }
      ],
      dataset: [
        {
          seriesname: 'META',
          data: this.dataMetaInicial
        },
        {
          seriesname: 'LOGRO',
          data: this.dataLogroInicial
        }
      ]
    };
    this.dataSourceInicial = nodoGrafica;
  }
  graficaIntermedio() {
    const nodoGrafica = {
      chart: {
        caption: 'COMPARATIVO META-LOGRO INTERMEDIO',
        subcaption: '2018',
        xaxisname: 'Meses',
        yaxisname: 'Total META - LOGRO',
        formatnumberscale: '1',
        theme: 'fusion',
        drawcrossline: '1'
      },
      categories: [
        {
          category: this.categoryIntermedio
        }
      ],
      dataset: [
        {
          seriesname: 'META',
          data: this.dataMetaIntermedio
        },
        {
          seriesname: 'LOGRO',
          data: this.dataLogroIntermedio
        }
      ]
    };
    this.dataSourceIntermedio = nodoGrafica;
  }
  graficaAvanzado() {
    const nodoGrafica = {
      chart: {
        caption: 'COMPARATIVO META-LOGRO INTERMEDIO',
        subcaption: '2018',
        xaxisname: 'Meses',
        yaxisname: 'Total META - LOGRO',
        formatnumberscale: '1',
        theme: 'fusion',
        drawcrossline: '1'
      },
      categories: [
        {
          category: this.categoryAvanzado
        }
      ],
      dataset: [
        {
          seriesname: 'META',
          data: this.dataMetaAvanzado
        },
        {
          seriesname: 'LOGRO',
          data: this.dataLogroAvanzado
        }
      ]
    };
    this.dataSourceAvanzado = nodoGrafica;
  }
}
