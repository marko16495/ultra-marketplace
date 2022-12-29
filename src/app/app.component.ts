import { Component } from '@angular/core';
import {LocalStorageService} from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ultra-marketplace';
  constructor(private readonly localStorageService: LocalStorageService) {
  }
}
