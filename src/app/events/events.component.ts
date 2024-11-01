import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-events',
  templateUrl: './events.component.html',
  imports: [CommonModule],
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  events = [
    { name: 'Yoga', date: '2024-11-01', description: 'Classe de yoga pour tous les niveaux' },
    { name: 'Danse', date: '2024-11-02', description: 'Atelier de danse contemporaine' },
    // Ajoutez d'autres événements ici
  ];
}
