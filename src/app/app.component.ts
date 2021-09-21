import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-moveis';

  duplicatenumber(n: number) {
    return n * 2;
  }

  movies = [{
    title: 'Spider-Man',
    releaseDate: new Date(),
    price: 1400.99
},{
    title: 'Moana',
    releaseDate: new Date('2016-11-14'),
    price: 300.99
}]

}
