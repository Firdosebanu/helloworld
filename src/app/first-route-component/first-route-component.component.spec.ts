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
import { FirstRouteComponent } from './first-route-component.component';

describe('Component: FirstRouteComponent', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [FirstRouteComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([FirstRouteComponent],
      (component: FirstRouteComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(FirstRouteComponentComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(FirstRouteComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-first-route-component></app-first-route-component>
  `,
  directives: [FirstRouteComponent]
})
class FirstRouteComponentComponentTestController {
}

