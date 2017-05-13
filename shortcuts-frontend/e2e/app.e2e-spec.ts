import { ShortcutsFrontendPage } from './app.po';

describe('shortcuts-frontend App', () => {
  let page: ShortcutsFrontendPage;

  beforeEach(() => {
    page = new ShortcutsFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
