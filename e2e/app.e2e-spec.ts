import { SalesforceUiPage } from './app.po';

describe('salesforce-ui App', function() {
  let page: SalesforceUiPage;

  beforeEach(() => {
    page = new SalesforceUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
