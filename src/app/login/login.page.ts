import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false,
})
export class LoginPage implements OnInit {


  email:string = '';
  password:string = '';

  constructor(
    private navController: NavController
  ) { }

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
      this.navController.navigateForward('/inicio')
    }else{
      console.log('Login incorrecto');
    }
  }

}
