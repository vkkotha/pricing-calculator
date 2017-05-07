import { PricingToolPage } from './app.po';

describe('pricing-tool App', () => {
  let page: PricingToolPage;

  beforeEach(() => {
    page = new PricingToolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
