import { MasterLayoutDemoPage } from './app.po';

describe('master-layout-demo App', function() {
  let page: MasterLayoutDemoPage;

  beforeEach(() => {
    page = new MasterLayoutDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
