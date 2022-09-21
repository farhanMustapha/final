import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string='';
  password : string='';

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    if(this.email ==''){
      alert('please enter email');
      return;
    }

    if(this.password ==''){
      alert('please enter password');
      return;
    }
  }

}
