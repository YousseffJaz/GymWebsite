import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // Injecte le service Router pour la navigation
  constructor(private router: Router) {}

  // Méthode de soumission du formulaire
  onSubmit() {
    // Logique de soumission du formulaire
    console.log("Formulaire soumis !");
    // Redirection après la soumission
    this.router.navigate(['/home']);
  }
}
