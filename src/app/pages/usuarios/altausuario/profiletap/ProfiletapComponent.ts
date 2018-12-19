import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { UsuariosService } from 'src/app/services/service.index';
import { datosusuario } from '../class.usuarios.component';
import { DataTableDirective } from 'angular-datatables';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Subject } from 'rxjs';


declare  var $: any;
@Component({
  selector: 'app-profiletap',
  templateUrl: './profiletap.component.html',
  styles: []
})
export class ProfiletapComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective)
  TUsuarios: DataTableDirective;
  dtOptions: DataTables.Settings[] = [];
  dtTrigger: Subject<any> = new Subject();


  @ViewChild('registerForm')
  regForm: NgForm;
  registerForm: FormGroup;
  submitted = false;
  model = new datosusuario();
  usuarios$: any[] = []; // todos los usuarios
  usuariosSes$: any[] = []; // todos los usuarios
  us: any[] = []; // get usaruio
  niveles: any[] = []; // get niveles
  puestos: any[] = [];
  asig_cz: any[] = [];
  dep_mr: any[] = [];
  fileReaded: any;
  constructor(
    private usuario_us: UsuariosService,
    private formBuilder: FormBuilder
  ) {
    this.model.avatar = 'default.png';
    this.usuario_us.avatar = `${this.usuario_us.urlavatar}${this.model.avatar}`;
    this.CargarNivelesSelect(); // busca y carga los niveles
    this.CargarPuestos(); // busca y carga los puestos
  }
  ngOnInit() {
    this.PropTable(); // funcion que carga las propiedades de la tabla
    this.selUsuarios(); // busca y carga los usuarios en la tabla
    this.registerForm = this.formBuilder.group({
      usuarioForm: ['', [Validators.required, Validators.minLength(6)]],
      passForm: ['', [Validators.required, Validators.minLength(6)]],
      nivelForm: ['', Validators.required],
      nombresForm: ['', Validators.required],
      paternoForm: ['', Validators.required],
      maternoForm: ['', Validators.required],
      rfcForm: ['', [Validators.required, Validators.minLength(10)]],
      curpForm: ['', [Validators.required, Validators.minLength(18)]],
      puestoForm: ['', Validators.required],
      asignacionForm: ['', Validators.required],
      departamentoForm: ['', Validators.required],
      terminosForm: ['', Validators.required],
      avatarForm: ['', Validators.required]
    });
  }
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
    this.resetContadores();

  }
  get f() {
    return this.registerForm.controls; // regresa el formulario si hay error
  }

  public PropTable() {
    this.dtOptions[0] = {
      createdRow: function(row, data, index) {
        if (data[6] === 'INACTIVO') {
          $('td', row).eq(0).addClass('bg-red disabled cursor');
          $('td', row).eq(1).addClass('bg-red disabled color-palette cursor');
          $('td', row).eq(2).addClass('bg-red disabled color-palette');
          $('td', row).eq(3).addClass('bg-red disabled color-palette');
          $('td', row).eq(4).addClass('bg-red disabled color-palette');
          $('td', row).eq(5).addClass('bg-red disabled color-palette');
          $('td', row).eq(6).addClass('bg-red disabled color-palette');
        }
      },
      paging: true,
      lengthChange: true,
      searching: true,
      ordering: false,
      info: true,
      autoWidth: true,
      responsive: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json'
      }
    };

    this.dtOptions[1] = {
      createdRow: function(row, data, index) {
        if (data[4] === 'INACTIVO') {
          $('td', row).eq(4).addClass('bg-red disabled color-palette');
        }
        if (data[4] === 'ACTIVO') {
          $('td', row).eq(4).addClass('bg-green disabled color-palette');
        }
      },
      paging: true,
      lengthChange: true,
      searching: true,
      ordering: true,
      info: true,
      autoWidth: true,
      responsive: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json'
      }
    };
  }

  onSubmit() {
    this.submitted = true;
    this.resetcampos(); /// funcion que carga la validacion de los campos
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
    this.SaveData();
    this.registerForm.reset(); // reset formulario eliminta o limpía el form ya sea en editar o nuevo usuario
    this.clearcampos(); // funcion que limpia las validaciones de los campos
  }
  /// cargar propiedades de la tabla
  public selUsuarios() {
    this.PropTable();
    this.usuario_us.sel_usuarios().subscribe((data: any) => {
      this.usuarios$ = data;
      this.dtTrigger.next();
      console.log(this.usuarios$);
      this.resetContadores();
      this.cargandoContadores();
    });
  }

  resetContadores() {
        this.usuario_us.countTotal = 0;
        this.usuario_us.countAdmin = 0;
        this.usuario_us.countTD = 0;
        this.usuario_us.countJD = 0;
        this.usuario_us.countER = 0;
        this.usuario_us.countDel = 0;
        this.usuario_us.countCZ = 0;
        this.usuario_us.countSesiones = 0;
  }

  cargandoContadores() {
    this.usuario_us.countTotal = this.usuarios$.length;
    for (let x = 0; x <= this.usuarios$.length - 1; x++) {
     if (this.usuarios$[x].status_ses === 'ACTIVO') {
       this.usuario_us.countSesiones++;
      }
       if (this.usuarios$[x].nivel === 'ADMINISTRADOR') {
         this.usuario_us.countAdmin++;
       }
         if (this.usuarios$[x].nivel === 'TECNICO DOCENTE') {
           this.usuario_us.countTD = this.usuario_us.countTD + 1;
         }
         if (this.usuarios$[x].nivel === 'JEFE DE DEPARTAMENTO') {
           this.usuario_us.countJD = this.usuario_us.countJD + 1;
         }
         if (this.usuarios$[x].puesto === 'ENLACE REGIONAL') {
           this.usuario_us.countER = this.usuario_us.countER + 1;
         }
         // tslint:disable-next-line:max-line-length
         if (this.usuarios$[x].nivel === 'DELEGACION ' || this.usuarios$[x].nivel === 'ADMINISTRATIVO' || this.usuarios$[x].nivel === 'COORDINADOR REGIONAL') {
           this.usuario_us.countDel = this.usuario_us.countDel + 1;
         }
         if (this.usuarios$[x].puesto === 'COORDINADOR DE ZONA') {
             this.usuario_us.countCZ = this.usuario_us.countCZ + 1;
         }

    }

  }
  /// cargar usuario para el componente profileimage.component.ts
  public CargarUsuario(id: any) {
    this.usuario_us.buscarus(id);
    // console.log(id);
    this.usuario_us.getusuario(id).subscribe((data: any) => {
      this.us = data;
      console.log('este es el usuario', this.us[0].id);
      this.usuario_us.nombreus = this.us[0].nombres;
      this.usuario_us.ap_pat = this.us[0].apepaterno;
      this.usuario_us.ap_mat = this.us[0].apematerno;
      this.usuario_us.mrus = this.us[0].mr;
      this.usuario_us.nivel = this.us[0].nivel;
      this.usuario_us.status = this.us[0].status;
      this.usuario_us.rfc = this.us[0].rfc;
      this.usuario_us.avatar = `${this.usuario_us.urlavatar}${
        this.us[0].avatar
      }`;
      if (this.us[0].cz === 'DEL') {
        this.usuario_us.czus = 'DELGACION';
        this.usuario_us.mrus = this.us[0].puesto;
        // titulos
        this.usuario_us.asignacion_CZ = 'Asignacion';
        this.usuario_us.departamento_MR = 'Departamento';
      } else {
        this.usuario_us.czus = this.us[0].cz;
        this.usuario_us.mrus = this.us[0].mr;
        //  titulos
        this.usuario_us.asignacion_CZ = 'Corrdinación';
        this.usuario_us.departamento_MR = 'Microregión';
      }
    });
    this.usuario_us.btnEliminar = true; // habilitar boton de eliminar
    this.usuario_us.btnEditar = true; // habilitar boton de eliminar
  }
  public CargarNivelesSelect() {
    this.usuario_us.getNivelesSelect().subscribe((data: any) => {
      this.niveles = data;
      console.log(this.niveles);
    });
  }
  public CargarPuestos() {
    this.usuario_us.getPuestos().subscribe(data => {
      this.puestos = data;
      console.log(this.puestos);
    });
  }
  public EnviarPuesto(desPuesto: string) {
    console.log(desPuesto);
    this.usuario_us.dPuesto = desPuesto;
    this.usuario_us.getAsigCZ(desPuesto).subscribe((data: any) => {
      this.asig_cz = data;
    });
  }
  public EnviarCZ(desCZ: string) {
    if (this.usuario_us.editar === true) {
      this.usuario_us.getAsigMR(desCZ).subscribe((data: any) => {
        this.dep_mr = data;
        $('#inputAsigCZ').val(this.model.cz);
      });
    } else {
      console.log('cz a buscar: ', desCZ);
      this.usuario_us.getAsigMR(desCZ).subscribe((data: any) => {
        this.dep_mr = data;
      });
    }
  }
  public SaveData() {
    if (this.usuario_us.editar === false) {
      this.usuario_us.addUsuario(this.model).subscribe((data: any) => {
        this.rerender();
        this.selUsuarios();
        $('.nav-tabs a[href="#Buscar"]').tab('show'); // regresa al tap de buscar
        /// actualizar tabla
      });
    } else {
      this.usuario_us.getUpdateUsuario(this.model).subscribe((data: any) => {
        console.log(data);
        this.rerender();
        this.selUsuarios();
        $('.nav-tabs a[href="#Buscar"]').tab('show'); // regresa al tap de buscar
        this.usuario_us.editar = false;
      });
    }
    this.cleartapImagen();
  }
  cancelarFormUs() {
    $('.nav-tabs a[href="#Buscar"]').tab('show'); //  regresar al tab de buscar
    this.registerForm.reset(); // limpiar formulario
    this.usuario_us.editar = false;
    this.cleartapImagen();
  }
  cleartapImagen() {
    this.usuario_us.id = '';
    this.usuario_us.nombreus = '';
    this.usuario_us.ap_pat = '';
    this.usuario_us.ap_mat = '';
    this.usuario_us.czus = '';
    this.usuario_us.mrus = '';
    this.usuario_us.deptous = '';
    this.usuario_us.nivel = '';
    this.usuario_us.status = '';
    this.usuario_us.dPuesto = '';
    this.usuario_us.rfc = '';
    this.usuario_us.avatar = `${this.usuario_us.urlavatar}default.png`;
  }
  public rerender() {
    // this.TUsuarios.dtInstance.then((dtInstance: DataTables.Api) => {
    //   // Destroy the table first
    //   dtInstance.destroy();
    //   // Call the dtTrigger to rerender again
    //
    console.log(' borrando tablas ');
    $('#TUsuarios').DataTable().destroy();
    $('#TUsuariosSes').DataTable().destroy();
  }
  rfcpass(rfc: string) {
    console.log(rfc);
    $('#passForm').val(rfc);
    this.model.password = rfc;
  }
  resetcampos() {
    // restablese las validaciones en el formulario.
    this.registerForm.get('usuarioForm').setValidators([Validators.required, Validators.minLength(6)]);
    this.registerForm.get('usuarioForm').updateValueAndValidity();
    this.registerForm.get('passForm').setValidators([Validators.required, Validators.minLength(6)]);
    this.registerForm.get('passForm').updateValueAndValidity();
    this.registerForm.get('nivelForm').setValidators([Validators.required]);
    this.registerForm.get('nivelForm').updateValueAndValidity();
    this.registerForm.get('nombresForm').setValidators([Validators.required]);
    this.registerForm.get('nombresForm').updateValueAndValidity();
    this.registerForm.get('paternoForm').setValidators([Validators.required]);
    this.registerForm.get('paternoForm').updateValueAndValidity();
    this.registerForm.get('maternoForm').setValidators([Validators.required]);
    this.registerForm.get('maternoForm').updateValueAndValidity();
    this.registerForm.get('rfcForm').setValidators([Validators.required, Validators.minLength(10)]);
    this.registerForm.get('rfcForm').updateValueAndValidity();
    this.registerForm.get('curpForm').setValidators([Validators.required, Validators.minLength(18)]);
    this.registerForm.get('curpForm').updateValueAndValidity();
    this.registerForm.get('puestoForm').setValidators([Validators.required]);
    this.registerForm.get('puestoForm').updateValueAndValidity();
    this.registerForm.get('asignacionForm').setValidators([Validators.required]);
    this.registerForm.get('asignacionForm').updateValueAndValidity();
    this.registerForm.get('departamentoForm').setValidators([Validators.required]);
    this.registerForm.get('departamentoForm').updateValueAndValidity();
    this.registerForm.get('terminosForm').setValidators([Validators.required]);
    this.registerForm.get('terminosForm').updateValueAndValidity();
    this.registerForm.get('avatarForm').setValidators([Validators.required]);
    this.registerForm.get('avatarForm').updateValueAndValidity();
  }
  clearcampos() {
    // codigo que quita las validaciones en los campos al guardar la base de datos
    this.registerForm.get('usuarioForm').clearValidators();
    this.registerForm.get('usuarioForm').updateValueAndValidity();
    this.registerForm.get('passForm').clearValidators();
    this.registerForm.get('passForm').updateValueAndValidity();
    this.registerForm.get('nivelForm').clearValidators();
    this.registerForm.get('nivelForm').updateValueAndValidity();
    this.registerForm.get('nombresForm').clearValidators();
    this.registerForm.get('nombresForm').updateValueAndValidity();
    this.registerForm.get('paternoForm').clearValidators();
    this.registerForm.get('paternoForm').updateValueAndValidity();
    this.registerForm.get('maternoForm').clearValidators();
    this.registerForm.get('maternoForm').updateValueAndValidity();
    this.registerForm.get('rfcForm').clearValidators();
    this.registerForm.get('rfcForm').updateValueAndValidity();
    this.registerForm.get('curpForm').clearValidators();
    this.registerForm.get('curpForm').updateValueAndValidity();
    this.registerForm.get('puestoForm').clearValidators();
    this.registerForm.get('puestoForm').updateValueAndValidity();
    this.registerForm.get('asignacionForm').clearValidators();
    this.registerForm.get('asignacionForm').updateValueAndValidity();
    this.registerForm.get('departamentoForm').clearValidators();
    this.registerForm.get('departamentoForm').updateValueAndValidity();
    this.registerForm.get('terminosForm').clearValidators();
    this.registerForm.get('terminosForm').updateValueAndValidity();
    this.registerForm.get('avatarForm').clearValidators();
    this.registerForm.get('avatarForm').updateValueAndValidity();
  }
}
