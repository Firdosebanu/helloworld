import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { Simly } from './simly.pipe';

describe('Simly Pipe', () => {
  beforeEachProviders(() => [Simly]);

  it('should transform the input', inject([Simly], (pipe: Simly) => {
      expect(pipe.transform(true)).toBe(null);
  }));
});
