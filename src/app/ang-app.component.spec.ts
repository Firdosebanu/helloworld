import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngAppAppComponent } from '../app/ang-app.component';

beforeEachProviders(() => [AngAppAppComponent]);

describe('App: AngApp', () => {
  it('should create the app',
      inject([AngAppAppComponent], (app: AngAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ang-app works!\'',
      inject([AngAppAppComponent], (app: AngAppAppComponent) => {
    expect(app.title).toEqual('ang-app works!');
  }));
});
