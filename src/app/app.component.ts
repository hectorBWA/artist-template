import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showSelected: boolean;
  showForm: boolean;
    constructor() {
        this.showSelected = true;
        this.showForm = false;
    }
    ShowButton() {
        this.showSelected = true;
        this.showForm = true;
    }
    HideButton() {
        this.showSelected = false;
        this.showForm = false;
    }
}
