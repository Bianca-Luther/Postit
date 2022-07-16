import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  public email: string ='';
  public password: string = '';

  public loginPayload: LoginPayload= { email: string, password: string } = {
    email: '',
    password: '',
  }

  public login(): void {
    console.log('this.email')
  }

}
