import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  heroImg: string[] = [
    'https://www.elaborare.com/wp-content/uploads/2017/10/Panda-1000-Fire-75-CV-01-780x405.jpg',
    'https://hpcvlautochevoglio.wordpress.com/wp-content/uploads/2024/09/daewoo-nubira-2.jpg?w=720&h=405&crop=1',
    'https://lh3.googleusercontent.com/proxy/r-fHbK7kFbsXPNyLonJSBOxsKAQGJGuhqO2C3j-G1P4H5opFFtqfXex8-shi5jE82SJ-P3M7yUXYM3qM-u1DbuR_TYn_C8yd2QgglbTC_h8ZinMkk_vSeUKv4dTz6j-OkGie6XqUgnaIEA4FDqfdnsii3zYn5QsSxesJ98Kt__pTxFx0ejSgAEsHKluwsCD8pAJwMVuj_p1ClW8v47yr',
    'https://cdn.veloce.it/wp-content/uploads/webp/2024/07/gt-r-r34-restomod-built-by-legends-1.jpg.webp',
    'https://dimages2.gazzettaobjects.it/files/image_620_388/uploads/2022/01/31/61f7f2726d22c.jpeg',
    'https://storage.edidomus.it/ListinoAuto/FOTO_A_16_9_640/00001834.jpg',
    'https://media.gqitalia.it/photos/62026959fee22c5f7703f9e3/master/w_1600%2Cc_limit/IPA_IPA28809206.jpg',
  ];

  imgArrayIndex: number = 0;

  ngOnInit() {
    // Cambia immagine ogni 5 secondi
    setInterval(() => {
      this.imgArrayIndex = (this.imgArrayIndex + 1) % this.heroImg.length;
    }, 5000);
  }

  changeImage() {
    return this.heroImg[this.imgArrayIndex];
  }
}
