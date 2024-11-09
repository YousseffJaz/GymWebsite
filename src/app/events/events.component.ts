import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-evenement',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EvenementComponent implements OnInit {
  evenement: any[] = [];  // Tableau pour stocker les événements
  nomEvenement: string = ''; // Variable pour le formulaire
  description: string = ''; // Variable pour le formulaire
  dateEvenement: string = ''; // Variable pour le formulaire
email: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Appel pour récupérer les événements
    this.getEvenements();
  }

  getEvenements(): void {
    this.http.get<any[]>('https://api.example.com/evenements')
      .subscribe(
        (data) => {
          this.evenement = data;
        },
        (error) => {
          console.error('Erreur de récupération des événements', error);
        }
      );
  }

  // Méthode pour gérer la soumission du formulaire
  onSubmit(): void {
    // Logique pour ajouter ou enregistrer l'événement
    console.log('Nom:', this.nomEvenement);
    console.log('Description:', this.description);
    console.log('Date:', this.dateEvenement);

    // Vous pouvez aussi envoyer les données à une API ici
    this.http.post('https://api.example.com/ajouterEvenement', {
      nom: this.nomEvenement,
      description: this.description,
      date: this.dateEvenement
    }).subscribe(
      (response) => {
        console.log('Événement ajouté avec succès', response);
        // Réinitialisez les champs ou récupérez les événements après ajout
        this.getEvenements();
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de l\'événement', error);
      }
    );
  }
}
