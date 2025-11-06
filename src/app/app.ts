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

}