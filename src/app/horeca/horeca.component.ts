import { Component } from '@angular/core';

@Component({
  selector: 'app-horeca',
  templateUrl: './horeca.component.html',
  styleUrls: ['./horeca.component.css'],
})
export class HorecaComponent {
  images = [
    { src: 'assets/vispannetjes.jpg', alt: 'Vispan' },
    { src: 'assets/vispannetjes-saus.jpg', alt: 'Vispan met saus' },
    { src: 'assets/garnaalkroket-1.jpg', alt: 'Garnaalkroket' },
  ];
  currentImageIndex = 0;

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
