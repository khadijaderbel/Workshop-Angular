import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  links = [
    { name: 'Accueil' },
    { name: 'Profile' },
    { name: 'Conférences' },
    { name: 'Détail' },
    { name: 'Amis'},
    { name: 'Notifications'}
  ];
}
