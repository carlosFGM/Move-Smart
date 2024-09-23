import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  correo: string = '';
  password: string = '';

  constructor(private authService: AuthService, private toastController: ToastController, private router: Router) {}

  async login() {
    try {
      const response = await this.authService.login(this.correo, this.password).toPromise();
      const toast = await this.toastController.create({
        message: response.mensaje,
        duration: 2000,
      });
      await toast.present();
      this.goToAuth()
    } catch (error) {
      const toast = await this.toastController.create({
        message: 'Error en el login',
        duration: 2000,
      });
      await toast.present();
    }
  }

  goToAuth() {
    this.router.navigate(['/menu-nav/tabs']);
  }
  ngOnInit() {}

}
