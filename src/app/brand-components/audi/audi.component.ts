import { Component } from '@angular/core';
import { IAuto } from '../../i-auto';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss',
})
export class AudiComponent {
  audiArr: IAuto[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((res) => res.json())
      .then((audiArray) => {
        this.audiArr = audiArray.filter(
          (auto: { brand: string }) => auto.brand === 'Audi'
        );
      })
      .catch((err) => console.log(err, 'Errore risposta server'));
  }
}
