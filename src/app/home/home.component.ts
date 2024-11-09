import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Déclaration du tableau des services
  services = [
    { title: 'Musculation', description: 'Des équipements de pointe pour votre entraînement.', image: 'assets/images/musculation.jpg' },
    { title: 'Yoga', description: 'Des cours de yoga pour apaiser votre esprit.', image: 'assets/images/yoga.jpg' },
    { title: 'Coaching', description: 'Coaching personnalisé pour atteindre vos objectifs.', image: 'assets/images/coaching.jpg' }
  ];

  constructor(private router: Router) {}

  navigateTo(page: string): void {
    this.router.navigate([page]);
  }
}
