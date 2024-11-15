import { Component } from '@angular/core';

interface Product {
  name: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-assortment',
  templateUrl: './assortment.component.html',
  styleUrls: ['./assortment.component.css']
})
export class AssortmentComponent {
  products: Product[] = [
    { name: 'Nr. 31 Gevarieerde schotel vlees/vis', image: 'assets/assortment/31-1.jpg', description: "vanaf 2 pers" },
    { name: 'Nr. 32 Royale schotel vlees/vis', image: 'assets/assortment/32-2.jpg', description: "altijd 2 plateaus & vanaf 2 pers " },
    { name: 'Nr. 34 Gevarieerde visschotel', image: 'assets/assortment/34-1.jpg', description: "vanaf 2 pers" },
    { name: 'Nr. 36 Gevarieerde visschotel "Jonas"', image: 'assets/assortment/36.jpg', description: "vanaf 2 pers" },
    { name: 'Nr. 41 Koud buffet', image: 'assets/assortment/41.jpg', description: "vanaf 2 pers" },
    { name: 'Houten Plankje', image: 'assets/assortment/houten-plankje-1.jpg', description: "vanaf 2 pers" },
    { name: 'Lepelhapjes', image: 'assets/assortment/lepelhapjes.jpg', description: "vanaf 2 pers" },
    { name: 'Lepelhapjes', image: 'assets/assortment/lepelhaps.jpg', description: "vanaf 2 pers" },
  ];

  constructor() { }

  // This method handles the error event when the image fails to load
  onImageError(event: any) {
    // Set the src to the placeholder image if the original image fails to load
    event.target.src = 'assets/placeholder-vertical.jpg';
  }
}
