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
    { name: 'Nr. 41 Koud buffet', image: 'assets/placeholder.jpg', description: "vanaf 2 pers" },
    { name: 'Nr. 41 Koud buffet', image: 'assets/placeholder.jpg', description: "vanaf 2 pers" },
    { name: 'Nr. 41 Koud buffet', image: 'assets/placeholder.jpg', description: "vanaf 2 pers" },
    { name: 'Nr. 41 Koud buffet', image: 'assets/placeholder.jpg', description: "vanaf 2 pers" },
    { name: 'Nr. 41 Koud buffet', image: 'assets/placeholder.jpg', description: "vanaf 2 pers" },
    { name: 'Nr. 41 Koud buffet', image: 'assets/placeholder.jpg', description: "vanaf 2 pers" },
    { name: 'Nr. 41 Koud buffet', image: 'assets/placeholder.jpg', description: "vanaf 2 pers" },
    { name: 'Nr. 41 Koud buffet', image: 'assets/placeholder.jpg', description: "vanaf 2 pers" },
    { name: 'Nr. 41 Koud buffet', image: 'assets/placeholder.jpg', description: "vanaf 2 pers" },
    { name: 'Nr. 41 Koud buffet', image: 'assets/placeholder.jpg', description: "vanaf 2 pers" },
    { name: 'Nr. 41 Koud buffet', image: 'assets/placeholder.jpg', description: "vanaf 2 pers" },
  ];

  constructor() { }
}
