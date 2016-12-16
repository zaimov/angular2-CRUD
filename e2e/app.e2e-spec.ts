import { PortfolioAngular2Page } from './app.po';

describe('portfolio-angular2 App', function() {
  let page: PortfolioAngular2Page;

  beforeEach(() => {
    page = new PortfolioAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
