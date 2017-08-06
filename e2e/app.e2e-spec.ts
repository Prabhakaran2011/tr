import { TechReelsPage } from './app.po';

describe('tech-reels App', () => {
  let page: TechReelsPage;

  beforeEach(() => {
    page = new TechReelsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
