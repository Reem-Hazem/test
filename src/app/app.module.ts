import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { DentistryComponent } from './components/dentistry/dentistry.component';
import { EngineeringComponent } from './components/engineering/engineering.component';
import { ComputerscienceComponent } from './components/computerscience/computerscience.component';
import { FineartsComponent } from './components/finearts/finearts.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DetailsComponent } from './components/details/details.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BlanklayoutComponent } from './components/blanklayout/blanklayout.component';
import { AuthlayoutComponent } from './components/authlayout/authlayout.component';
import { AuthnavbarComponent } from './components/authnavbar/authnavbar.component';
import { HomenavbarComponent } from './components/homenavbar/homenavbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http"


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    MedicineComponent,
    DentistryComponent,
    EngineeringComponent,
    ComputerscienceComponent,
    FineartsComponent,
    NotfoundComponent,
    DetailsComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    BlanklayoutComponent,
    AuthlayoutComponent,
    AuthnavbarComponent,
    HomenavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
