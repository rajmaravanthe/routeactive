import { RouteactivatePage } from './app.po';

describe('routeactivate App', function() {
  let page: RouteactivatePage;

  beforeEach(() => {
    page = new RouteactivatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
