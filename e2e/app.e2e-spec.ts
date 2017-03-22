import { BankoftrustPage } from './app.po';

describe('bankoftrust App', () => {
  let page: BankoftrustPage;

  beforeEach(() => {
    page = new BankoftrustPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
