import { DemoAngularWednesdayPage } from './app.po';

describe('demo-angular-wednesday App', () => {
  let page: DemoAngularWednesdayPage;

  beforeEach(() => {
    page = new DemoAngularWednesdayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
