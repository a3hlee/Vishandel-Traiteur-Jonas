import { Component } from '@angular/core';

interface Product {
  name: string;
  images: string[]; // Array of image URLs for the carousel
  currentImageIndex: number; // Index of the current image in the carousel
  description: string;
}

@Component({
  selector: 'app-assortment',
  templateUrl: './assortment.component.html',
  styleUrls: ['./assortment.component.css'],
})
export class AssortmentComponent {
  products: Product[] = [
    {
      name: 'Nr. 31 Gevarieerde schotel vlees/vis',
      images: ['assets/assortment/31-1.jpg'],
      currentImageIndex: 0,
      description: 'vanaf 2 pers',
    },
    {
      name: 'Nr. 32 Royale schotel vlees/vis',
      images: ['assets/assortment/32-2.jpg', 'assets/assortment/32.jpg'],
      currentImageIndex: 0,
      description: 'altijd 2 plateaus & vanaf 2 pers',
    },
    {
      name: 'Nr. 34 Gevarieerde visschotel',
      images: ['assets/assortment/34-1.jpg', 'assets/assortment/34.jpg'],
      currentImageIndex: 0,
      description: 'vanaf 2 pers',
    },
    {
      name: 'Nr. 36 Gevarieerde visschotel "Jonas"',
      images: ['assets/assortment/36.jpg'],
      currentImageIndex: 0,
      description: 'vanaf 2 pers',
    },
    {
      name: 'Nr. 41 Koud buffet',
      images: ['assets/assortment/41.jpg'],
      currentImageIndex: 0,
      description: 'vanaf 2 pers',
    },
    {
      name: 'Houten Plankje',
      images: ['assets/assortment/houten-plankje-1.jpg', 'assets/assortment/houten-plankje.jpg'],
      currentImageIndex: 0,
      description: 'vanaf 2 pers',
    },
    {
      name: 'Lepelhapjes',
      images: ['assets/assortment/lepelhapjes.jpg', 'assets/assortment/lepelhapjes-1.jpg'],
      currentImageIndex: 0,
      description: 'vanaf 2 pers',
    },
    {
      name: 'Lepelhapjes',
      images: ['assets/assortment/lepelhapje.jpg'],
      currentImageIndex: 0,
      description: 'vanaf 2 pers',
    },
  ];

  constructor() {}

  // Handle image load errors and set to a placeholder
  onImageError(event: any) {
    event.target.src = 'assets/placeholder-vertical.jpg';
  }

  // Show the next image in the carousel for a specific product
  showNextImage(product: Product) {
    if (product.currentImageIndex >= product.images.length - 1) {
      product.currentImageIndex = 0;
    } else {
      product.currentImageIndex++;
    }
  }

  // Show the previous image in the carousel for a specific product
  showPreviousImage(product: Product) {
    if (product.currentImageIndex <= 0) {
      product.currentImageIndex = product.images.length - 1;
    } else {
      product.currentImageIndex--;
    }
  }
}
