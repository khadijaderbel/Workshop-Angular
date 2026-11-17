import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './Components/navbar/navbar';
import { Header } from './Components/header/header';
import { Friendslist } from './Components/friendslist/friendslist';
import { Notifications } from './Components/notifications/notifications';
import { Profil } from './Components/profil/profil';
import { Footer } from './Components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Header,Friendslist,Notifications,Profil,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Confrencia');
}
