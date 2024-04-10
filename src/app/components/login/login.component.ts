import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLoading:Boolean=false
  loginErrorMsg:string=''
  constructor(private _AuthService:authService,private _router:Router,private _formBuilder:FormBuilder){}
  
  // loginForm:FormGroup= new FormGroup({
  //   email: new FormControl('',[Validators.required,Validators.email]),
  //   password: new FormControl('',[Validators.required,Validators.pattern(/^[A-z][a-z0-9]{3,10}$/)])
  // })
//--------------formBuilder---------------
  loginForm:FormGroup=this._formBuilder.group({
    email:[null,[Validators.required,Validators.email]],
    password:[null,[Validators.required,Validators.pattern(/^[A-z][a-z0-9]{3,10}$/)]]

  })


handleLogin():void
{
if(this.loginForm.valid){
  this.isLoading=true

  this._AuthService.setLogin(this.loginForm.value).subscribe({
    next:(response)=>{
      // console.log(response)
      if(response.message="success")
      {this.isLoading=false
      localStorage.setItem('eToken',response.token)
      this._AuthService.userDataDecode()

        this._router.navigate(['/home'])
      }
    },
    error:(err)=>{
  this.isLoading=false

     this.loginErrorMsg= err.error.message;
      
      
      
    }
  })


}
else{
  this.loginForm.markAllAsTouched()
}
}

}
