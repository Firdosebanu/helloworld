import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { AdditionService } from './addition.service';

describe('Addition Service', () => {
  beforeEachProviders(() => [AdditionService]);

  it('should ...',
    inject([AdditionService], (service: AdditionService) => {
      expect(service).toBeTruthy();
    }));
  it('should do addition properly',
    inject([AdditionService], (service: AdditionService) => {
      expect(service.getSum(3, 5)).toEqual(8);
    }));
});
