import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false,
})
export class LoginPage implements OnInit {


  email:string = '';
  password:string = '';

  constructor() { }

  ngOnInit() {
  }

  login(form:NgForm){
    
    //Obtener valores de un formulario
    console.log(form.value);

    //validar formulario
    console.log('Valid', form.valid);

    //si el formulario es invalido
    //console.log('Todos los campos son requeridos)
    //return

    if(form.valid == false){
      console.log('Tdoos los campos son requeridos');
      return; 
    }

    if(this.email === 'admin' && this.password=== 'admin'){
      console.log('Login correcto');
    }else{
      console.log('Login incorrecto');
    }
  }

}
