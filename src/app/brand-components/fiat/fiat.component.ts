import { Component } from '@angular/core';
import { IAuto } from '../../i-auto';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss',
})
export class FiatComponent {
  fiatArr: IAuto[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((res) => res.json())
      .then((fiatArray) => {
        this.fiatArr = fiatArray.filter(
          (auto: { brand: string }) => auto.brand === 'Fiat'
        );
      })
      .catch((err) => console.log(err, 'Errore risposta server'));
  }
}
