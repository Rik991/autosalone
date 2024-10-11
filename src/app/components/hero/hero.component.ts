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
    'https://www.quartamarcia.it/wp-content/uploads/2016/02/furgone-volkswagen-scooby-doo.jpg',
    'https://lh3.googleusercontent.com/proxy/r-fHbK7kFbsXPNyLonJSBOxsKAQGJGuhqO2C3j-G1P4H5opFFtqfXex8-shi5jE82SJ-P3M7yUXYM3qM-u1DbuR_TYn_C8yd2QgglbTC_h8ZinMkk_vSeUKv4dTz6j-OkGie6XqUgnaIEA4FDqfdnsii3zYn5QsSxesJ98Kt__pTxFx0ejSgAEsHKluwsCD8pAJwMVuj_p1ClW8v47yr',
    'https://cdn.veloce.it/wp-content/uploads/webp/2024/07/gt-r-r34-restomod-built-by-legends-1.jpg.webp',
    'https://dimages2.gazzettaobjects.it/files/image_620_388/uploads/2022/01/31/61f7f2726d22c.jpeg',
    'https://storage.edidomus.it/ListinoAuto/FOTO_A_16_9_640/00001834.jpg',
    'https://media.gqitalia.it/photos/62026959fee22c5f7703f9e3/master/w_1600%2Cc_limit/IPA_IPA28809206.jpg',
    'https://i.pinimg.com/736x/45/b6/5c/45b65cc6d3af413627369380597fe402.jpg',
    'https://cdn.motor1.com/images/mgl/nOzgk/s1/4x3/pontiac-firebird-trans-am-kitt-supercar.webp',
    'https://d2v1gjawtegg5z.cloudfront.net/posts/preview_images/000/006/493/original/2017_nissan_nismo_370z_07.jpeg?1717516024',
    'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2023/02_09_refresh/aven_gate_s_04_m.jpg',
    'https://www.italpassion.fr/wp-content/uploads/2024/04/ferrari-electrique-1024x683.jpg',
    'https://cdn.motor1.com/images/mgl/YyMPl/s3/tesla-model-s-carro-funebre.jpg',
  ];

  imgArrayIndex: number = 0;

  ngOnInit() {
    // Cambia immagine ogni 5 secondi
    setInterval(() => {
      this.imgArrayIndex = (this.imgArrayIndex + 1) % this.heroImg.length; // dividendo l'indice + 1 con la lunghezza del suo array ritorno 0 di resto così che le img ripartano da capo
    }, 5000);
  }

  changeImage() {
    return this.heroImg[this.imgArrayIndex];
  }
}
