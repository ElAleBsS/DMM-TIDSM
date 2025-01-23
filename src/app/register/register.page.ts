import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone:false,
})
export class RegisterPage implements OnInit {

  email:string='';
  password:string='';
  passwordd:string='';

  constructor(
    private navController: NavController
  ) { }

  ngOnInit() {
  }

  Registro(form:NgForm){

    console.log(form.value);

    console.log('Valid ', form.valid);

    if(form.valid == false){
      console.log('Tdoos los campos son requeridos');
      return; 
    }

    if(this.password === this.passwordd){
      this.navController.navigateForward('/login');
    }
    else{
      console.log('Registro incorrecto')
    }

  }

}
