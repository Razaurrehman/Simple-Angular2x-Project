import { SimpleDirectoryAppPage } from './app.po';

describe('simple-directory-app App', function() {
  let page: SimpleDirectoryAppPage;

  beforeEach(() => {
    page = new SimpleDirectoryAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
