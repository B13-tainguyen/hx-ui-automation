import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchResultPage extends Page {
  /**
   * define selectors using getter methods
   */
  public get tblSearchResult() {
    return $('div[data-testid="category-layer-home"]');
  }

  public get lblHeading() {
    return $('div[data-testid="category-heading"]');
  }
}

export default new SearchResultPage();
