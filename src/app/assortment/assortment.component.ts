import { Component, OnInit } from '@angular/core';
import { Product, PRODUCTS } from '../../assets/assortment/products'

@Component({
  selector: 'app-assortment',
  templateUrl: './assortment.component.html',
  styleUrls: ['./assortment.component.css'],
})
export class AssortmentComponent implements OnInit {
  products: Product[] = PRODUCTS;

  isModalOpen: boolean = false;
  enlargedImage: string = '';

  constructor() {}

  ngOnInit() {
    this.preloadImages();
  }

  preloadImages() {
    this.products.forEach(product => {
      product.images.forEach(imageSrc => {
        const img = new Image();
        img.src = imageSrc;
      });
    });
  }

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

  // Show the next image in the carousel (modal version)
showNextImageInModal() {
  const product = this.products.find(p => p.images.includes(this.enlargedImage));
  const currentIndex = product?.images.indexOf(this.enlargedImage) || 0;
  const nextIndex = (currentIndex + 1) % (product?.images.length || 1);
  this.enlargedImage = product?.images[nextIndex] || '';
}

// Show the previous image in the carousel (modal version)
showPreviousImageInModal() {
  const product = this.products.find(p => p.images.includes(this.enlargedImage));
  const currentIndex = product?.images.indexOf(this.enlargedImage) || 0;
  const prevIndex = (currentIndex - 1 + (product?.images.length || 1)) % (product?.images.length || 1);
  this.enlargedImage = product?.images[prevIndex] || '';
}


  // Enlarge the image on click
  enlargeImage(product: Product, index: number) {
    this.enlargedImage = product.images[index];
    this.isModalOpen = true;
  }  

  // Close the modal when clicked
  closeModal() {
    this.isModalOpen = false;
  }

  getModalImageCount(): number {
    const product = this.products.find(p => p.images.includes(this.enlargedImage));
    return product ? product.images.length : 0;
  }  
}
