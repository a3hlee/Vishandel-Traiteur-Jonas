import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentYear = new Date().getFullYear();
  title = 'test-site';

  isLoading = true;

  ngOnInit(): void {
    // Simulate a delay for loading (e.g., fetching data or assets)
    setTimeout(() => {
      this.isLoading = false; // Stop showing the spinner once loading is complete
    }, 1000); // Adjust the timeout as needed
  }
}
