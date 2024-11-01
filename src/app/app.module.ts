import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app.routes';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { EquipmentComponent } from './equipment/equipment.component';

@NgModule({
  declarations: [AppComponent], // Seul AppComponent est déclaré ici
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    HomeComponent, // Importation des composants autonomes
    RegisterComponent,
    EventsComponent,
    EquipmentComponent
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
