import { Component } from '@angular/core';
import { IAuto } from '../../i-auto';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  autoArr: IAuto[] = [];
  fiatArr: IAuto[] = [];
  audiArr: IAuto[] = [];
  fordArr: IAuto[] = [];
  randomIndex: number = 0;
  randomIndex2: number = 0;

  ngOnInit() {
    fetch('db.json')
      .then((res) => res.json())
      .then((autoArray) => {
        this.autoArr = autoArray;
        this.fiatArr = this.autoArr.filter((auto) => auto.brand === 'Fiat');
        this.audiArr = this.autoArr.filter((auto) => auto.brand === 'Audi');
        this.fordArr = this.autoArr.filter((auto) => auto.brand === 'Ford');

        this.randomIndex = Math.floor(Math.random() * autoArray.length);
        this.randomIndex2 = Math.floor(Math.random() * autoArray.length);
      })
      .catch((err) => console.log(err, 'Errore risposta server'));
  }
}
