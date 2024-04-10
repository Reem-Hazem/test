import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class authService{

  constructor( private _HttpClient:HttpClient,private _router:Router) { }

  userData:any


  authForm(userData:object):Observable <any>
  {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,userData)
  }

  setLogin (userData:object):Observable <any>
  {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,userData)
  }

  userDataDecode()
  {
    
    if( localStorage.getItem('eToken')!=null)
    {
      let encodeToken:any = localStorage.getItem('eToken')
      let decodeData = jwtDecode(encodeToken)
this.userData=decodeData
console.log(decodeData)
    }
  }

  logoutUser():void
  {localStorage.removeItem('eToken')
this._router.navigate(['/Login'])

  }
} 
