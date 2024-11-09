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
import { EvenementComponent } from './events/events.component';  // Corrigé : Importation d'EvenementComponent
import { EquipmentComponent } from './equipment/equipment.component';  // Corrigé : Importation d'EquipmentComponent
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    EvenementComponent,   // Ajoutez EvenementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
