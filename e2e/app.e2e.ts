import { AngAppPage } from './app.po';

describe('ang-app App', function() {
  let page: AngAppPage;

  beforeEach(() => {
    page = new AngAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ang-app works!');
  });
});
