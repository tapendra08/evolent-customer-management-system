import { Component } from '@angular/core';

@Component({
  selector: 'default-login',
  templateUrl: './default-login.component.html'
})
export class DefaultLoginComponent {
 public userName;
 public password;
 public loginFailed:boolean=false;
 public isLoggedIn:boolean=false;
 public showLoginForm : boolean=true;

 constructor(){
  
 }

 ngOnInit(){
   if(window.sessionStorage.getItem('sessionId')!==null){
     this.isLoggedIn=true;
      this.showLoginForm=false;
   }
 
 }

 custlogin(){
    if(this.userName==="admin" && this.password==="admin"){
      this.isLoggedIn=true;
      this.showLoginForm=false;
      window.sessionStorage.setItem("sessionId","EVOL-CMS");
  }else{
    this.loginFailed=true;
  }
 }

}
