import { Component} from '@angular/core';
import {AdditionService} from'./addition.service';
import{Simly} from'../simly.pipe'
@Component({
  moduleId: module.id,
  selector: 'app-addition',
  templateUrl: 'addition.component.html',
  styleUrls: ['addition.component.css'],
  providers: [AdditionService],
  pipes: [Simly]
})
export class AdditionComponent {
  num1: number = 0;
  num2: number = 0;
  sum: number = 0;
  
  constructor(private additionservice: AdditionService) {
    
  }
  findSum(n1: number, n2: number) {
    return this.sum = this.additionservice.getSum(n1, n2);
  }
}
