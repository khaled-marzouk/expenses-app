import { Component, EventEmitter, Output, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInputs } from '../investment-inputs.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInputs>()

  enteredInitialInvestment: string = "0";
  annualInvestment: string = "0";
  expectedReturn: string = "5";
  duration: string = "10"


  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration
    })
  }


}
