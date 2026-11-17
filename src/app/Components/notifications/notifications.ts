import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  afficher: boolean = false;

  toggleNotifications(): void {
    this.afficher = !this.afficher;
  }
}