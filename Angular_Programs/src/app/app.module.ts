import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ChandrayanComponent } from './chandrayan/chandrayan.component';
import { RouterModule, Routes } from '@angular/router';


const array:Routes=[
{
  path:"",component:RegistrationComponent
},
{
  path:"chandra",component:ChandrayanComponent
}



]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ChandrayanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(array)
  ],
  // exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
