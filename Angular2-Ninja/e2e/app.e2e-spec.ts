import { SuperManAppPage } from './app.po';

describe('super-man-app App', function() {
  let page: SuperManAppPage;

  beforeEach(() => {
    page = new SuperManAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
