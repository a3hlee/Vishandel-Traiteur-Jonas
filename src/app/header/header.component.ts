import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    pdfFiles: string[] = [];
  
    constructor(private http: HttpClient) {}
  
    ngOnInit(): void {
      this.loadPdfFiles();
    }

  loadPdfFiles() {
    this.http.get<string[]>('http://localhost:3000/api/pdf-list').subscribe(files => {
      this.pdfFiles = files;
    });
  }

  formatFileName(pdf: string): string {
    return pdf
      .replace('.pdf', '') // Remove .pdf
      .replace(/-/g, ' ') // Replace - with space
      .split(' ') // Split into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
      .join(' '); // Join words back
  }
}
