import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header} from './componets/header/header';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 movies: string[] = ['The Shawshank Redemption', 'The Godfather', 'The Dark Knight']; 
 animals: any = [
  {
    id: 1,
    name: "dog",
    img: "https://cdn.pixabay.com/photo/2019/02/06/15/18/puppy-3979350_1280.jpg"
  },
  {
    id: 2,
    name: "cat",
    img: "https://i.pinimg.com/originals/2c/34/33/2c34330ef8ceaaab2f113e37359bee65.jpg"
  },
  {
    id: 3,
    name: "bird",
    img: "https://i.ytimg.com/vi/rKk4WZPi5iU/maxresdefault.jpg"
  },
];




}