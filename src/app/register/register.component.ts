import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'; 
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user = {
    nombres: '',
    correo: '',
    password: '',
    telefono: '' 
  };
  
  constructor(private authService: AuthService, private toastController: ToastController) {}
  
  ngOnInit(): void {
    // Aquí puedes realizar inicializaciones si es necesario
  }

  register() {
    this.authService.register(this.user).subscribe(
      async (response) => {
        const toast = await this.toastController.create({
          message: 'Registro exitoso',
          duration: 2000
        });
        toast.present();
      },
      async (error) => {
        const toast = await this.toastController.create({
          message: 'Error en el registro',
          duration: 2000
        });
        toast.present();
      }
    );
  }
}
