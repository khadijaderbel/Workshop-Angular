import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
    title=signal('© 2026 Conference App - Gestion des conférences');

}
