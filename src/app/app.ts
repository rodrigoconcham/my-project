import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './componets/header/header';
import { FormsModule } from '@angular/forms';
import { child } from './componets/child/child';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FormsModule, child],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  Text: String = 'Variables desde el padre';

  person: any = { name: 'John', age: 30 };
}
