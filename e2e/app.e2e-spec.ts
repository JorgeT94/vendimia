import { VendimiaPage } from './app.po';

describe('vendimia App', () => {
  let page: VendimiaPage;

  beforeEach(() => {
    page = new VendimiaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
