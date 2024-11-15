import { Component } from '@angular/core';

@Component({
  selector: 'app-horeca',
  templateUrl: './horeca.component.html',
  styleUrls: ['./horeca.component.css'],
})
export class HorecaComponent {
  images = [
    { src: 'assets/jonas-front.jpg', alt: 'Image 1 Description' },
    { src: 'assets/foodstore.png', alt: 'Image 2 Description' },
    { src: 'assets/placeholder.jpg', alt: 'Image 3 Description' },
  ];
  currentImageIndex = 0;

  // showNextImage() {
  //   // Using modular arithmetic to loop to the beginning after the last image
  //   this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  // }

  // showPreviousImage() {
  //   // Modular arithmetic to loop to the end if we go below 0
  //   this.currentImageIndex =
  //     (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  // }

  showNextImage() {
    // If we're at the last image, reset to the first image
    if (this.currentImageIndex >= this.images.length - 1) {
      this.currentImageIndex = 0;
    } else {
      this.currentImageIndex++;
    }
  }

  showPreviousImage() {
    // If we're at the first image, go to the last image
    if (this.currentImageIndex <= 0) {
      this.currentImageIndex = this.images.length - 1;
    } else {
      this.currentImageIndex--;
    }
  }
}
