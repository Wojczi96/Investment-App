import { Component, Input } from '@angular/core';
import { Results } from '../results.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
  // results = input<Results[] | undefined>()
  @Input() results?: Results[];
}
