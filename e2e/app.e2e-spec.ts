import { ReduxArchitecturePage } from './app.po';

describe('redux-architecture App', () => {
  let page: ReduxArchitecturePage;

  beforeEach(() => {
    page = new ReduxArchitecturePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
