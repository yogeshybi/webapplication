import { GoAppPage } from './app.po';

describe('go-app App', () => {
  let page: GoAppPage;

  beforeEach(() => {
    page = new GoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
