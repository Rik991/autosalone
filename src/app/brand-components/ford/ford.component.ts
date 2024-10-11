import { Component } from '@angular/core';
import { IAuto } from '../../i-auto';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss',
})
export class FordComponent {
  fordArr: IAuto[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((res) => res.json())
      .then((fordArray) => {
        this.fordArr = fordArray.filter(
          (auto: { brand: string }) => auto.brand === 'Ford'
        );
      })
      .catch((err) => console.log(err, 'Errore risposta server'));
  }
}
