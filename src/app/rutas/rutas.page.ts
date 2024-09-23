import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'; 

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.page.html',
  styleUrls: ['./rutas.page.scss'],
})
export class RutasPage implements OnInit {
  rutas: any[] = []; 

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.cargarRutas();
  }

  cargarRutas() {
    this.authService.getRutas().subscribe(
      (data) => {
        this.rutas = data.rutas;
        console.log(data); 
      },
      (error) => {
        console.error('Error al obtener rutas', error);
      }
    );
  }
}
