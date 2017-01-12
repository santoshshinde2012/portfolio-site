import { SantoshShindePage } from './app.po';

describe('santosh-shinde App', function() {
  let page: SantoshShindePage;

  beforeEach(() => {
    page = new SantoshShindePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
