import { HttpErrorResponse } from '@angular/common/http';
import { authService } from './../../shared/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  errorMsg:string=""
  isLoading:boolean=false
RegisterForm: FormGroup = new FormGroup({
  name:new FormControl("" , [Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
  email:new FormControl("",[Validators.required,Validators.email]),
  password:new FormControl("",[Validators.required,Validators.pattern(/^[A-z][a-z0-9]{3,10}$/)]),
  rePassword:new FormControl("",[Validators.required,Validators.pattern(/^[A-z][a-z0-9]{3,10}$/)]),
  phone:new FormControl("",[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
 
})

constructor(private _authService:authService,private _router:Router){}
handleForm():void{
  if(this.RegisterForm.valid){
   this. isLoading=true;
 
   this._authService.authForm(this.RegisterForm.value).subscribe({
    next:(response)=>{
      if(response.message=='success'){
        this.isLoading=false
this._router.navigate(['/Login'])
      }
    },
    error:(err:HttpErrorResponse)=>{
      this.isLoading=false
this.errorMsg=err.error.message
   }
  

})
}
}
}
