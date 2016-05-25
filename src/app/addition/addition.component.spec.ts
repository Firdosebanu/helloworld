import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AdditionComponent } from './addition.component';
import {AdditionService} from './addition.service';

describe('Component: Addition', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [AdditionComponent, AdditionService]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));
  it('should inject the component', inject([AdditionComponent],
    (component: AdditionComponent) => {
      expect(component).toBeTruthy();
    }));
  it('should calculate sum', inject([AdditionComponent],
    (component: AdditionComponent) => {
      console.log(component.sum);
      component.findSum(1, 2);
      
      expect(component.sum).toEqual(3);
      console.log("After method invoke:"+component.sum);
    }));
  it('should create the component', inject([], () => {
    return builder.createAsync(AdditionComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(AdditionComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-addition></app-addition>
  `,
  directives: [AdditionComponent]
})
class AdditionComponentTestController {
}
