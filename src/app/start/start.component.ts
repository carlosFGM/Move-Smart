import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent  implements OnInit {
  selectedForm: 'login' | 'register' = 'login';
  constructor() { }
  
  ngOnInit() {}

}
