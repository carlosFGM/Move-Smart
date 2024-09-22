import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { library, playCircle, radio, search } from 'ionicons/icons';
@Component({
  selector: 'app-ion-tabs',
  templateUrl: './ion-tabs.component.html',
  styleUrls: ['./ion-tabs.component.scss'],
})
export class IonTabsComponent  implements OnInit {

  constructor() {
    addIcons({ library, playCircle, radio, search });
   }

  ngOnInit() {}

}
