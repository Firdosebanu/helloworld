export class AngAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ang-app-app h1')).getText();
  }
}
