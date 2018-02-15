import { TestWijmoPage } from './app.po';

describe('test-wijmo App', function() {
  let page: TestWijmoPage;

  beforeEach(() => {
    page = new TestWijmoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
