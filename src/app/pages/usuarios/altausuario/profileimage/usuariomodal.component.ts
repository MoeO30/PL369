import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ProfiletapComponent } from '../profiletap/ProfiletapComponent';
import { UsuariosService } from 'src/app/services/service.index';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-usuariomodal',
  templateUrl: './usuariomodal.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class UsuariomodalComponent implements OnInit {
  @Input() Profiletap: ProfiletapComponent;
  us: any;
  msg: any;

  constructor(public usuario: UsuariosService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  CancelarEli() {
    this.usuario.btnEliminar = false; // deshabilitar boton de eliminar
  }


  eliminarUs() {
    // tslint:disable-next-line:quotemark
    this.us = this.usuario.id;

    if (this.us) {
      this.usuario.getEliminarUsuario(this.us).subscribe((data: any) => {
        this.msg = data;
        console.log(this.msg);

        this.Profiletap.selUsuarios(); // cargar los usuarios de la funcion que esta en profileTapcomponent
        this.Profiletap.rerender(); // RECARGA LA TABLA CON LOS NUEVOS DATOS YA SEA ELIMINADOS MODIFICADOS O AGREGADOS

        // limpiar variables del usuario.services
        this.usuario.id = '';
        this.usuario.czus = '';
        this.usuario.nombreus = '';
        this.usuario.ap_pat = '';
        this.usuario.ap_mat = '';
        this.usuario.mrus = '';
        this.usuario.deptous = '';
        this.usuario.status = '';
        this.usuario.nivel = '';

        this.usuario.btnEliminar = false; // deshabilitar boton de eliminar
      });
    }


  }
}
