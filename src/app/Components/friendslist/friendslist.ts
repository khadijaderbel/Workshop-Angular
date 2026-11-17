import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friendslist',
  imports: [FormsModule],
  templateUrl: './friendslist.html',
  styleUrl: './friendslist.css',
})
export class Friendslist {
  friends = [
    { name: 'Sami', email: 'sami@esprit.tn' },
    { name: 'Amine', email: 'amine@esprit.tn' },
    { name: 'Youssef', email: 'youssef@esprit.tn' },
    { name: 'Ahmed', email: 'ahmed@esprit.tn'},
  ];
}
