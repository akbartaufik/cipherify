import {ChiperPage} from './app.po';

describe('chiper App', function () {
  let page: ChiperPage;

  beforeEach(() => {
    page = new ChiperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
