import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Investment } from '../investment.model';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  @Output() calculate = new EventEmitter<Investment>()
  enteredCurrent = signal('0')
  enteredInvesmtent = signal('0')
  enteredYears = signal('5')
  enteredPrecent = signal('5')


  onSubmit(){
    this.calculate.emit({
      currentAmount: +this.enteredCurrent.set('0'),
      investmentAmonut: +this.enteredInvesmtent.set('0'),
      investmentYear: +this.enteredYears.set('5'),
      precent: +this.enteredPrecent.set('5')
    })
    this.enteredCurrent;
    this.enteredInvesmtent;
    this.enteredYears;
    this.enteredPrecent;
  }
}

