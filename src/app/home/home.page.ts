import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  ngOnInit() {
    console.log('Hola mundo');
    let numero = 0;
    numero = 5;
    numero =7;
    numero = numero * 2;
    numero = numero / 3;  

    console.log('mi primero ionic');
    console.log('fuckin shit');
    console.log('uu i i a aa ui ii aa')
  }

  constructor() {}

}
