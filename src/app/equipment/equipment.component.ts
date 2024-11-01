import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  imports: [CommonModule],
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent {
  equipmentList = [
    { name: 'Tapis de course', description: 'Tapis de course moderne avec suivi cardio.' },
    { name: 'Poids libres', description: 'Poids allant de 2kg à 50kg.' },
    // Ajoutez d'autres équipements ici
  ];
}
