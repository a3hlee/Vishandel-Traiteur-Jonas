import { Component } from '@angular/core';

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrl: './vacation.component.css'
})
export class VacationComponent {
  shortLeave = "10 t/m 16 maart 2025";
  yearlyLeave = "30 juni t/m 20 juli 2025";
}
