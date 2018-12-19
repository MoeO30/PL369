import { Component, OnInit, Input} from '@angular/core';
import { UsuariosService} from 'src/app/services/service.index';
import { UsuariomodalComponent } from './usuariomodal.component';
import { ProfiletapComponent } from '../profiletap/ProfiletapComponent';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { Router } from '@angular/router';



declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-profileimage',
  templateUrl: './profileimage.component.html',
  styleUrls: ['./profileimage.component.css']
})
export class ProfileimageComponent implements OnInit {
  @Input() UsuarioModal: UsuariomodalComponent;
  @Input() ProfileTap: ProfiletapComponent;

  UsJSON: string;
  subscription: Subscription;
  constructor(public usuario: UsuariosService,
              public router: Router) {
              }

  ngOnInit() {

  }

  editarUsuario() {
    if (this.usuario.id) {
      console.log('buscar usuario con id: ', this.usuario.id);
      this.usuario.getusuario(this.usuario.id).subscribe((data: any) => {
      this.ProfileTap.model = data[0]; // opteniendo los datos al model para su edicion
      this.ProfileTap.EnviarPuesto(this.ProfileTap.model.puesto); // cargar el pueto
      this.ProfileTap.EnviarCZ(this.ProfileTap.model.cz); // cargar cz para editar
      this.usuario.avatar = `${this.usuario.urlavatar}${this.ProfileTap.model.avatar}`; // imagen default.png
      // console.log(this.ProfileTap.model);
      });
      this.tabEditUS();
      this.usuario.editar = true;
    } else {
      console.log('No eligio usuario');
    }

  }

  tabEditUS() {
    $('.nav-tabs a[href="#AltaEditar"]').tab('show');
  }

  eliminarUsModal() {
    $('#EliminarUsModal').modal('show');
  }
  resetpassUsModal() {
    $('#resetpassUsModal').modal('show');
  }

  updateStatus(status: string) {
    this.usuario
      .getUpdateStatus(this.usuario.id, status)
      .subscribe((data: any) => {
        this.ProfileTap.rerender();
        this.ProfileTap.selUsuarios();
        this.ProfileTap.CargarUsuario(this.usuario.id);
        console.log(data);
      });
  }

  public ResetPassword() {
    this.usuario.getresetpass(this.usuario.id).subscribe((data: any) => {
      console.log(data);
      $('#resetpassUsModal').modal('show');
      this.ProfileTap.rerender();
      this.ProfileTap.selUsuarios();
    });
  }

  IrimportarUs() {
    this.router.navigate(['/database']);
    // this.router.navigate(['/database']);
  }
verSesiones() {
  $('.nav-tabs a[href="#Sesiones"]').tab('show'); // regresa al tap de buscar
}
}
