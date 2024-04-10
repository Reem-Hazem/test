import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlanklayoutComponent } from './components/blanklayout/blanklayout.component';
import { HomeComponent } from './components/home/home.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { DentistryComponent } from './components/dentistry/dentistry.component';
import { EngineeringComponent } from './components/engineering/engineering.component';
import { FineartsComponent } from './components/finearts/finearts.component';
import { AuthlayoutComponent } from './components/authlayout/authlayout.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './shared/guards/auth.guard';

const routes: Routes = [

  {path:'',canActivate:[authGuard],component:BlanklayoutComponent ,children:[
    {path:'',redirectTo:"home",pathMatch:'full'},
    {path:'home' , component:HomeComponent ,title:'Home Page' },
    {path:'medicine',component:MedicineComponent,title:'Medicine Tools'},
    {path:'dentistry',component:DentistryComponent,title:'Dental Tools'},
    {path:'engineering' ,component:EngineeringComponent,title:'Engineering Tools'},
    {path:'finearts',component:FineartsComponent,title:"Art Tools"}
  ]},
  {path:'' , component:AuthlayoutComponent,children:[
    {path:'register' , component:RegisterComponent , title:'Register'},
    {path:'login' , component:LoginComponent,title:'Login'}
  ]},
  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
