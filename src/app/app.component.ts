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

  movie = {
    title: 'Spider-Man',
    releaseDate: new Date()
}

}
