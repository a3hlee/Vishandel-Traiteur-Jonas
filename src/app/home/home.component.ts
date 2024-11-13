import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imageSrc = 'assets/home.jpg'
  placeholder = 'assets/placeholder.jpg';
  imageAlt = 'Interior view of Vishandel-Traiteur Jonas';
}
